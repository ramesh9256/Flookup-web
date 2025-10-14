import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import CapTable from "./pages/CapTable";
import Valuations from "./pages/Valuations";
import PortfolioSummary from "./pages/PortfolioSummary";
import CompetitorAnalysis from "./pages/CompetitorAnalysis";
import Compliance from "./pages/Compliance";
import Request from "./pages/Request";
import Financials from "./pages/Financials";
import ClientData from "./pages/ClientData";
import ScrollToTop from "./components/ScrollToTop";
import Main from "./pages/Main";

// ✅ Fixed Exit Button Component
const ExitButton = ({ onExit }) => (
  <button
    onClick={onExit}
    className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-full shadow-lg z-50"
  >
    Exit
  </button>
);

const AppContent = () => {
  const [showMainApp, setShowMainApp] = useState(
    localStorage.getItem("showMainApp") === "true"
  );
  const navigate = useNavigate();

  // ✅ When user clicks on Flookup
  const handleSelect = () => {
    setShowMainApp(true);
    localStorage.setItem("showMainApp", "true");
    navigate("/"); // Go to main content
  };

  // ✅ When user clicks Exit button
  const handleExit = () => {
    setShowMainApp(false);
    localStorage.removeItem("showMainApp");
    navigate("/main"); // Go back to main table page
  };

  // ✅ If user not selected yet, redirect to /main
  useEffect(() => {
    if (!showMainApp) navigate("/main");
  }, [showMainApp, navigate]);

  return (
    <>
      <ScrollToTop />
      {!showMainApp ? (
        <Main onSelect={handleSelect} />
      ) : (
        <>
          <Navbar />
          <ExitButton onExit={handleExit} />
          <div className="px-6 py-8">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/captables" element={<CapTable />} />
              <Route path="/valuation" element={<Valuations />} />
              <Route path="/portfoliosummary" element={<PortfolioSummary />} />
              <Route path="/financials" element={<Financials />} />
              <Route path="/competitoranalysis" element={<CompetitorAnalysis />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/request" element={<Request />} />
              <Route path="/client-data" element={<ClientData />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
