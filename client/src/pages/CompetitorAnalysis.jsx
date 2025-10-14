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

const CompetitorAnalysis = () => {
  const [selectedCompany, setSelectedCompany] = useState("Flookup Analytics");
  const [selectedParameters, setSelectedParameters] = useState({
    profitLoss: true,
    balanceSheet: true,
    funding: true,
    client: true,
  });
  const [activeTab, setActiveTab] = useState("kpi");

  const companies = ["Flookup Analytics", "TechNova Pvt Ltd", "FinSmart Solutions"];
  // kpi data 
  const kpiData = [
    { metric: "Revenue", value: 2.2, trend: "up" },
    { metric: "EBITDA", value: 0.55, trend: "up" },
    { metric: "PAT", value: 0.4, trend: "up" },
    { metric: "Market Share", value: 12, trend: "stable" },
    { metric: "Employees", value: 42, trend: "up" },
  ];

  // KPI chart data (yearly trend)
  const kpiTrendData = [
    { year: 2022, Revenue: 1.2, EBITDA: 0.3, PAT: 0.2 },
    { year: 2023, Revenue: 1.5, EBITDA: 0.4, PAT: 0.28 },
    { year: 2024, Revenue: 1.8, EBITDA: 0.45, PAT: 0.32 },
    { year: 2025, Revenue: 2.2, EBITDA: 0.55, PAT: 0.4 },
  ];

  // ===== Profit & Loss =====
  const profitLossData = [
    { year: "2022", Revenue: 1200000, EBITDA: 300000, PAT: 200000, Extraordinary: 50000 },
    { year: "2023", Revenue: 1500000, EBITDA: 400000, PAT: 280000, Extraordinary: 60000 },
    { year: "2024", Revenue: 1800000, EBITDA: 450000, PAT: 320000, Extraordinary: 55000 },
    { year: "2025", Revenue: 2200000, EBITDA: 550000, PAT: 400000, Extraordinary: 70000 },
  ];

  // ===== Balance Sheet =====
  const balanceSheetData = [
    { item: "Assets", "2022": 3500000, "2023": 4200000, "2024": 5000000, "2025": 6100000, redFlags: "" },
    { item: "Liabilities", "2022": 1200000, "2023": 1500000, "2024": 1800000, "2025": 2000000, redFlags: "Overdue" },
    { item: "Equity", "2022": 2300000, "2023": 2700000, "2024": 3200000, "2025": 4100000, redFlags: "" },
  ];

  // ===== Funding =====
  const fundingData = [
    { round: "Seed", date: "June 2022", amount: 500000, value: 2000000, investors: "Angel Investors" },
    { round: "Series A", date: "April 2023", amount: 1200000, value: 5000000, investors: "Venture Capitalists" },
    { round: "Series B", date: "July 2024", amount: 2500000, value: 12000000, investors: "Institutional Investors" },
  ];

  // ===== Client Data =====
  const clientData = [
    { name: "ABC Corp", industry: "Finance", revenue: "$200K" },
    { name: "XYZ Ltd", industry: "Tech", revenue: "$150K" },
    { name: "Global Solutions", industry: "Consulting", revenue: "$100K" },
  ];

  // ===== Employee Growth =====
  const employeeGrowthData = [
    { year: 2022, total: 35, seniorAdded: 2, seniorReduced: 0 },
    { year: 2023, total: 40, seniorAdded: 3, seniorReduced: 1 },
    { year: 2024, total: 42, seniorAdded: 1, seniorReduced: 0 },
    { year: 2025, total: 50, seniorAdded: 4, seniorReduced: 1 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-pink-800 text-center mb-6">Competitor Analysis Dashboard</h1>

      {/* Company Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <select
          className="border border-gray-300 rounded-lg px-4 py-2"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          {companies.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>

        {/* Parameter Selection */}
        <div className="flex gap-4 items-center">
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={selectedParameters.profitLoss}
              onChange={(e) => setSelectedParameters({ ...selectedParameters, profitLoss: e.target.checked })}
            />
            Profit & Loss
          </label>
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={selectedParameters.balanceSheet}
              onChange={(e) => setSelectedParameters({ ...selectedParameters, balanceSheet: e.target.checked })}
            />
            Balance Sheet
          </label>
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={selectedParameters.funding}
              onChange={(e) => setSelectedParameters({ ...selectedParameters, funding: e.target.checked })}
            />
            Funding
          </label>
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={selectedParameters.client}
              onChange={(e) => setSelectedParameters({ ...selectedParameters, client: e.target.checked })}
            />
            Client
          </label>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {["kpi", "profitLoss", "balanceSheet", "funding", "client", "employee"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {tab === "kpi" ? "KPI Analysis" :
              tab === "profitLoss" ? "Profit & Loss" :
                tab === "balanceSheet" ? "Balance Sheet" :
                  tab === "funding" ? "Funding" :
                    tab === "client" ? "Clients" :
                      "Employee Growth"}
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
        {/* KPI Analysis */}
        {activeTab === "kpi" && (
          <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              KPI Performance Overview
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {kpiData.map((kpi, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-4 text-center border shadow-sm ${kpi.trend === "up"
                    ? "bg-green-50 border-green-300"
                    : kpi.trend === "down"
                      ? "bg-red-50 border-red-300"
                      : "bg-yellow-50 border-yellow-300"
                    }`}
                >
                  <h3 className="text-lg font-semibold text-gray-700">{kpi.metric}</h3>
                  <p className="text-xl font-bold text-blue-700">
                    {kpi.metric === "Market Share"
                      ? `${kpi.value}%`
                      : kpi.metric === "Employees"
                        ? kpi.value
                        : `$${kpi.value}M`}
                  </p>
                  <p
                    className={`text-sm font-medium ${kpi.trend === "up"
                      ? "text-green-600"
                      : kpi.trend === "down"
                        ? "text-red-600"
                        : "text-yellow-600"
                      }`}
                  >
                    {kpi.trend === "up"
                      ? "▲ Improving"
                      : kpi.trend === "down"
                        ? "▼ Declining"
                        : "● Stable"}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-2">KPI Trends Over Time</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={kpiTrendData}>
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

        {/* Profit & Loss */}
        {activeTab === "profitLoss" && selectedParameters.profitLoss && (
          <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-4 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Profit & Loss</h2>
            <div className="overflow-x-auto">
              {/* Profit & Loss Table */}
              <table className="min-w-full text-gray-700 text-sm table-fixed mb-6 border border-gray-200">
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

              {/* Chart */}
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={profitLossData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
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

          </div>
        )}

        {/* Balance Sheet */}
        {activeTab === "balanceSheet" && selectedParameters.balanceSheet && (
          <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200 p-4 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Balance Sheet</h2>

            <table className="min-w-full text-gray-700 text-sm table-fixed border border-gray-200">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-2 px-4 w-1/5 text-left">Item</th>
                  <th className="py-2 px-4 w-1/6 text-left">2022</th>
                  <th className="py-2 px-4 w-1/6 text-left">2023</th>
                  <th className="py-2 px-4 w-1/6 text-left">2024</th>
                  <th className="py-2 px-4 w-1/6 text-left">2025</th>
                  <th className="py-2 px-4 w-1/6 text-left">Red Flags</th>
                </tr>
              </thead>

              <tbody>
                {balanceSheetData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-blue-50 transition-all">
                    <td className="py-2 px-4 w-1/5 font-medium text-left">{row.item}</td>
                    <td className="py-2 px-4 w-1/6 text-left">${row[2022].toLocaleString()}</td>
                    <td className="py-2 px-4 w-1/6 text-left">${row[2023].toLocaleString()}</td>
                    <td className="py-2 px-4 w-1/6 text-left">${row[2024].toLocaleString()}</td>
                    <td className="py-2 px-4 w-1/6 text-left">${row[2025].toLocaleString()}</td>
                    <td className="py-2 px-4 w-1/6 text-red-600 font-semibold text-left">{row.redFlags}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        )}

        {/* Funding */}
        {activeTab === "funding" && selectedParameters.funding && (
          <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200 p-4 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Funding Overview</h2>

            {/* Table */}
            <table className="min-w-full text-gray-700 text-sm table-fixed mb-6 border border-gray-200">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-2 px-4 w-1/5 text-left">Round</th>
                  <th className="py-2 px-4 w-1/5 text-left">Date</th>
                  <th className="py-2 px-4 w-1/5 text-left">Amount</th>
                  <th className="py-2 px-4 w-1/5 text-left">Valuation</th>
                  <th className="py-2 px-4 w-1/5 text-left">Investors</th>
                </tr>
              </thead>
              <tbody>
                {fundingData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-blue-50 transition-all">
                    <td className="py-2 px-4 w-1/5 font-medium text-left">{row.round}</td>
                    <td className="py-2 px-4 w-1/5 text-left">{row.date}</td>
                    <td className="py-2 px-4 w-1/5 text-left">${row.amount.toLocaleString()}</td>
                    <td className="py-2 px-4 w-1/5 text-left">${row.value.toLocaleString()}</td>
                    <td className="py-2 px-4 w-1/5 text-left">{row.investors}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Line Chart: Funding Amount Over Time */}
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Funding Trend Over Time</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={fundingData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Legend />
                <Line type="monotone" dataKey="amount" stroke="#1D4ED8" name="Amount Raised" />
                <Line type="monotone" dataKey="value" stroke="#10B981" name="Company Valuation" />
              </LineChart>
            </ResponsiveContainer>

            {/* Bar Chart: Funding Amount by Round */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Funding Amount per Round</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={fundingData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="round" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Legend />
                <Bar dataKey="amount" fill="#1D4ED8" name="Amount Raised" />
                <Bar dataKey="value" fill="#10B981" name="Company Valuation" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        )}

        {/* Clients */}
        {activeTab === "client" && selectedParameters.client && (
          <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200 p-4 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Clients</h2>

            <table className="min-w-full text-gray-700 text-sm table-fixed border border-gray-200">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-2 px-4 w-1/3 text-left">Client Name</th>
                  <th className="py-2 px-4 w-1/3 text-left">Industry</th>
                  <th className="py-2 px-4 w-1/3 text-left">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {clientData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-blue-50 transition-all">
                    <td className="py-2 px-4 w-1/3 text-left font-medium">{row.name}</td>
                    <td className="py-2 px-4 w-1/3 text-left">{row.industry}</td>
                    <td className="py-2 px-4 w-1/3 text-left">{row.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        )}

        {/* Employee Growth */}
        {activeTab === "employee" && (
          <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200 p-4 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Employee Growth</h2>

            <table className="min-w-full text-gray-700 text-sm table-fixed border border-gray-200">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-2 px-4 w-1/4 text-left">Year</th>
                  <th className="py-2 px-4 w-1/4 text-left">Total Employees</th>
                  <th className="py-2 px-4 w-1/4 text-left">Senior Members Added</th>
                  <th className="py-2 px-4 w-1/4 text-left">Senior Members Reduced</th>
                </tr>
              </thead>

              <tbody>
                {employeeGrowthData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-200 hover:bg-blue-50 transition-all">
                    <td className="py-2 px-4 w-1/4 text-left font-medium">{row.year}</td>
                    <td className="py-2 px-4 w-1/4 text-left">{row.total}</td>
                    <td className="py-2 px-4 w-1/4 text-left">{row.seniorAdded}</td>
                    <td className="py-2 px-4 w-1/4 text-left">{row.seniorReduced}</td>
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

export default CompetitorAnalysis;
