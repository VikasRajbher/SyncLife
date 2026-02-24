import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Welcome to Your Dashboard
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed">
          This application is currently under development.
          <br />
          Working diligently to deliver new features and improvements.
        </p>

        <p className="text-indigo-400 mt-4 font-medium">
          Please stay tuned for upcoming updates.
        </p>

        <button
          onClick={handleLogout}
          className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl transition shadow-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
