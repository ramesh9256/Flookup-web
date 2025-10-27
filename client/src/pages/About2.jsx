import React from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";

const About2 = () => {
  const associatedEntities = [
    {
      name: "Flookup Analytics Pvt. Ltd.",
      location: "Jaipur, India",
      date: "12 March 2018",
      companies: "Flookup Finance, Flookup Research",
      financials: "$1.2M",
      employees: 42,
    },
    {
      name: "Flookup Technologies LLP",
      location: "Gurugram, India",
      date: "28 July 2020",
      companies: "Flookup Capital, Flookup Data Systems",
      financials: "$890K",
      employees: 30,
    },
    {
      name: "Flookup Global Advisors",
      location: "Singapore",
      date: "5 February 2021",
      companies: "Flookup Analytics Pvt. Ltd.",
      financials: "$2.1M",
      employees: 18,
    },
  ];

  const boardOfDirectors = [
    { name: "Neha Jain Nemani", designation: "Founder & CEO" },
    { name: "Vaibhav Mandhana", designation: "CFO" },
    { name: "Rohit Agarwal", designation: "CTO" },
    { name: "Anjali Verma", designation: "Director - Strategy" },
  ];

  const financialMetrics = [
    { metric: "Revenue (FY 2024)", value: "$1.2M" },
    { metric: "Net Profit Margin", value: "16.4%" },
    { metric: "Operating Expense Ratio", value: "32%" },
    { metric: "EBITDA", value: "$340K" },
    { metric: "YoY Growth", value: "28%" },
  ];

  const ratioAnalysis = [
    { ratio: "Current Ratio", value: "1.9" },
    { ratio: "Debt-to-Equity", value: "0.6" },
    { ratio: "Return on Equity (ROE)", value: "14%" },
    { ratio: "Gross Margin", value: "58%" },
  ];

  const fundingRounds = [
    { round: "Seed (Jun 2022)", amount: "$500K" },
    { round: "Series A (Apr 2023)", amount: "$2.5M" },
    { round: "Series B (Jul 2024)", amount: "$5M" },
  ];

  const companyInfo = {
    website: "https://www.flookup.com",
    phone: "+91-9876543210",
    lastUpdate: "10 Oct 2025",
    sector: "Technology > FinTech > Analytics",
    category: "Startup",
    competitiveLandscape:
      "Key competitors include Finlytics, ValuEdge, and InvestIQ in the financial analytics space.",
    compliance:
      "Flookup complies with Indian Companies Act 2013, GDPR for international users, and regular filing with MCA.",
    relatedPartySummary:
      "Related parties include founding investors and partner firms offering complementary analytics services.",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
      {/* Company Overview */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between text-center md:text-left bg-white shadow-md rounded-2xl p-8"
      >
        {/* Left Side Content */}
        <div className="md:w-3/4">
          <h1 className="text-4xl font-bold text-red-700 mb-4">About Nextyn</h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Flookup is a cutting-edge platform providing company valuation,
            financial analysis, and portfolio tracking solutions. Our mission is
            to make financial data accessible, intelligent, and actionable for
            businesses and investors worldwide.
          </p>
        </div>

        {/* Right Side Profile Section */}
        <div className="mt-8 md:mt-0 md:w-1/4 flex flex-col items-center justify-center">
          <div className="bg-blue-100 p-4 rounded-full shadow-md hover:shadow-lg transition-all">
            <User className="text-blue-700 w-12 h-12" />
          </div>
          <button className="mt-3 text-blue-700 font-semibold hover:underline">
            Claim Profile
          </button>
        </div>
      </motion.section>

      {/* Founder */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-3">
          About the Founder
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Founded by <span className="font-bold text-green-700" style={{ fontFamily: 'cursive' }}>Neha Jain Nemani</span>, a finance expert and tech entrepreneur with 10+ years experience in valuation, mergers, and startup consulting. His vision is to simplify financial decision-making using AI-driven analytics and real-time tools.
        </p>
      </motion.section>

      {/* Key Company Info */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-gray-500 mb-1">Website</h3>
          <a
            href={companyInfo.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold"
          >
            {companyInfo.website}
          </a>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-gray-500 mb-1">Phone</h3>
          <p className="text-gray-700 font-medium">{companyInfo.phone}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-gray-500 mb-1">Last Updated</h3>
          <p className="text-gray-700 font-medium">{companyInfo.lastUpdate}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-gray-500 mb-1">Sector</h3>
          <p className="text-gray-700 font-medium">{companyInfo.sector}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h3 className="text-gray-500 mb-1">Category</h3>
          <p className="text-gray-700 font-medium">{companyInfo.category}</p>
        </div>
      </motion.section>

      {/* Competitive Landscape */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          Competitive Landscape
        </h2>
        <p className="text-gray-700">{companyInfo.competitiveLandscape}</p>
      </motion.section>

      {/* Compliance & Related Party */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-6"
      >
        <div className="bg-green-50 p-4 rounded-xl shadow-sm">
          <h3 className="font-semibold text-green-700 mb-1">Compliance & Filing</h3>
          <p className="text-gray-700">{companyInfo.compliance}</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-xl shadow-sm">
          <h3 className="font-semibold text-yellow-700 mb-1">Related Party Summary</h3>
          <p className="text-gray-700">{companyInfo.relatedPartySummary}</p>
        </div>
      </motion.section>

      {/* Associated Entities Table */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Associated Entities
        </h2>
        <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-blue-600 text-white text-left">
              <tr>
                <th className="py-3 px-4">Legal Entity Name</th>
                <th className="py-3 px-4">Location</th>
                <th className="py-3 px-4">Date of Incorporation</th>
                <th className="py-3 px-4">Associated Companies</th>
                <th className="py-3 px-4">Latest Financials (USD)</th>
                <th className="py-3 px-4">Employee Count</th>
              </tr>
            </thead>
            <tbody>
              {associatedEntities.map((entity, index) => (
                <motion.tr
                  key={index}
                  whileHover={{ backgroundColor: "#EFF6FF", scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="border-b border-gray-200 hover:shadow-sm"
                >
                  <td className="py-3 px-4 font-medium">{entity.name}</td>
                  <td className="py-3 px-4">{entity.location}</td>
                  <td className="py-3 px-4">{entity.date}</td>
                  <td className="py-3 px-4">{entity.companies}</td>
                  <td className="py-3 px-4">{entity.financials}</td>
                  <td className="py-3 px-4">{entity.employees}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Funding Rounds */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-10"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Funding Rounds
        </h2>
        <ul className="space-y-2 text-gray-700">
          {fundingRounds.map((f, i) => (
            <li key={i}>
              <strong>{f.round}:</strong> {f.amount}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Financial Metrics Table */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Financial Metrics
        </h2>
        <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Metric</th>
                <th className="py-3 px-4 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              {financialMetrics.map((m, i) => (
                <tr key={i} className="border-b border-gray-200 hover:bg-gray-50 transition-all">
                  <td className="py-3 px-4 font-medium">{m.metric}</td>
                  <td className="py-3 px-4">{m.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Ratio Analysis Table */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-10"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Ratio Analysis
        </h2>
        <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left">Ratio</th>
                <th className="py-3 px-4 text-left">Value</th>
              </tr>
            </thead>
            <tbody>
              {ratioAnalysis.map((r, i) => (
                <tr key={i} className="border-b border-gray-200 hover:bg-gray-50 transition-all">
                  <td className="py-3 px-4 font-medium">{r.ratio}</td>
                  <td className="py-3 px-4">{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Board of Directors */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="mt-10"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Board of Directors
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardOfDirectors.map((director, i) => (
            <div key={i} className="bg-white p-4 rounded-xl shadow-md text-center">
              <p className="font-medium text-gray-700">{director.name}</p>
              <p className="text-gray-500">{director.designation}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SWOT Analysis */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-10"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">SWOT Analysis</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-xl shadow-sm">
            <h3 className="font-semibold text-green-700 mb-1">Strengths</h3>
            <ul className="text-gray-700 list-disc pl-5">
              <li>Innovative AI-driven financial analytics platform</li>
              <li>Strong founding team with diverse expertise</li>
              <li>Growing customer base across India and Singapore</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-xl shadow-sm">
            <h3 className="font-semibold text-red-700 mb-1">Weaknesses</h3>
            <ul className="text-gray-700 list-disc pl-5">
              <li>Limited international presence</li>
              <li>Dependence on seed and Series A funding</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-1">Opportunities</h3>
            <ul className="text-gray-700 list-disc pl-5">
              <li>Expanding fintech and analytics market globally</li>
              <li>Potential strategic partnerships with financial institutions</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-xl shadow-sm">
            <h3 className="font-semibold text-yellow-700 mb-1">Threats</h3>
            <ul className="text-gray-700 list-disc pl-5">
              <li>Intense competition from global fintech startups</li>
              <li>Regulatory changes impacting data analytics</li>
            </ul>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About2;
