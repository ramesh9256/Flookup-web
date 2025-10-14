import React from "react";

const Main = ({ onSelect }) => {
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
      lastDataSummary: "14 Oct 2025",
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
      lastDataSummary: "14 Oct 2025",
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

      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Details
      </h2>

      {/* Table */}
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
                className="text-center hover:bg-gray-50 transition-all"
              >
                <td className="border px-4 py-2">{c.sNo}</td>

                {/* 👇 Flookup name clickable */}
                <td
                  className="border px-4 py-2 font-semibold text-gray-800 cursor-pointer hover:underline"
                  onClick={() => c.name === "Flookup" && onSelect()}
                >
                  {c.name}
                </td>

                {/* 👇 RedFlag clickable only for Flookup */}
                <td
                  className={`border px-4 py-2 cursor-pointer ${
                    c.redFlag === "Yes"
                      ? "text-red-600 font-bold hover:underline"
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
      </div>
    </div>
  );
};

export default Main;
