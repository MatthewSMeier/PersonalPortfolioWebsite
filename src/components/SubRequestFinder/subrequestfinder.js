import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
  // Animation state
  // -----------------------------
  const [pieVisible, setPieVisible] = useState(false);
  const [barVisible, setBarVisible] = useState(false);
  const [dayBarVisible, setDayBarVisible] = useState(false);

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

  const defaultDayBarData = {
    Monday: 6,
    Tuesday: 4,
    Wednesday: 8,
    Thursday: 4,
    Friday: 0,
    Saturday: 20,
    Sunday: 18,
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
            text: "Demand by Class",
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
  // TIME SLOT BAR CHART
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
            backgroundColor: "rgba(0,200,255,0.7)",
            borderColor: "rgba(0,200,255,0.7)",
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
            text: "Demand by Time Slot",
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
            grid: { color: "rgba(255,255,255,0.2)" },
          },
          y: {
            beginAtZero: true,
            ticks: {
              color: "#ffffff",
              font: { size: isMobile ? 10 : 12 },
            },
            grid: { color: "rgba(255,255,255,0.2)" },
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
            backgroundColor: "rgba(0,255,170,0.7)",
            borderColor: "rgba(0,255,170,0.7)",
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
            text: "Demand by Day",
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
            grid: { color: "rgba(200,200,200,0.2)" },
          },
          y: {
            beginAtZero: true,
            ticks: { color: "#ffffff", font: { size: isMobile ? 10 : 12 } },
            grid: { color: "rgba(200,200,200,0.2)" },
          },
        },
      },
    });
  };

  // -----------------------------
  // LOAD DATA
  // -----------------------------
  useEffect(() => {
    renderPieChart(defaultPieData);
    setPieVisible(true);

    renderBarChart(defaultBarData);
    setBarVisible(true);

    renderDayBarChart(defaultDayBarData);
    setDayBarVisible(true);

    async function loadData() {
      try {
        const [pieRes, barRes, dayRes] = await Promise.all([
          fetch("http://localhost:8000/api/class_breakdown"),
          fetch("http://localhost:8000/api/sub_requests"),
          fetch("http://localhost:8000/api/sub_requests_by_day"),
        ]);

        if (pieRes.ok) {
          const pieData = await pieRes.json();
          if (Object.keys(pieData).length) {
            renderPieChart(pieData);
            setPieVisible(true);
          }
        }

        if (barRes.ok) {
          const barData = await barRes.json();
          if (Object.keys(barData).length) {
            renderBarChart(barData);
            setBarVisible(true);
          }
        }

        if (dayRes.ok) {
          const dayData = await dayRes.json();
          if (Object.keys(dayData).length) {
            renderDayBarChart(dayData);
            setDayBarVisible(true);
          }
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

      <h1 className="topic">Substitute Request Data</h1>

      {/* PIE CHART */}
      <div
        className={`chart-container ${pieVisible ? "visible" : ""}`}
        style={{
          height: isMobile ? "320px" : "360px",
          maxWidth: "1000px",
          width: "100%",
          margin: "0 auto 3rem",
          backgroundColor: "#111",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <canvas ref={pieCanvasRef} />
      </div>

      {/* PIE INFO */}
      <div className="info-box">
        <h2>Demand by Class</h2>
        <p>
          This chart displays the distribution of substitute requests across different math courses.
          Each slice represents how frequently a specific class level requires substitute coverage 
          based on recent email data. By visualizing the relative proportions, instructors and 
          administrators can quickly identify which courses generate the highest substitution demand. 
          This helps reveal workload patterns and may highlight areas where staffing adjustments 
          or scheduling changes could improve coverage consistency.
        </p>
      </div>

      {/* TIME SLOT BAR CHART */}
      <div
        className={`chart-container ${barVisible ? "visible" : ""}`}
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

      {/* TIME SLOT INFO */}
      <div className="info-box">
        <h2>Demand by Time Slot</h2>
        <p>
          This chart shows when substitute requests occur by grouping them into day and time slots. 
          Each bar represents how often substitutes are requested during a specific teaching window.
          This visualization makes it easy to identify peak demand periods at a glance. Recognizing 
          these high-frequency time slots can help instructors plan availability, anticipate scheduling 
          challenges, and optimize substitute coverage strategies.
        </p>
      </div>

      {/* DAY BAR CHART */}
      <div
        className={`chart-container ${dayBarVisible ? "visible" : ""}`}
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

      {/* DAY INFO */}
      <div className="info-box">
        <h2>Demand by Day</h2>
        <p>
          This chart groups substitute requests by day of the week to highlight overall demand trends independent 
          of specific time slots. By aggregating requests at the daily level, it becomes easier to identify 
          which days consistently require more substitute coverage. This information supports staffing and 
          hiring decisions by revealing when additional instructor availability is most needed. 
          For example, recurring spikes on certain days may indicate the need to recruit substitutes with 
          targeted availability rather than increasing overall staffing.
        </p>
      </div>
    </section>
  );
}
