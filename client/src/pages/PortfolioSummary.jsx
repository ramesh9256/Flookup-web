import React, { useState } from "react";
import { motion } from "framer-motion";

const PortfolioSummary = () => {
  const portfolioData = [
    {
      entityName: "Flookup Analytics Pvt. Ltd.",
      instrument: "Equity",
      lastValuation: "$2.0M",
      shaAgreement: "Signed",
      lastCompanyValuation: "$1.8M",
      redFlags: "None",
      todaysValuation: "$2.1M",
      investmentDate: "01-Jan-2023",
      stakePercent: "10%",
      nextReview: "01-Jan-2025",
      comments: "Strong growth",
    },
    {
      entityName: "Flookup Technologies LLP",
      instrument: "CCPS",
      lastValuation: "$890K",
      shaAgreement: "Pending",
      lastCompanyValuation: "$850K",
      redFlags: "Minor compliance issue",
      todaysValuation: "$900K",
      investmentDate: "15-Feb-2023",
      stakePercent: "15%",
      nextReview: "15-Feb-2025",
      comments: "Pending SHA",
    },
  ];

  // Director Data
  const directorData = [
    { name: "Neha Jain", din: "12345678", designation: "Director" },
    { name: "Vaibhav Mandhana", din: "87654321", designation: "CFO" },
  ];

  // Detailed info for Neha Jain only
  const directorDetails = [
    {
      company: "KANCHANSOBHA DEBT RESOLUTION ADVISORS LLP",
      designation: "Partner",
      date: "10-Jul-2019",
    },
    {
      company: "EMERALD PERFORMANCE CHEMICAL PRIVATE LIMITED",
      designation: "IRP/RP/Liquidator",
      date: "31-Oct-2023",
    },
    {
      company: "KDRA INSOLVENCY PROFESSIONALS PRIVATE LIMITED",
      designation: "Director",
      date: "23-Apr-2020",
    },
    {
      company: "JAIN NEMANI ADVISORS PRIVATE LIMITED",
      designation: "Director",
      date: "04-May-2022",
    },
    {
      company: "CREDOSYNC INFOSOFT PRIVATE LIMITED",
      designation: "IRP/RP/Liquidator",
      date: "14-Mar-2024",
    },
    {
      company: "ROLTA DEFENCE TECHNOLOGY SYSTEMS PRIVATE LIMITED",
      designation: "IRP/RP/Liquidator",
      date: "14-Mar-2024",
    },
    {
      company: "OM SHREE GANESH CONTAINERS PRIVATE LIMITED",
      designation: "IRP/RP/Liquidator",
      date: "14-Mar-2024",
    },
  ];

  const [showDirectors, setShowDirectors] = useState(false);
  const [selectedDirector, setSelectedDirector] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-6">
        Portfolio Summary
      </h1>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Request Individual Valuation
        </button>
        <button className="bg-green-600 text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition">
          Request Portfolio Valuation
        </button>
        <button
          className="bg-purple-600 text-white px-6 py-2 rounded-lg shadow hover:bg-purple-700 transition"
          onClick={() => {
            setShowDirectors(true);
            setSelectedDirector(null);
          }}
        >
          Director
        </button>
      </div>

      {/* Portfolio Table */}
      <div className="overflow-x-auto bg-white shadow-md rounded-xl border border-gray-200">
        <table className="min-w-full text-gray-700 text-sm table-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Entity Name</th>
              <th className="py-3 px-4 text-left">Instrument</th>
              <th className="py-3 px-4 text-left">Last Valuation</th>
              <th className="py-3 px-4 text-left">SHA Agreement</th>
              <th className="py-3 px-4 text-left">Last Company Valuation</th>
              <th className="py-3 px-4 text-left">Red Flags</th>
              <th className="py-3 px-4 text-left">Today's Valuation</th>
              <th className="py-3 px-4 text-left">Investment Date</th>
              <th className="py-3 px-4 text-left">Stake %</th>
              <th className="py-3 px-4 text-left">Next Review</th>
              <th className="py-3 px-4 text-left">Comments</th>
            </tr>
          </thead>
          <tbody>
            {portfolioData.map((item, index) => (
              <motion.tr
                key={index}
                whileHover={{ scale: 1.01, backgroundColor: "#EFF6FF" }}
                transition={{ duration: 0.3 }}
                className="border-b border-gray-200 cursor-pointer"
              >
                <td className="py-3 px-4 font-medium">{item.entityName}</td>
                <td className="py-3 px-4">{item.instrument}</td>
                <td className="py-3 px-4">{item.lastValuation}</td>
                <td className="py-3 px-4">{item.shaAgreement}</td>
                <td className="py-3 px-4">{item.lastCompanyValuation}</td>
                <td className="py-3 px-4">{item.redFlags}</td>
                <td className="py-3 px-4">{item.todaysValuation}</td>
                <td className="py-3 px-4">{item.investmentDate}</td>
                <td className="py-3 px-4">{item.stakePercent}</td>
                <td className="py-3 px-4">{item.nextReview}</td>
                <td className="py-3 px-4">{item.comments}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Director Table */}
      {showDirectors && !selectedDirector && (
        <div className="overflow-x-auto bg-white shadow-md rounded-xl border border-gray-200 mt-8">
          <h2 className="text-2xl font-semibold text-center text-purple-700 py-4">Directors</h2>
          <table className="min-w-full text-gray-700 text-sm table-auto">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Director Name</th>
                <th className="py-3 px-4 text-left">DIN No.</th>
                <th className="py-3 px-4 text-left">Designation</th>
              </tr>
            </thead>
            <tbody>
              {directorData.map((dir, idx) => (
                <motion.tr
                  key={idx}
                  whileHover={
                    dir.name === "Neha Jain"
                      ? { scale: 1.01, backgroundColor: "#F3E8FF" }
                      : {}
                  }
                  transition={{ duration: 0.3 }}
                  className={`border-b border-gray-200 ${
                    dir.name === "Neha Jain" ? "cursor-pointer" : "cursor-not-allowed opacity-50"
                  }`}
                  onClick={() => {
                    if (dir.name === "Neha Jain") {
                      setSelectedDirector(dir.name);
                    }
                  }}
                >
                  <td className="py-3 px-4 font-medium text-blue-700 underline">{dir.name}</td>
                  <td className="py-3 px-4">{dir.din}</td>
                  <td className="py-3 px-4">{dir.designation}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Detailed Director Table */}
      {selectedDirector === "Neha Jain" && (
        <div className="overflow-x-auto bg-white shadow-md rounded-xl border border-gray-200 mt-8">
          <h2 className="text-2xl font-semibold text-center text-purple-700 py-4">
            {selectedDirector} Details
          </h2>
          <table className="min-w-full text-gray-700 text-sm table-auto">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Company</th>
                <th className="py-3 px-4 text-left">Designation</th>
                <th className="py-3 px-4 text-left">Date of Appointment</th>
              </tr>
            </thead>
            <tbody>
              {directorDetails.map((row, idx) => (
                <motion.tr
                  key={idx}
                  whileHover={{ scale: 1.01, backgroundColor: "#F3E8FF" }}
                  transition={{ duration: 0.3 }}
                  className="border-b border-gray-200"
                >
                  <td className="py-3 px-4">{row.company}</td>
                  <td className="py-3 px-4">{row.designation}</td>
                  <td className="py-3 px-4">{row.date}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PortfolioSummary;
