import React from "react";

const Main = ({ onSelect, onSelect1 }) => {
  const companies = [
    {
      sNo: 1,
      name: "Flookup",
      redFlag: "Yes",
      description:
        "Flookup is a data analytics and automation company helping startups streamline operations and business intelligence.",
      lastValuation: "10M $",
      ourValuation: "1M $",
      lastTransaction: "2.2M $ funding",
      lastDataSummary: "14 Oct 2025",
    },
    {
      sNo: 2,
      name: "Myntra",
      redFlag: "No",
      description:
        "Myntra is one of India’s leading fashion e-commerce platforms offering a wide range of clothing, accessories, and lifestyle products.",
      lastValuation: "20M $",
      ourValuation: "5M $",
      lastTransaction: "1.5M $ funding",
      
      lastDataSummary: "09 Oct 2025",
    },
    {
      sNo: 3,
      name: "PhonePe",
      redFlag: "No",
      description:
        "PhonePe is a digital payments platform enabling users to send money, recharge, pay bills, and make secure online payments easily.",
      lastValuation: "50M $",
      ourValuation: "10M $",
      lastTransaction: "5M $ funding",
      lastDataSummary: "04 Oct 2025",
    },
    {
      sNo: 4,
      name: "Zepto",
      redFlag: "Yes",
      description:
        "Zepto is a 10-minute grocery delivery startup focusing on speed, convenience, and freshness of products for urban consumers.",
      lastValuation: "25M $",
      ourValuation: "3M $",
      lastTransaction: "2M $ funding",
      lastDataSummary: "14 Oct 2025",
    },
    {
      sNo: 5,
      name: "Razorpay",
      redFlag: "No",
      description:
        "Razorpay provides online payment gateway services for businesses, enabling seamless and secure digital transactions.",
      lastValuation: "40M $",
      ourValuation: "8M $",
      lastTransaction: "4M $ funding",
      lastDataSummary: "14 Oct 2025",
    },
  ];

  const debtCompanies = [
    {
      id: 1,
      companyName: "Nextyn",
      default: "Yes",
      description: "Leading finance firm",
      lastDataSummary: "02 Oct 2025",
    },
    {
      id: 2,
      companyName: "Fynalliance",
      default: "No",
      description: "Tech-based lending company",
      lastDataSummary: "08 Oct 2025",
    },
    {
      id: 3,
      companyName: "PCPL",
      default: "No",
      description: "NBFC sector company",
      lastDataSummary: "12 Oct 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <h1
          className="text-3xl font-bold text-red-600"
          style={{ fontFamily: "cursive" }}
        >
          Neha Ventures
        </h1>
        <h2 className="text-lg text-red-600 font-semibold">Portfolio Fund</h2>
      </div>

      {/* Equity Funding Table */}
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Equity Funding
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 shadow-md bg-white rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr className="text-gray-800 text-sm">
              <th className="border px-4 py-2">S.No</th>
              <th className="border px-4 py-2">Company Name</th>
              <th className="border px-4 py-2">Red Flag</th>
              <th className="border px-4 py-2">Description</th>
              <th className="border px-4 py-2">Last Valuation</th>
              <th className="border px-4 py-2">Our Valuation</th>
              <th className="border px-4 py-2">Last Transaction</th>
              <th className="border px-4 py-2">Last Data Summary</th>
            </tr>
          </thead>

          <tbody>
            {companies.map((c, i) => (
              <tr
                key={i}
                className="text-center hover:bg-gray-50 transition-all cursor-pointer"
              >
                <td className="border px-4 py-2">{c.sNo}</td>
                <td className="border px-4 py-2 font-semibold text-gray-800 hover:underline"
                  onClick={() => c.name === "Flookup" && onSelect()}>
                  {c.name}
                </td>
                <td
                  className={`border px-4 py-2 ${c.redFlag === "Yes"
                    ? "text-red-600 font-bold"
                    : "text-green-600 font-medium"
                    }`}
                  onClick={() =>
                    c.name === "Flookup" && c.redFlag === "Yes" && onSelect()
                  }

                >
                  {c.redFlag}
                </td>
                <td className="border px-4 py-2 text-sm text-gray-700">
                  {c.description}
                </td>
                <td className="border px-4 py-2">{c.lastValuation}</td>
                <td className="border px-4 py-2">{c.ourValuation}</td>
                <td className="border px-4 py-2">{c.lastTransaction}</td>
                <td className="border px-4 py-2">{c.lastDataSummary}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Debt Funding Table */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 transition-all mt-10">
          <h2 className="text-3xl font-bold text-black-700 mb-6 text-center">
            💼 Debt Funding Overview
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md bg-white mt-8">
            <table className="min-w-full border border-gray-300 shadow-md bg-white rounded-xl overflow-hidden">
              {/* Table Header */}
              <thead className="bg-gray-100">
                <tr className="text-gray-800 text-sm">
                  <th className="border px-4 py-2">Company Name</th>
                  <th className="border px-4 py-2">Default</th>
                  <th className="border px-4 py-2">Description</th>
                  <th className="border px-4 py-2">Last Data Summary</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="text-center hover:bg-gray-50 transition-all cursor-pointer">
                {debtCompanies.map((c, i) => (
                  <tr
                    key={i}
                    className="hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                  >
                    {/* Company Name Clickable */}
                    <td
                      className="border px-4 py-2"
                      onClick={() => onSelect1(c)}
                    >
                      {c.companyName}
                    </td>

                    {/* Default Column (Conditional Color) */}
                    <td
                      className={`border px-4 py-2 ${c.default === "Yes"
                          ? "text-red-600"
                          : "text-green-600"
                        }`}
                    >
                      {c.default}
                    </td>

                    {/* Description */}
                    <td className="border px-4 py-2">{c.description}</td>

                    {/* Last Data Summary */}
                    <td className="border px-4 py-2">{c.lastDataSummary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Main;
