import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function SubRequestFinder() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    async function loadChart() {
      try {
        // Fetch data from FastAPI backend
        const res = await fetch("http://localhost:8000/api/sub_requests");
        if (!res.ok) {
          console.error("API error:", res.status);
          return;
        }

        const data = await res.json();

        if (!data || Object.keys(data).length === 0) {
          console.warn("No sub request data received");
          return;
        }

        // Get labels and values directly from the API data
        const labels = Object.keys(data);
        const values = Object.values(data);

        // Destroy previous chart if exists
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        // Create the bar chart
        chartRef.current = new Chart(canvasRef.current, {
          type: "bar",
          data: {
            labels,
            datasets: [
              {
                label: "Sub Requests (Last 200 Emails)",
                data: values,
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
              legend: {
                labels: {
                  color: "#ffffff",
                },
              },
              title: {
                display: true,
                text: "Sub Requests by Day & Time Slot",
                color: "#ffffff",
                font: {
                  size: 18,
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  color: "#ffffff",
                  maxRotation: 45,
                  minRotation: 45,
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
              },
              y: {
                beginAtZero: true,
                ticks: {
                  color: "#ffffff",
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
              },
            },
          },
        });
      } catch (err) {
        console.error("Chart load failed:", err);
      }
    }

    // Load chart once on mount
    loadChart();
  }, []);

  return (
    <div style={{ padding: "2rem", color: "#ffffff" }}>
      <h1>Sub Request Finder</h1>
      <p>
        Live visualization of substitute requests parsed directly from Gmail
        using a Python IMAP pipeline and exposed via an API.
      </p>

      <div
        style={{
          height: "500px",
          backgroundColor: "#111",
          padding: "1rem",
          borderRadius: "10px",
        }}
      >
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
