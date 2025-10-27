import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const Financials = () => {
  const [activeTab, setActiveTab] = useState("balanceSheet");

  const tabs = [
    { id: "balanceSheet", label: "Balance Sheet" },
    { id: "profitLoss", label: "Profit & Loss" },
    { id: "cashFlow", label: "Cash Flow" },
    { id: "ratios", label: "Ratios" },
    { id: "audit", label: "Audit Reports" },
    { id: "annualReport", label: "Annual Report" },
    { id: "Budget", label: "Budget" },
    { id: "mis", label: "MIS Summary" },
  ];

  // ====== Balance Sheet ======
  const balanceSheetData = [
    { item: "Assets", "2022": 3500000, "2023": 4200000, "2024": 5000000, "2025": 6100000, redFlags: "" },
    { item: "Liabilities", "2022": 1200000, "2023": 1500000, "2024": 1800000, "2025": 2000000, redFlags: "Overdue" },
    { item: "Equity", "2022": 2300000, "2023": 2700000, "2024": 3200000, "2025": 4100000, redFlags: "" },
  ];

  // ====== Profit & Loss ======
  const profitLossData = [
    { year: "2022", Revenue: 1200000, EBITDA: 300000, PAT: 200000, Extraordinary: 50000 },
    { year: "2023", Revenue: 1500000, EBITDA: 400000, PAT: 280000, Extraordinary: 60000 },
    { year: "2024", Revenue: 1800000, EBITDA: 450000, PAT: 320000, Extraordinary: 55000 },
    { year: "2025", Revenue: 2200000, EBITDA: 550000, PAT: 400000, Extraordinary: 70000 },
  ];

  // ====== Cash Flow ======
  const cashFlowData = [
    { year: "2022", inflow: 1200000, outflow: 950000 },
    { year: "2023", inflow: 1500000, outflow: 1100000 },
    { year: "2024", inflow: 1800000, outflow: 1300000 },
    { year: "2025", inflow: 2200000, outflow: 1500000 },
  ];

  // ====== Ratio Analysis ======
  const ratioAnalysis = [
    { ratio: "Current Ratio", value: 1.9 },
    { ratio: "Debt-to-Equity", value: 0.6 },
    { ratio: "Return on Equity (ROE)", value: "14%" },
    { ratio: "Gross Margin", value: "58%" },
  ];

  // ====== Audit Reports ======
  const auditReports = [
    { year: 2022, reportName: "Audit FY22", firm: "Deloitte" },
    { year: 2023, reportName: "Audit FY23", firm: "KPMG" },
  ];

  // ====== Annual Reports ======
  const annualReports = [
    { year: 2022, summary: "Revenue grew by 20%, EBITDA increased 15%", transcript: "Last call Q4 2022: Strong market demand observed." },
    { year: 2023, summary: "Revenue grew by 25%, EBITDA increased 18%", transcript: "Last call Q4 2023: Expansion in Asia started." },
  ];

  // ====== Charges / Budget ======
  const chargesBudget = [
    { item: "Marketing", budget: 50000, actual: 52000 },
    { item: "R&D", budget: 80000, actual: 78000 },
    { item: "Operations", budget: 120000, actual: 125000 },
  ];

  // ====== MIS Summary Data ======
  const misSummaryData = [
    { metric: "Total Revenue", "Mar 24": "$1.2M", "May 25": "$1.4M", "Jun 25": "$1.6M", "Jul 25": "$1.8M" },
    { metric: "EBITDA Margin", "Mar 24": "22%", "May 25": "25%", "Jun 25": "28%", "Jul 25": "30%" },
    { metric: "Operating Profit", "Mar 24": "$300K", "May 25": "$350K", "Jun 25": "$400K", "Jul 25": "$450K" },
    { metric: "Net Cash Flow", "Mar 24": "$120K", "May 25": "$150K", "Jun 25": "$180K", "Jul 25": "$200K" },
    { metric: "Debt Ratio", "Mar 24": "0.7", "May 25": "0.65", "Jun 25": "0.6", "Jul 25": "0.55" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-red-800 text-center mb-8">Financials Dashboard</h1>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${activeTab === tab.id
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="min-h-[500px]"
      >
        {/* Balance Sheet */}
        {activeTab === "balanceSheet" && (
          <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200 p-4 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Balance Sheet</h2>
            <table className="min-w-full text-gray-700 text-sm table-fixed border border-gray-200">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-2 px-4 text-left">Item</th>
                  <th className="py-2 px-4 text-left">2022</th>
                  <th className="py-2 px-4 text-left">2023</th>
                  <th className="py-2 px-4 text-left">2024</th>
                  <th className="py-2 px-4 text-left">2025</th>
                  <th className="py-2 px-4 text-left">Red Flags</th>
                </tr>
              </thead>
              <tbody>
                {balanceSheetData.map((row, i) => (
                  <tr key={i} className="border-b hover:bg-blue-50 transition-all">
                    <td className="py-2 px-4 font-medium">{row.item}</td>
                    <td className="py-2 px-4">${row[2022].toLocaleString()}</td>
                    <td className="py-2 px-4">${row[2023].toLocaleString()}</td>
                    <td className="py-2 px-4">${row[2024].toLocaleString()}</td>
                    <td className="py-2 px-4">${row[2025].toLocaleString()}</td>
                    <td className="py-2 px-4 text-red-600 font-semibold">{row.redFlags}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Profit & Loss */}
        {activeTab === "profitLoss" && (
          <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-4 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Profit & Loss</h2>
            <div className="w-full overflow-x-auto">
              <table className="min-w-full text-gray-700 text-xs sm:text-sm md:text-base border border-gray-200">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="py-2 px-4 w-1/5 text-left">Year</th>
                    <th className="py-2 px-4 w-1/5 text-left">Revenue</th>
                    <th className="py-2 px-4 w-1/5 text-left">EBITDA</th>
                    <th className="py-2 px-4 w-1/5 text-left">PAT</th>
                    <th className="py-2 px-4 w-1/5 text-left">Extraordinary</th>
                  </tr>
                </thead>
                <tbody>
                  {profitLossData.map((row, i) => (
                    <tr key={i} className="border-b border-gray-200 hover:bg-blue-50 transition-all">
                      <td className="py-2 px-4 w-1/5 font-medium text-left">{row.year}</td>
                      <td className="py-2 px-4 w-1/5 text-left">${row.Revenue.toLocaleString()}</td>
                      <td className="py-2 px-4 w-1/5 text-left">${row.EBITDA.toLocaleString()}</td>
                      <td className="py-2 px-4 w-1/5 text-left">${row.PAT.toLocaleString()}</td>
                      <td className="py-2 px-4 w-1/5 text-left">${row.Extraordinary.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={profitLossData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Revenue" stroke="#1D4ED8" />
                <Line type="monotone" dataKey="EBITDA" stroke="#10B981" />
                <Line type="monotone" dataKey="PAT" stroke="#F59E0B" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Cash Flow */}
        {activeTab === "cashFlow" && (
          <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-4 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Cash Flow</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cashFlowData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="inflow" fill="#1D4ED8" />
                <Bar dataKey="outflow" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Ratios */}
        {activeTab === "ratios" && (
          <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-4 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Ratio Analysis</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {ratioAnalysis.map((r, i) => (
                <motion.div key={i} whileHover={{ scale: 1.03 }} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-gray-700">{r.ratio}</h3>
                  <p className="text-gray-900 font-medium">{r.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Audit Reports */}
        {activeTab === "audit" && (
          <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-4 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Audit Reports</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {auditReports.map((r, i) => (
                <motion.div key={i} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-blue-700">{r.year}</h3>
                  <p className="text-gray-700"><strong>Report Name:</strong> {r.reportName}</p>
                  <p className="text-gray-700"><strong>Firm:</strong> {r.firm}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Annual Reports */}
        {activeTab === "annualReport" && (
          <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-4 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Annual Reports</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {annualReports.map((r, i) => (
                <motion.div key={i} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-blue-700">{r.year}</h3>
                  <p className="text-gray-700 mb-1"><strong>Summary:</strong> {r.summary}</p>
                  <p className="text-gray-700"><strong>Transcript:</strong> {r.transcript}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Budget */}
        {activeTab === "Budget" && (
          <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200 p-4 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Budget</h2>
            <table className="min-w-full text-gray-700 text-sm border border-gray-300">
              <thead className="bg-gray-500 text-white">
                <tr>
                  <th className="py-2 px-4 text-left">Item</th>
                  <th className="py-2 px-4 text-left">Budget</th>
                  <th className="py-2 px-4 text-left">Actual</th>
                </tr>
              </thead>
              <tbody>
                {chargesBudget.map((c, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-blue-50 transition-all">
                    <td className="py-2 px-4">{c.item}</td>
                    <td className="py-2 px-4">${c.budget.toLocaleString()}</td>
                    <td className="py-2 px-4">${c.actual.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ✅ MIS Summary */}
        {activeTab === "mis" && (
          <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200 p-6 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">MIS Summary</h2>
            <table className="min-w-full text-gray-700 text-sm border border-gray-200">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-2 px-4 text-left w-1/4">Metric</th>
                  <th className="py-2 px-4 text-left w-1/6">Mar 25</th>
                  <th className="py-2 px-4 text-left w-1/6">Apr 25</th>
                  <th className="py-2 px-4 text-left w-1/6">May 25</th>
                  <th className="py-2 px-4 text-left w-1/6">Jun 25</th>
                  <th className="py-2 px-4 text-left w-1/6">Jul 25</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: "No. of New client", "Mar 25": "10", "Apr 25": "0", "May 25": "12", "Jun 25": "","July 25":""},
                  { metric: "No. of SMF IPO", "Mar 25": "1","Apr 25":"1" , "May 25": "", "Jun 25": "1","July 25":"" },
                  { metric: "No. of Valuation assigned", "Mar 25": "5", "Apr 25": "5", "May 25": "4", "Jun 25": "4" , "July 25":"" },

                ].map((row, i) => (
                  <tr key={i} className="border-b hover:bg-blue-50 transition-all">
                    <td className="py-2 px-4 font-medium text-left">{row.metric}</td>
                    <td className="py-2 px-4 text-left">{row["Mar 25"]}</td>
                    <td className="py-2 px-4 text-left">{row["Apr 25"]}</td>
                    <td className="py-2 px-4 text-left">{row["May 25"]}</td>
                    <td className="py-2 px-4 text-left">{row["Jun 25"]}</td>
                    <td className="py-2 px-4 text-left">{row["Jul 25"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </motion.div>
    </div>
  );
};

export default Financials;
