import { useNavigate } from "react-router-dom";
import sign from "../assets/Sign.svg";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-50 overflow-hidden px-4">
      {/* Background Blobs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-indigo-400 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative flex flex-col md:flex-row items-center bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl overflow-hidden max-w-4xl w-full">
        {/* Illustration Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
          <img
            src={sign}
            alt="Sign Up Illustration"
            className="w-48 sm:w-72 md:w-full max-w-xs md:max-w-md animate-[float_5s_ease-in-out_infinite]"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center md:text-left bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Create Account
          </h2>

          <p className="text-gray-500 mt-2 text-center md:text-left">
            Join Sync Life and organize your digital world
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-3 rounded-xl hover:opacity-90 transition shadow-lg"
            >
              Register
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-indigo-600 cursor-pointer hover:underline"
            >
              Login
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
