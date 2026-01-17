"""
FastAPI API to fetch last 200 AoPS sub requests and return JSON
"""

import imaplib
import email
import re
from collections import Counter
import os

from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

# -----------------------------
# CONFIG
# -----------------------------
IMAP_SERVER = "imap.gmail.com"
IMAP_PORT = 993
USERNAME = os.getenv("USERNAMEA")
PASSWORD = os.getenv("PASSWORDA")

app = FastAPI(title="AoPS Sub Requests API")

# -----------------------------
# CORS (FOR REACT FRONTEND)
# -----------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# FETCH EMAILS AND PARSE SUB REQUESTS
# -----------------------------
def fetch_last_200_sub_requests():
    mail = imaplib.IMAP4_SSL(IMAP_SERVER, IMAP_PORT)
    mail.login(USERNAME, PASSWORD)
    mail.select("inbox")

    status, data = mail.search(None, '(FROM "sandiego-cv@aopsacademy.org")')
    email_ids = data[0].split()
    if not email_ids:
        mail.logout()
        return []

    last_200_ids = email_ids[-200:]
    sub_day_times = []

    for e_id in last_200_ids:
        status, msg_data = mail.fetch(e_id, "(RFC822)")
        raw_email = msg_data[0][1]
        msg = email.message_from_bytes(raw_email)

        body = ""
        if msg.is_multipart():
            for part in msg.walk():
                if part.get_content_type() == "text/plain":
                    charset = part.get_content_charset() or "utf-8"
                    body += part.get_payload(decode=True).decode(
                        charset, errors="ignore"
                    )
        else:
            charset = msg.get_content_charset() or "utf-8"
            body = msg.get_payload(decode=True).decode(charset, errors="ignore")

        if "A substitute has been requested for" not in body:
            continue

        match = re.search(
            r"begins (\w+) \w+ \d+(?:st|nd|rd|th)? at (\d{1,2}:\d{2}) ?(?:am|pm)? "
            r"and ends at (\d{1,2}:\d{2}) ?(?:am|pm)?",
            body,
            re.IGNORECASE,
        )

        if match:
            day_of_week = match.group(1)
            start_time = match.group(2)
            end_time = match.group(3)
            sub_day_times.append((day_of_week, f"{start_time} - {end_time}"))

    mail.logout()
    return sub_day_times

# -----------------------------
# GENERATE COUNTER
# -----------------------------
def generate_counter(sub_day_times):
    counter = Counter()
    for day, time_slot in sub_day_times:
        counter[f"{day} {time_slot}"] += 1
    return counter

# -----------------------------
# FASTAPI ENDPOINT
# -----------------------------
@app.get("/api/sub_requests")
def get_sub_requests():
    sub_day_times = fetch_last_200_sub_requests()
    counter = generate_counter(sub_day_times)
    return JSONResponse(content=dict(counter))

# -----------------------------
# RUN SERVER
# -----------------------------
# Start with:
# python -m uvicorn main:app --reload
