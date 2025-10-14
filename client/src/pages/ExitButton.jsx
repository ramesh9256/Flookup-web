import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ExitButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Sirf tab dikhana jab user main page par NA ho
  if (location.pathname === "/main") return null;

  return (
    <button
      onClick={() => navigate("/main")}
      className="fixed top-5 right-5 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-all z-50"
    >
      Exit
    </button>
  );
};

export default ExitButton;
