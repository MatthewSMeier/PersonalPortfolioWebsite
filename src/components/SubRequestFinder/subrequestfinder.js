import { useEffect, useRef } from "react";
import { Link } from "react-router-dom"; // <-- added for Home button
import Chart from "chart.js/auto";
import "./subrequestfinder.css"; 
import SubRequestNavbar from "./SubRequestNavbar";

export default function SubRequestFinder() {
  const pieCanvasRef = useRef(null);
  const barCanvasRef = useRef(null);
  const dayBarCanvasRef = useRef(null);

  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);
  const dayBarChartRef = useRef(null);

  const isMobile = window.innerWidth < 768;

  // -----------------------------
  // DEFAULT DATA
  // -----------------------------
  const defaultPieData = {
    "Math Level 1": 1,
    "Math Level 2": 2,
    "Math Level 3": 3,
    "Math Level 4": 4,
    "Math Level 5": 5,
    "Prealgebra": 1,
    "Algebra 1": 2,
    "Geometry": 3,
    "Algebra 2": 4,
    "Precalculus": 5,
    "Calculus": 6,
  };

  const defaultBarData = {
    "Monday 4:00 - 5:45": 1,
    "Monday 6:15 - 8:00": 5,
    "Saturday 10:15 - 12:00": 17,
    "Saturday 12:30 - 2:15": 3,
    "Sunday 2:45 - 4:30": 4,
    "Sunday 5:00 - 6:45": 4,
    "Sunday 8:00 - 9:45": 3,
    "Sunday 10:15 - 12:00": 7,
    "Thursday 1:45 - 3:30": 3,
    "Thursday 6:15 - 8:00": 1,
    "Tuesday 6:15 - 8:00": 4,
    "Wednesday 1:45 - 3:30": 1,
    "Wednesday 4:00 - 5:45": 2,
    "Wednesday 6:15 - 8:00": 5,
  };

  // -----------------------------
  // PIE CHART
  // -----------------------------
  const renderPieChart = (data) => {
    if (!pieCanvasRef.current) return;
    if (pieChartRef.current) pieChartRef.current.destroy();

    pieChartRef.current = new Chart(pieCanvasRef.current, {
      type: "pie",
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            data: Object.values(data),
            backgroundColor: [
              "#00c8ff",
              "#ff7a00",
              "#2ecc71",
              "#9b59b6",
              "#e74c3c",
              "#f1c40f",
              "#1abc9c",
              "#3498db",
              "#e67e22",
              "#95a5a6",
              "#c0392b",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Sub Requests by Class",
            color: "#ffffff",
            font: { size: isMobile ? 14 : 18 },
          },
          legend: {
            position: isMobile ? "bottom" : "right",
            labels: {
              color: "#ffffff",
              boxWidth: isMobile ? 12 : 18,
              font: { size: isMobile ? 10 : 12 },
            },
          },
        },
      },
    });
  };

  // -----------------------------
  // BAR CHART
  // -----------------------------
  const renderBarChart = (data) => {
    if (!barCanvasRef.current) return;
    if (barChartRef.current) barChartRef.current.destroy();

    barChartRef.current = new Chart(barCanvasRef.current, {
      type: "bar",
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            label: "Sub Requests",
            data: Object.values(data),
            backgroundColor: "rgba(0, 200, 255, 0.7)",
            borderColor: "rgba(0, 200, 255, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Sub Requests by Day & Time Slot",
            color: "#ffffff",
            font: { size: isMobile ? 14 : 18 },
          },
          legend: { display: false },
        },
        scales: {
          x: {
            ticks: {
              color: "#ffffff",
              maxRotation: isMobile ? 90 : 45,
              minRotation: isMobile ? 90 : 45,
              font: { size: isMobile ? 9 : 11 },
            },
            grid: { color: "rgba(255,255,255,0.1)" },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: "#ffffff",
              font: { size: isMobile ? 10 : 12 },
            },
            grid: { color: "rgba(255,255,255,0.1)" },
          },
        },
      },
    });
  };

  // -----------------------------
  // DAY BAR CHART
  // -----------------------------
  const renderDayBarChart = (data) => {
    if (!dayBarCanvasRef.current) return;
    if (dayBarChartRef.current) dayBarChartRef.current.destroy();

    dayBarChartRef.current = new Chart(dayBarCanvasRef.current, {
      type: "bar",
      data: {
        labels: Object.keys(data),
        datasets: [
          {
            label: "Sub Requests",
            data: Object.values(data),
            backgroundColor: "rgba(255,122,0,0.7)",
            borderColor: "rgba(255,122,0,1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Sub Requests by Day",
            color: "#ffffff",
          },
          legend: { display: false },
        },
        scales: {
          x: { ticks: { color: "#ffffff" }},
          y: { beginAtZero: true, ticks: { color: "#ffffff" }},
        },
      },
    });
  };

  // -----------------------------
  // LOAD DATA
  // -----------------------------
  useEffect(() => {
    renderPieChart(defaultPieData);
    renderBarChart(defaultBarData);

    async function loadData() {
      try {
        const [pieRes, barRes, dayRes] = await Promise.all([
          fetch("http://localhost:8000/api/class_breakdown"),
          fetch("http://localhost:8000/api/sub_requests"),
          fetch("http://localhost:8000/api/sub_requests_by_day"),
        ]);

        if (pieRes.ok) {
          const pieData = await pieRes.json();
          if (Object.keys(pieData).length) renderPieChart(pieData);
        }

        if (barRes.ok) {
          const barData = await barRes.json();
          if (Object.keys(barData).length) renderBarChart(barData);
        }

        if (dayRes.ok) {
          const dayData = await dayRes.json();
          if (Object.keys(dayData).length) renderDayBarChart(dayData);
        }
      } catch (err) {
        console.error("Failed to load charts:", err);
      }
    }

    loadData();
  }, []);

  // -----------------------------
  // UI
  // -----------------------------
  return (
    <section className="subpage">
        <SubRequestNavbar />

      <h1>Sub Request Finder</h1>
      <p>
        This dashboard visualizes substitute requests by class and time,
        helping instructors identify high-demand periods at a glance.
      </p>

      {/* CENTERED GREY BOX */}
      <div className="info-box">
        <h2>Project Overview</h2>
        <p>
          This project parses real AoPS substitute request emails using a
          FastAPI backend with Gmail IMAP, caches results for performance,
          and visualizes trends using Chart.js.
        </p>
      </div>

      {/* PIE CHART */}
      <div
        style={{
          height: isMobile ? "320px" : "360px",
          maxWidth: "900px",
          width: "100%",
          margin: "0 auto 3rem",
          backgroundColor: "#111",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <canvas ref={pieCanvasRef} />
      </div>

      {/* CENTERED GREY BOX */}
      <div className="info-box">
        <h2>Project Overview</h2>
        <p>
          This dashboard visualizes substitute requests in the mathematics department by math level, day, and time slot. This helping instructors identify high-demand periods at a glance. Data is automatically updated from email requests.
        </p>
      </div>

      {/* BAR CHART */}
      <div
        style={{
          height: isMobile ? "420px" : "450px",
          maxWidth: "1000px",
          width: "100%",
          margin: "0 auto",
          backgroundColor: "#111",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <canvas ref={barCanvasRef} />
      </div>

      {/* CENTERED GREY BOX */}
      <div className="info-box">
        <h2>Project Overview</h2>
        <p>
          This dashboard visualizes substitute requests in the mathematics department by math level, day, and time slot. This helping instructors identify high-demand periods at a glance. Data is automatically updated from email requests.
        </p>
      </div>

      {/* DAY BAR CHART */}
      <div
        style={{
          height: isMobile ? "420px" : "450px",
          maxWidth: "1000px",
          width: "100%",
          margin: "2rem auto",
          backgroundColor: "#111",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <canvas ref={dayBarCanvasRef} />
      </div>

    </section>
  );
}
