import React from "react";
import { motion } from "framer-motion";
import { Shield, FileText, Scale, AlertTriangle, TrendingUp } from "lucide-react";

const Compliance = () => {
  const complianceData = [
    {
      id: 1,
      title: "PAN (Permanent Account Number)",
      desc: "Unique 10-character alphanumeric ID issued by the Income Tax Department used for tax identity and financial tracking.",
      info: "Used for income tax returns, high-value transactions, and as a universal financial identifier for companies and individuals.",
      number: "ABCDE1234F" // dummy PAN (5 letters + 4 digits + 1 letter)
    },
    {
      id: 2,
      title: "TAN (Tax Deduction and Collection Account Number)",
      desc: "10-digit alphanumeric code issued for organizations that deduct or collect tax at source (TDS/TCS).",
      info: "Mandatory for companies that deduct tax from employee salaries or vendor payments and for TDS filing.",
      number: "BLRP01234C" // dummy TAN (4 letters + 5 digits + 1 letter)
    },
    {
      id: 3,
      title: "ESIC (Employees’ State Insurance Corporation)",
      desc: "A social security registration for companies providing health insurance and benefits to employees.",
      info: "Ensures medical and health coverage for employees under government welfare schemes.",
      number: "ESIC-123456789" // dummy ESIC number
    },
    {
      id: 4,
      title: "GST (Goods and Services Tax Identification Number)",
      desc: "15-digit tax registration ID for businesses under GST law, used for invoicing and tax compliance.",
      info: "Helps ensure transparency in B2B/B2C sales, used for GST return filing and claiming input tax credits.",
      number: "07ABCDE1234F1Z5" // dummy GSTIN (state code + PAN + entity + checksum)
    },
  ];


  const legalSummary = [
    { title: "Credit History", status: "Stable", color: "text-green-600" },
    { title: "Debt Recovery", status: "No Pending Cases", color: "text-blue-600" },
    { title: "Bankruptcy & Insolvency", status: "No Records Found", color: "text-green-600" },
    { title: "Legal Cases Summary", status: "Minor Civil Dispute (Resolved)", color: "text-yellow-600" },
    { title: "Defaults", status: "Nil", color: "text-green-600" },
  ];

  const riskTable = [
    {
      dimension: "Corporate Structure",
      parameter: "Private Limited, Clean Shareholding Pattern, No Related-Party Conflicts",
    },
    {
      dimension: "Financial Health",
      parameter: "Consistent revenue growth, Low debt ratio, Positive EBITDA trend",
    },
    {
      dimension: "Tax Litigations",
      parameter: "No major tax disputes, minor GST queries under review",
    },
    {
      dimension: "MCA Default",
      parameter: "All filings completed on time, no penalties or ROC issues",
    },
    {
      dimension: "Income Tax",
      parameter: "Returns filed regularly, no notices or pending scrutiny",
    },
    {
      dimension: "Indirect Tax",
      parameter: "GST returns filed monthly, compliant with e-invoicing norms",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">
        Compliance & Legal Overview
      </h1>

      {/* Compliance Identifiers */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {complianceData.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-lg border border-gray-200 rounded-xl p-5 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm mb-2">{item.desc}</p>

            {/* Number display */}
            <p className="text-gray-800 text-sm font-medium mb-1">
              <span className="text-gray-500 text-xs mr-2">Number:</span>
              <span className="font-mono text-red-600">{item.number}</span>
            </p>

            <p className="text-gray-500 text-xs italic">{item.info}</p>
          </motion.div>
        ))}
      </div>

      {/* Legal & Credit Summary */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-xl border border-gray-200 p-6 mb-10"
      >
        <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center gap-2">
          <FileText className="text-green-600" /> Legal & Credit Summary
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {legalSummary.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-all"
            >
              <h3 className="text-md font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className={`text-sm font-medium mt-1 ${item.color}`}>
                {item.status}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Risk Assessment Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-xl border border-gray-200 p-6"
      >
        <h2 className="text-2xl font-semibold text-red-700 mb-4 flex items-center gap-2">
          <Shield className="text-red-600" /> Risk Assessment & Parameters
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-gray-700 border border-gray-300 rounded-lg">
            <thead className="bg-red-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left w-1/3">Risk Dimension</th>
                <th className="py-3 px-4 text-left">Risk Parameter</th>
              </tr>
            </thead>
            <tbody>
              {riskTable.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b hover:bg-blue-50 transition-all ${i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                >
                  <td className="py-3 px-4 font-medium text-gray-800">
                    {row.dimension}
                  </td>
                  <td className="py-3 px-4">{row.parameter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Final Remarks Section */}
      <div className="mt-10 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-blue-800 mb-2 flex items-center gap-2">
          <TrendingUp className="text-blue-600" /> Compliance Status Summary
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          The company demonstrates **strong compliance performance** across all
          statutory identifiers (PAN, TAN, GST, ESIC). Legal and financial
          records indicate **no critical red flags**, and the organization has
          maintained **steady financial discipline and tax transparency**.
          Regular filings and transparent governance enhance credibility and
          reduce overall business risk exposure.
        </p>
      </div>
    </div>
  );
};

export default Compliance;
