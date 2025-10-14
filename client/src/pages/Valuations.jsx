import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const Valuations = () => {
  // Sample data
  const fundingData = [
    {
      date: "June 2022",
      amount: 500000,
      value: 2000000,
      revenue: 350000,
      multiple: 5.7,
      investors: [
        { name: "FinEdge Capital", link: "https://finedge.com" },
        { name: "Alpha Ventures", link: "https://alpha.com" }
      ]
    },
    {
      date: "April 2023",
      amount: 2500000,
      value: 7500000,
      revenue: 1000000,
      multiple: 7.5,
      investors: [
        { name: "Global Investors", link: "https://globalinvest.com" }
      ]
    },
    {
      date: "July 2024",
      amount: 5000000,
      value: 20000000,
      revenue: 2500000,
      multiple: 8,
      investors: [
        { name: "NextGen Capital", link: "https://nextgen.com" },
        { name: "SmartFunds", link: "https://smartfunds.com" }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-6">Valuations & Funding</h1>

      {/* Chart Section */}
      <div className="bg-white shadow-md rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Funding Value Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={fundingData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Area type="monotone" dataKey="value" stroke="#3b82f6" fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Funding Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl border border-gray-200">
        <table className="min-w-full text-gray-700 text-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Amount (USD)</th>
              <th className="py-3 px-4 text-left">Value (USD)</th>
              <th className="py-3 px-4 text-left">Revenue (USD)</th>
              <th className="py-3 px-4 text-left">Multiple</th>
              <th className="py-3 px-4 text-left">Investors</th>
            </tr>
          </thead>
          <tbody>
            {fundingData.map((fund, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-blue-50 transition-all">
                <td className="py-3 px-4 font-medium">{fund.date}</td>
                <td className="py-3 px-4">${fund.amount.toLocaleString()}</td>
                <td className="py-3 px-4">${fund.value.toLocaleString()}</td>
                <td className="py-3 px-4">${fund.revenue.toLocaleString()}</td>
                <td className="py-3 px-4">{fund.multiple}</td>
                <td className="py-3 px-4">
                  {fund.investors.map((inv, i) => (
                    <a
                      key={i}
                      href={inv.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline mr-2"
                    >
                      {inv.name}
                    </a>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Valuations;
