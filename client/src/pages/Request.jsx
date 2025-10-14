import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  FileSearch,
  TrendingUp,
  Scale,
  BarChart3,
  Globe,
  Users,
  PhoneCall,
  FileText,
  Landmark,
} from "lucide-react";

const Request = () => {
  const valuationMethods = [
    {
      title: "DCF (Discounted Cash Flow)",
      desc: "DCF method values a business based on the present value of its expected future cash flows, discounted back using a required rate of return.",
    },
    {
      title: "NAV (Net Asset Value)",
      desc: "Values a company based on the total value of its assets minus liabilities. Often used for asset-heavy businesses.",
    },
    {
      title: "CCM (Comparable Company Method)",
      desc: "Estimates the company’s value by comparing it with similar firms in the industry using valuation multiples like EV/EBITDA or P/E.",
    },
    {
      title: "CTM (Comparable Transaction Method)",
      desc: "Values a company based on actual transaction data of similar companies recently acquired or merged in the market.",
    },
    {
      title: "Other Methods",
      desc: "Includes sector-specific or hybrid valuation models such as replacement cost, market capitalization, or earnings yield.",
    },
  ];

  const services = [
    {
      title: "Due Diligence",
      icon: <FileSearch className="text-blue-600 w-6 h-6" />,
      desc: "Comprehensive assessment of a company’s financial, operational, and legal health before investment or acquisition. Includes verification of assets, liabilities, and compliance history.",
    },
    {
      title: "Market Research",
      icon: <BarChart3 className="text-purple-600 w-6 h-6" />,
      desc: "Analyzing market size, growth trends, customer behavior, and competition to support informed business and investment decisions.",
    },
    {
      title: "Investment Banking Services",
      icon: <Landmark className="text-green-600 w-6 h-6" />,
      desc: "Advisory services for mergers, acquisitions, fundraising, and IPOs. Helps businesses secure capital and navigate financial markets.",
    },
    {
      title: "SHA / Legal Services",
      icon: <Scale className="text-red-600 w-6 h-6" />,
      desc: "Preparation and review of Shareholder Agreements (SHA), compliance documents, and corporate legal advisory to protect stakeholder interests.",
    },
    {
      title: "Call with the Expert",
      icon: <PhoneCall className="text-orange-500 w-6 h-6" />,
      desc: "Schedule a consultation with certified valuation analysts, legal experts, or financial advisors to clarify insights and strategies.",
    },
  ];

  const analysisTypes = [
    {
      title: "Industry Analysis",
      desc: "Evaluates competition, market share, regulatory environment, and technological trends within the specific industry.",
      icon: <Briefcase className="text-indigo-600 w-6 h-6" />,
    },
    {
      title: "India Market Analysis",
      desc: "Focuses on domestic economic indicators, government policies, taxation, FDI, and emerging business sectors within India.",
      icon: <FileText className="text-blue-500 w-6 h-6" />,
    },
    {
      title: "Global Analysis",
      desc: "Studies international market trends, currency impacts, trade policies, and cross-border investment opportunities.",
      icon: <Globe className="text-emerald-600 w-6 h-6" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center text-orange-500 mb-10">
        Request & Service Overview
      </h1>

      {/* Valuation Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-green-800 mb-6 flex items-center gap-2">
          <TrendingUp className="text-green-600" /> Valuation & Portfolio Valuation
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuationMethods.map((val, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-xl transition-all"
            >
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                {val.title}
              </h3>
              <p className="text-gray-700 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center gap-2">
          <Users className="text-blue-600" /> Professional Services
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                {srv.icon}
                <h3 className="text-lg font-semibold text-gray-800">
                  {srv.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{srv.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Analysis Section */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 flex items-center gap-2">
          <BarChart3 className="text-blue-600" /> Analysis Overview
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {analysisTypes.map((a, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                {a.icon}
                <h3 className="text-lg font-semibold text-gray-900">
                  {a.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Summary */}
      <div className="mt-12 bg-gradient-to-r from-indigo-50 to-blue-100 border border-indigo-200 rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-indigo-700 mb-2 flex items-center gap-2">
          <Scale className="text-indigo-600" /> Summary
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Our request & service suite enables comprehensive financial and legal
          support — from business valuation using **DCF, CCM, or NAV models**, to
          **due diligence**, **market research**, and **expert consultations**.
          Each service ensures informed decision-making for investments, mergers,
          and strategic planning in both **Indian** and **global** markets.
        </p>
      </div>
    </div>
  );
};

export default Request;
