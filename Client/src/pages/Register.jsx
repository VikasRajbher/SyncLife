import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Lottie from "lottie-react";
import sign from "../assets/sign.json";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Two-way binding handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        formData,
      );

      alert(res.data.message);
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-800 overflow-hidden px-4">
      <div className="relative flex flex-col md:flex-row items-center bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden max-w-4xl w-full">
        {/* Illustration */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
          <Lottie animationData={sign} loop={true} />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold">Create Account</h2>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl"
            />

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-indigo-600 cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
