import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function SubRequestFinder() {
  const pieCanvasRef = useRef(null);
  const barCanvasRef = useRef(null);

  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);

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
              "#00c8ff",
              "#ff7a00",
              "#2ecc71",
              "#9b59b6",
              "#e74c3c",
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
            font: { size: 18 },
          },
          legend: {
            labels: { color: "#ffffff" },
            position: "right",
          },
        },
      },
    });
  };

  // -----------------------------
  // BAR CHART
  // -----------------------------
  const renderBarChart = (data) => {
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
            font: { size: 18 },
          },
          legend: { labels: { color: "#ffffff" } },
        },
        scales: {
          x: {
            ticks: { color: "#ffffff", maxRotation: 45, minRotation: 45 },
            grid: { color: "rgba(255,255,255,0.1)" },
          },
          y: {
            beginAtZero: true,
            ticks: { color: "#ffffff" },
            grid: { color: "rgba(255,255,255,0.1)" },
          },
        },
      },
    });
  };

  // -----------------------------
  // LOAD DATA
  // -----------------------------
  useEffect(() => {
    // Defaults first (instant render)
    renderPieChart(defaultPieData);
    renderBarChart(defaultBarData);

    async function loadData() {
      try {
        const [pieRes, barRes] = await Promise.all([
          fetch("http://localhost:8000/api/class_breakdown"),
          fetch("http://localhost:8000/api/sub_requests"),
        ]);

        if (pieRes.ok) {
          const pieData = await pieRes.json();
          if (Object.keys(pieData).length) renderPieChart(pieData);
        }

        if (barRes.ok) {
          const barData = await barRes.json();
          if (Object.keys(barData).length) renderBarChart(barData);
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
    <div style={{ padding: "2rem", color: "#ffffff" }}>
      <h1>Sub Request Finder</h1>
      <p>
        This dashboard visualizes substitute requests by class and time,
        helping instructors identify high-demand periods at a glance.
      </p>

      {/* PIE CHART */}
      <div
        style={{
          height: "300px",
          width: "60vw",
          margin: "0 auto 3rem",
          backgroundColor: "#111",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <canvas ref={pieCanvasRef} />
      </div>

      {/* BAR CHART */}
      <div
        style={{
          height: "350px",
          width: "70vw",
          margin: "0 auto",
          backgroundColor: "#111",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <canvas ref={barCanvasRef} />
      </div>
    </div>
  );
}
