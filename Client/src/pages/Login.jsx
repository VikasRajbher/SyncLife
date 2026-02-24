import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Lottie from "lottie-react";
import login from "../assets/login.json";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Two-way binding
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
      );

      // Save token
      localStorage.setItem("token", res.data.token);

      // Redirect to dashboard (or home)
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-800 overflow-hidden px-4">
      <div className="relative flex flex-col md:flex-row items-center bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden max-w-4xl w-full">
        {/* Illustration */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
          <Lottie animationData={login} loop={true} />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Welcome Back
          </h2>

          <p className="text-gray-500 mt-2">
            Login to continue using Sync Life
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-3 rounded-xl hover:opacity-90 transition shadow-lg disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-indigo-600 cursor-pointer hover:underline"
            >
              Register
            </span>
          </p>

          <p
            onClick={() => navigate("/")}
            className="text-center text-sm mt-4 cursor-pointer text-gray-400 hover:text-indigo-600"
          >
            ← Back to Home
          </p>
        </div>
      </div>
    </div>
  );
}
