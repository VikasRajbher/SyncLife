import { useState, useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
);

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef();

  // Close profile dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* ================= DUMMY DATA ================= */

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Expenses",
        data: [12000, 9000, 15000, 8000, 17000, 11000],
        backgroundColor: "#6366f1",
        borderRadius: 6,
      },
    ],
  };

  const doughnutData = {
    labels: ["Food", "Rent", "Travel", "Shopping"],
    datasets: [
      {
        data: [4000, 8000, 2000, 3000],
        backgroundColor: ["#6366f1", "#3b82f6", "#8b5cf6", "#1e40af"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: "#d1d5db" } },
    },
    scales: {
      x: { ticks: { color: "#9ca3af" } },
      y: { ticks: { color: "#9ca3af" } },
    },
  };

  return (
    <div className="flex min-h-screen bg-gray-950 text-gray-200 overflow-x-hidden">
      {/* ============ Sidebar ============ */}
      <aside className="hidden md:flex md:flex-col md:w-64 bg-gray-900 border-r border-gray-800">
        <div className="p-6 text-3xl font-bold text-indigo-500">SyncLife</div>
        <nav className="flex-1 px-4 space-y-2">
          <SidebarItem label="Dashboard" />
          <SidebarItem label="Expenses" />
          <SidebarItem label="Budget" />
          <SidebarItem label="Habits" />
          <SidebarItem label="Analytics" />
        </nav>
      </aside>

      {/* ============ Mobile Sidebar ============ */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div className="w-64 bg-gray-900 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-indigo-500">
                Smart Life OS
              </h2>
              <button onClick={() => setSidebarOpen(false)}>✕</button>
            </div>
            <nav className="space-y-2">
              <SidebarItem label="Dashboard" />
              <SidebarItem label="Expenses" />
              <SidebarItem label="Budget" />
              <SidebarItem label="Habits" />
              <SidebarItem label="Analytics" />
            </nav>
          </div>
          <div
            className="flex-1 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          ></div>
        </div>
      )}

      {/* ============ Main Content ============ */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-gray-900 border-b border-gray-800">
          <button
            className="md:hidden text-2xl"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>

          <h1 className="text-lg md:text-2xl font-semibold">
            Dashboard Overview
          </h1>

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold"
            >
              NS
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
                <p className="px-4 py-2 text-sm border-b border-gray-700">
                  ninu@email.com
                </p>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-700 text-sm">
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-4 md:p-6 space-y-6 overflow-x-hidden">
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard title="Total Expenses" value="₹72,000" />
            <StatCard title="Remaining Budget" value="₹18,000" />
            <StatCard title="Active Habits" value="5" />
            <StatCard title="Best Streak" value="14 Days" />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bar Chart */}
            <div className="bg-gray-900 p-4 rounded-2xl shadow border border-gray-800">
              <h2 className="mb-4 text-lg font-semibold text-indigo-400">
                Monthly Expenses
              </h2>

              {/* Mobile smaller height */}
              <div className="h-56 sm:h-64 md:h-72">
                <Bar data={barData} options={chartOptions} />
              </div>
            </div>

            {/* Doughnut Chart */}
            <div className="bg-gray-900 p-4 rounded-2xl shadow border border-gray-800">
              <h2 className="mb-4 text-lg font-semibold text-indigo-400">
                Expense Categories
              </h2>

              {/* Centered & controlled size */}
              <div className="flex justify-center">
                <div className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] h-56 sm:h-64 md:h-72">
                  <Doughnut data={doughnutData} options={chartOptions} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ================= Components ================= */

function SidebarItem({ label }) {
  return (
    <button className="block w-full text-left px-4 py-2 rounded-lg hover:bg-indigo-600/20 hover:text-indigo-400 transition">
      {label}
    </button>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-gray-900 p-4 rounded-2xl shadow border border-gray-800">
      <h3 className="text-sm text-gray-400">{title}</h3>
      <p className="text-xl md:text-2xl font-bold mt-2 text-indigo-500">
        {value}
      </p>
    </div>
  );
}
