import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

const CapTable = () => {
  // Shareholding Pattern
  const patternData = [
    { name: "Promoters", value: 55 },
    { name: "Investors", value: 35 },
    { name: "ESOP Pool", value: 10 },
  ];

  const COLORS = ["#2563EB", "#10B981", "#F59E0B"];

  // Ownership over rounds
  const fundingRounds = [
    { round: "Initial (Jun 2022)", promoters: 80, investors: 15, esop: 5 },
    { round: "Round 1 (Apr 2023)", promoters: 65, investors: 25, esop: 10 },
    { round: "Round 2 (Jul 2024)", promoters: 55, investors: 35, esop: 10 },
  ];

  // Detailed Shareholding Table
  const shareholderTable = [
    { name: "Neha Jain Nemani", shares: 40000, ownership: 30 },
    { name: "Vaibhav Mandhana", shares: 30000, ownership: 25 },
    { name: "Investor Alpha", shares: 25000, ownership: 20 },
    { name: "Investor Beta", shares: 20000, ownership: 15 },
    { name: "ESOP Pool", shares: 10000, ownership: 10 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-blue-700 mb-8"
      >
        Cap Table Dashboard
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
      >
        {/* Total Shares */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
          <h3 className="text-gray-500 mb-2">Total Shares</h3>
          <p className="text-2xl font-bold text-blue-700">1,25,000</p>
        </div>

        {/* Latest Valuation */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
          <h3 className="text-gray-500 mb-2">Latest Valuation</h3>
          <p className="text-2xl font-bold text-green-600">$5.2M</p>
          <span className="text-sm text-gray-400">Post Money</span>
        </div>

        {/* Latest Round */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
          <h3 className="text-gray-500 mb-2">Latest Round</h3>
          <p className="text-2xl font-bold text-purple-600">Round 2</p>
          <span className="text-sm text-gray-400">July 2024</span>
        </div>

        {/* ESOP Pool */}
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
          <h3 className="text-gray-500 mb-2">ESOP Pool</h3>
          <p className="text-2xl font-bold text-yellow-600">10%</p>
          <span className="text-sm text-gray-400">Reserved for Employees</span>
        </div>
      </motion.div>


      {/* Charts Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        {/* Shareholding Pattern */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Shareholding Pattern
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={patternData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {patternData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Funding Rounds Chart */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Ownership by Funding Rounds
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={fundingRounds}>
              <XAxis dataKey="round" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="promoters" fill="#2563EB" name="Promoters %" />
              <Bar dataKey="investors" fill="#10B981" name="Investors %" />
              <Bar dataKey="esop" fill="#F59E0B" name="ESOP Pool %" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Shareholder Table */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="bg-white p-6 rounded-2xl shadow-md mb-10"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Detailed Shareholding
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Shares</th>
                <th className="p-3">Ownership (%)</th>
              </tr>
            </thead>
            <tbody>
              {shareholderTable.map((item, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-blue-50 transition-all duration-300"
                >
                  <td className="p-3 font-medium">{item.name}</td>
                  <td className="p-3">{item.shares.toLocaleString()}</td>
                  <td className="p-3">{item.ownership}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Health Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center shadow-sm"
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-2">
          Cap Table Health
        </h2>
        <p className="text-gray-700 mb-2">
          Cap table is <span className="text-green-600 font-semibold">healthy</span> and well-balanced.
        </p>
        <p className="text-gray-500 text-sm">
          Founders retain control while investors and ESOP pool are within optimal dilution levels.
        </p>
      </motion.div>
    </div>
  );
};

export default CapTable;
