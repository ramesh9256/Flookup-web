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

// Example dynamic company data
const companyAnalysisData = {
  "Flookup Analytics": {
    kpiData: [
      { metric: "Revenue", value: 2.2, trend: "up" },
      { metric: "EBITDA", value: 0.55, trend: "up" },
      { metric: "PAT", value: 0.4, trend: "up" },
      { metric: "Market Share", value: 12, trend: "stable" },
      { metric: "Employees", value: 42, trend: "up" },
    ],
    kpiTrendData: [
      { year: 2022, Revenue: 1.2, EBITDA: 0.3, PAT: 0.2 },
      { year: 2023, Revenue: 1.5, EBITDA: 0.4, PAT: 0.28 },
      { year: 2024, Revenue: 1.8, EBITDA: 0.45, PAT: 0.32 },
      { year: 2025, Revenue: 2.2, EBITDA: 0.55, PAT: 0.4 },
    ],
    profitLossData: [
      { year: "2022", Revenue: 1200000, EBITDA: 300000, PAT: 200000, Extraordinary: 50000 },
      { year: "2023", Revenue: 1500000, EBITDA: 400000, PAT: 280000, Extraordinary: 60000 },
      { year: "2024", Revenue: 1800000, EBITDA: 450000, PAT: 320000, Extraordinary: 55000 },
      { year: "2025", Revenue: 2200000, EBITDA: 550000, PAT: 400000, Extraordinary: 70000 },
    ],
    balanceSheetData: [
      { item: "Assets", 2022: 3500000, 2023: 4200000, 2024: 5000000, 2025: 6100000, redFlags: "" },
      { item: "Liabilities", 2022: 1200000, 2023: 1500000, 2024: 1800000, 2025: 2000000, redFlags: "Overdue" },
      { item: "Equity", 2022: 2300000, 2023: 2700000, 2024: 3200000, 2025: 4100000, redFlags: "" },
    ],
    fundingData: [
      { round: "Seed", date: "June 2022", amount: 500000, value: 2000000, investors: "Angel Investors" },
      { round: "Series A", date: "April 2023", amount: 1200000, value: 5000000, investors: "Venture Capitalists" },
      { round: "Series B", date: "July 2024", amount: 2500000, value: 12000000, investors: "Institutional Investors" },
    ],
    clientData: [
      { name: "ABC Corp", industry: "Finance", revenue: "$200K" },
      { name: "XYZ Ltd", industry: "Tech", revenue: "$150K" },
      { name: "Global Solutions", industry: "Consulting", revenue: "$100K" },
    ],
    employeeGrowthData: [
      { year: 2022, total: 35, seniorAdded: 2, seniorReduced: 0 },
      { year: 2023, total: 40, seniorAdded: 3, seniorReduced: 1 },
      { year: 2024, total: 42, seniorAdded: 1, seniorReduced: 0 },
      { year: 2025, total: 50, seniorAdded: 4, seniorReduced: 1 },
    ],
  },
  "TechNova Pvt Ltd": {
    kpiData: [
      { metric: "Revenue", value: 10.5, trend: "up" },
      { metric: "EBITDA", value: 3.2, trend: "up" },
      { metric: "PAT", value: 2.8, trend: "up" },
      { metric: "Market Share", value: 47, trend: "up" },
      { metric: "Employees", value: 120, trend: "up" },
    ],
    kpiTrendData: [
      { year: 2022, Revenue: 6, EBITDA: 1.8, PAT: 1.5 },
      { year: 2023, Revenue: 8, EBITDA: 2.5, PAT: 2 },
      { year: 2024, Revenue: 9, EBITDA: 2.8, PAT: 2.4 },
      { year: 2025, Revenue: 10.5, EBITDA: 3.2, PAT: 2.8 },
    ],
    profitLossData: [
      { year: "2022", Revenue: 6000000, EBITDA: 1800000, PAT: 1500000, Extraordinary: 100000 },
      { year: "2023", Revenue: 8000000, EBITDA: 2500000, PAT: 2000000, Extraordinary: 120000 },
      { year: "2024", Revenue: 9000000, EBITDA: 2800000, PAT: 2400000, Extraordinary: 110000 },
      { year: "2025", Revenue: 10500000, EBITDA: 3200000, PAT: 2800000, Extraordinary: 150000 },
    ],
    balanceSheetData: [
      { item: "Assets", 2022: 15000000, 2023: 18000000, 2024: 20000000, 2025: 25000000, redFlags: "" },
      { item: "Liabilities", 2022: 5000000, 2023: 6500000, 2024: 7000000, 2025: 9000000, redFlags: "Overdue" },
      { item: "Equity", 2022: 10000000, 2023: 11500000, 2024: 13000000, 2025: 16000000, redFlags: "" },
    ],
    fundingData: [
      { round: "Seed", date: "Jan 2022", amount: 2000000, value: 5000000, investors: "VC Group" },
      { round: "Series A", date: "Mar 2023", amount: 4000000, value: 10000000, investors: "Private Equity" },
      { round: "Series B", date: "Jun 2024", amount: 6000000, value: 20000000, investors: "Institutional Investors" },
    ],
    clientData: [
      { name: "Alpha Corp", industry: "Tech", revenue: "$500K" },
      { name: "Beta Ltd", industry: "Healthcare", revenue: "$300K" },
    ],
    employeeGrowthData: [
      { year: 2022, total: 80, seniorAdded: 5, seniorReduced: 1 },
      { year: 2023, total: 100, seniorAdded: 8, seniorReduced: 2 },
      { year: 2024, total: 110, seniorAdded: 6, seniorReduced: 0 },
      { year: 2025, total: 120, seniorAdded: 7, seniorReduced: 1 },
    ],
  },
  "FinSmart Solutions": {
    kpiData: [
      { metric: "Revenue", value: 6.4, trend: "up" },
      { metric: "EBITDA", value: 1.8, trend: "up" },
      { metric: "PAT", value: 1.2, trend: "up" },
      { metric: "Market Share", value: 25, trend: "up" },
      { metric: "Employees", value: 70, trend: "up" },
    ],
    kpiTrendData: [
      { year: 2022, Revenue: 4, EBITDA: 1, PAT: 0.8 },
      { year: 2023, Revenue: 5, EBITDA: 1.3, PAT: 1 },
      { year: 2024, Revenue: 5.8, EBITDA: 1.5, PAT: 1.1 },
      { year: 2025, Revenue: 6.4, EBITDA: 1.8, PAT: 1.2 },
    ],
    profitLossData: [
      { year: "2022", Revenue: 4000000, EBITDA: 1000000, PAT: 800000, Extraordinary: 60000 },
      { year: "2023", Revenue: 5000000, EBITDA: 1300000, PAT: 1000000, Extraordinary: 70000 },
      { year: "2024", Revenue: 5800000, EBITDA: 1500000, PAT: 1100000, Extraordinary: 65000 },
      { year: "2025", Revenue: 6400000, EBITDA: 1800000, PAT: 1200000, Extraordinary: 80000 },
    ],
    balanceSheetData: [
      { item: "Assets", 2022: 10000000, 2023: 12000000, 2024: 15000000, 2025: 18000000, redFlags: "" },
      { item: "Liabilities", 2022: 4000000, 2023: 5000000, 2024: 6000000, 2025: 7000000, redFlags: "Overdue" },
      { item: "Equity", 2022: 6000000, 2023: 7000000, 2024: 9000000, 2025: 11000000, redFlags: "" },
    ],
    fundingData: [
      { round: "Seed", date: "Feb 2022", amount: 1000000, value: 3000000, investors: "Angel Investors" },
      { round: "Series A", date: "May 2023", amount: 2000000, value: 6000000, investors: "VC Group" },
    ],
    clientData: [
      { name: "Gamma Corp", industry: "Finance", revenue: "$250K" },
      { name: "Delta Ltd", industry: "Tech", revenue: "$180K" },
    ],
    employeeGrowthData: [
      { year: 2022, total: 50, seniorAdded: 3, seniorReduced: 0 },
      { year: 2023, total: 60, seniorAdded: 4, seniorReduced: 1 },
      { year: 2024, total: 65, seniorAdded: 2, seniorReduced: 0 },
      { year: 2025, total: 70, seniorAdded: 3, seniorReduced: 1 },
    ],
  },
};

