import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

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

import Navbar2 from "./pages/Navbar2";
import About2 from "./pages/About2";
import Request2 from "./pages/Request2";

import ClientData2 from "./pages/ClientData2";
import CovenantTracking from "./pages/CovenantTracking";
import ChargeSummary from "./pages/ChargeSummary";

// ✅ Exit Button Component
const ExitButton = ({ onExit }) => (
  <button
    onClick={onExit}
    className="fixed bottom-6 right-6 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-full shadow-lg z-50"
  >
    Exit
  </button>
);

const AppContent = () => {
  const [selectedApp, setSelectedApp] = useState(
    localStorage.getItem("selectedApp") || ""
  );
  const navigate = useNavigate();

  // ✅ Table 1 company click
  const handleSelectTable1 = () => {
    setSelectedApp("table1");
    localStorage.setItem("selectedApp", "table1");
    navigate("/"); // direct route to first screen of table 1
  };

  // ✅ Table 2 company click
  const handleSelectTable2 = () => {
    setSelectedApp("table2");
    localStorage.setItem("selectedApp", "table2");
    navigate("/"); // direct route to second app
  };

  // ✅ Exit button
  const handleExit = () => {
    setSelectedApp("");
    localStorage.removeItem("selectedApp");
    navigate("/main");
  };

  // ✅ On first load — agar koi app selected nahi hai
  useEffect(() => {
    if (!selectedApp) navigate("/main");
  }, [selectedApp, navigate]);

  return (
    <>
      <ScrollToTop />

      {!selectedApp ? (
        // ✅ Main Page (Default)
        <Main onSelect={handleSelectTable1} onSelect1={handleSelectTable2} />
      ) : selectedApp === "table1" ? (
        // ✅ TABLE 1 APP
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
      ) : (
        // ✅ TABLE 2 APP
        <>
          <Navbar2 />
          <ExitButton onExit={handleExit} />
          <div className="px-6 py-8">
            <Routes>
              <Route path="/" element={<About2 />} />
              <Route path="/client-data2" element={<ClientData2 />} />
              <Route path="/request2" element={<Request2 />} />
              <Route path="/covenant-tracking" element={<CovenantTracking />} />
              <Route path="/covenant-tracking" element={<CovenantTracking />} />
              <Route path="/charge-summary" element={<ChargeSummary />} />


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
