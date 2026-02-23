import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import Assistant from "../assets/Assistant-Bot.json";
import logo from "../assets/synclife.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-20 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-4 bg-gray-900 backdrop-blur-xl shadow-sm sticky top-0 z-50">
        <img
          src={logo}
          alt="SyncLife Logo"
          className="h-12 md:h-14 w-auto object-contain"
        />

        <div className="flex gap-4 items-center">
          <button
            onClick={() => navigate("/login")}
            className="text-white/80 hover:text-indigo-400 transition hidden sm:block"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-xl hover:opacity-90 transition shadow-md"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 gap-8">
        {/* Left Content */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight">
            Organize Your Life.
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Sync Everything.
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Sync Life is your all-in-one life management platform. Track daily
            expenses, monitor habits and streaks, and analyze your performance
            all from a clean, intuitive dashboard designed to keep you in
            control.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/register")}
              className="bg-indigo-600 text-white px-7 py-3 rounded-2xl shadow-xl hover:scale-105 transition duration-300"
            >
              Create Free Account
            </button>

            <button
              onClick={() => navigate("/login")}
              className="border border-indigo-600 text-indigo-600 px-7 py-3 rounded-2xl hover:bg-indigo-50 transition duration-300"
            >
              Login
            </button>
          </div>
        </div>

        {/* Glass Illustration Card */}
        <div className="w-full md:w-5/6 justify-center sm:flex ">
          <Lottie
            animationData={Assistant}
            loop={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Everything You Need To Stay Productive
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Smart Notes",
              desc: "Capture expenses, habits, and performance insights instantly, all organized in one place.",
              icon: "📝",
            },
            {
              title: "Expense & Task Tracking",
              desc: "Track daily expenses, set goals, and manage tasks seamlessly.",
              icon: "📅",
            },
            {
              title: "Secure Access",
              desc: "All your financial and productivity data is protected with top-notch security.",
              icon: "🔐",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-gray-600 p-8 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-500"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-white">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24 text-center rounded-t-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Take Control of Your Productivity?
        </h2>

        <button
          onClick={() => navigate("/register")}
          className="bg-white text-indigo-600 px-10 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-xl"
        >
          Get Started Now
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-white text-sm bg-gray-800">
        © 2026 Sync Life. Designed for clarity & focus.
      </footer>
    </div>
  );
}