const CompetitorAnalysis = () => {
  const [selectedCompany, setSelectedCompany] = useState("Flookup Analytics");
  const [selectedParameters, setSelectedParameters] = useState({
    profitLoss: true,
    balanceSheet: true,
    funding: true,
    client: true,
  });
  const [activeTab, setActiveTab] = useState("kpi");

  const companyData = companyAnalysisData[selectedCompany];

  // Destructure company data so variables exist in scope
  const {
    kpiData,
    kpiTrendData,
    profitLossData,
    balanceSheetData,
    fundingData,
    clientData,
    employeeGrowthData,
  } = companyData;

  const companies = Object.keys(companyAnalysisData);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-pink-800 text-center mb-6">
        Competitor Analysis Dashboard
      </h1>

      {/* Company Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <select
          className="border border-gray-300 rounded-lg px-4 py-2"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          {companies.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>

        {/* Parameter Selection */}
        <div className="flex gap-4 items-center">
          {Object.keys(selectedParameters).map((param) => (
            <label key={param} className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={selectedParameters[param]}
                onChange={(e) =>
                  setSelectedParameters({ ...selectedParameters, [param]: e.target.checked })
                }
              />
              {param === "profitLoss"
                ? "Profit & Loss"
                : param === "balanceSheet"
                  ? "Balance Sheet"
                  : param === "funding"
                    ? "Funding"
                    : "Client"}
            </label>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {["kpi", "profitLoss", "balanceSheet", "funding", "client", "employee"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${activeTab === tab
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {tab === "kpi"
              ? "KPI Analysis"
              : tab === "profitLoss"
                ? "Profit & Loss"
                : tab === "balanceSheet"
                  ? "Balance Sheet"
                  : tab === "funding"
                    ? "Funding"
                    : tab === "client"
                      ? "Clients"
                      : "Employee Growth"}
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
                <Line type="monotone" dataKey="Revenue" stroke="#8884d8" />
                <Line type="monotone" dataKey="EBITDA" stroke="#82ca9d" />
                <Line type="monotone" dataKey="PAT" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Profit & Loss */}
        {activeTab === "profitLoss" && selectedParameters.profitLoss && (
          <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-6 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">Profit & Loss Statement</h2>

            {/* Table */}
            <div className="overflow-x-auto mb-6 flex justify-center">
              <table className="w-full max-w-5xl border border-gray-300 text-center">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="p-2 border">Year</th>
                    <th className="p-2 border">Revenue</th>
                    <th className="p-2 border">EBITDA</th>
                    <th className="p-2 border">PAT</th>
                    <th className="p-2 border">Extraordinary</th>
                  </tr>
                </thead>
                <tbody>
                  {profitLossData.map((row, i) => (
                    <tr key={i} className="hover:bg-blue-50 transition-all">
                      <td className="p-2 border">{row.year}</td>
                      <td className="p-2 border">${row.Revenue.toLocaleString()}</td>
                      <td className="p-2 border">${row.EBITDA.toLocaleString()}</td>
                      <td className="p-2 border">${row.PAT.toLocaleString()}</td>
                      <td className="p-2 border">${row.Extraordinary.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Chart */}
            <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">Profit & Loss Overview</h3>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={profitLossData}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="Revenue" fill="#1D4ED8" />
                  <Bar dataKey="EBITDA" fill="#10B981" />
                  <Bar dataKey="PAT" fill="#F59E0B" />
                  <Bar dataKey="Extraordinary" fill="#EF4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}


        {/* Balance Sheet */}
        {activeTab === "balanceSheet" && selectedParameters.balanceSheet && (
          <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-6 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">Balance Sheet</h2>

            <div className="overflow-x-auto flex justify-center">
              <table className="w-full max-w-5xl border border-gray-300 text-center">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">Item</th>
                    <th className="p-2 border">2022</th>
                    <th className="p-2 border">2023</th>
                    <th className="p-2 border">2024</th>
                    <th className="p-2 border">2025</th>
                    <th className="p-2 border">Red Flags</th>
                  </tr>
                </thead>
                <tbody>
                  {balanceSheetData.map((row, i) => (
                    <tr key={i} className="hover:bg-blue-50 transition-all">
                      <td className="p-2 border font-medium">{row.item}</td>
                      <td className="p-2 border">${row[2022].toLocaleString()}</td>
                      <td className="p-2 border">${row[2023].toLocaleString()}</td>
                      <td className="p-2 border">${row[2024].toLocaleString()}</td>
                      <td className="p-2 border">${row[2025].toLocaleString()}</td>
                      <td className="p-2 border text-red-600 font-semibold">{row.redFlags}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}


        {/* Funding */}
        {activeTab === "funding" && selectedParameters.funding && (
          <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-6 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
              Funding History
            </h2>

            {/* Table */}
            <div className="overflow-x-auto flex justify-center mb-8">
              <table className="w-full max-w-5xl border border-gray-300 text-center">
                <thead className="bg-blue-100 text-blue-800 font-semibold">
                  <tr>
                    <th className="p-3 border">Round</th>
                    <th className="p-3 border">Date</th>
                    <th className="p-3 border">Amount</th>
                    <th className="p-3 border">Valuation</th>
                    <th className="p-3 border">Investors</th>
                  </tr>
                </thead>
                <tbody>
                  {fundingData.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-blue-50 transition-all cursor-pointer"
                    >
                      <td className="p-3 border font-medium">{row.round}</td>
                      <td className="p-3 border">{row.date}</td>
                      <td className="p-3 border">${row.amount.toLocaleString()}</td>
                      <td className="p-3 border">${row.value.toLocaleString()}</td>
                      <td className="p-3 border">{row.investors}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Line Chart: Funding Trend Over Time */}
            <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              Funding Trend Over Time
            </h3>
            <div className="w-full h-64 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={fundingData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Legend />
                  <Line type="monotone" dataKey="amount" stroke="#1D4ED8" name="Amount Raised" />
                  <Line type="monotone" dataKey="value" stroke="#10B981" name="Company Valuation" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart: Funding Amount per Round */}
            <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
              Funding Amount per Round
            </h3>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
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
          </div>
        )}



        {/* Clients */}
        {activeTab === "client" && selectedParameters.client && (
          <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-6 mb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-6 text-center">
              Clients
            </h2>

            <div className="overflow-x-auto flex justify-center">
              <table className="w-full max-w-4xl border border-gray-300 text-center">
                <thead className="bg-blue-100 text-blue-800 font-semibold">
                  <tr>
                    <th className="p-3 border">Name</th>
                    <th className="p-3 border">Industry</th>
                    <th className="p-3 border">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {clientData.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-blue-50 transition-all cursor-pointer"
                    >
                      <td className="p-3 border font-medium">{row.name}</td>
                      <td className="p-3 border">{row.industry}</td>
                      <td className="p-3 border">${row.revenue.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}


        {/* Employee Growth */}
        {activeTab === "employee" && (
          <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Employee Growth</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={employeeGrowthData}>
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
                <Bar dataKey="seniorAdded" fill="#82ca9d" />
                <Bar dataKey="seniorReduced" fill="#ff8042" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CompetitorAnalysis;
