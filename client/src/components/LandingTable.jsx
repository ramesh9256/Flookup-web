import React from "react";

const LandingTable = ({ onSelect }) => {
  const companies = [
    {
      sNo: 1,
      name: "Flookup",
      redFlag: "Yes",
      description: "Random text for Flookup",
      lastValuation: "10M $",
      ourValuation: "1M $",
      lastTransaction: "2.2M $ funding",
      lastDataSummary: "14 Oct 2025",
    },
    {
      sNo: 2,
      name: "Myntra",
      redFlag: "No",
      description: "Random text for Myntra",
      lastValuation: "8M $",
      ourValuation: "2M $",
      lastTransaction: "1.5M $ funding",
      lastDataSummary: "14 Oct 2025",
    },
    {
      sNo: 3,
      name: "PhonePe",
      redFlag: "No",
      description: "Random text for PhonePe",
      lastValuation: "12M $",
      ourValuation: "3M $",
      lastTransaction: "3M $ funding",
      lastDataSummary: "14 Oct 2025",
    },
    {
      sNo: 4,
      name: "Zepto",
      redFlag: "Yes",
      description: "Random text for Zepto",
      lastValuation: "15M $",
      ourValuation: "5M $",
      lastTransaction: "4M $ funding",
      lastDataSummary: "14 Oct 2025",
    },
    {
      sNo: 5,
      name: "Razorpay",
      redFlag: "No",
      description: "Random text for Razorpay",
      lastValuation: "20M $",
      ourValuation: "10M $",
      lastTransaction: "6M $ funding",
      lastDataSummary: "14 Oct 2025",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Select a Company</h1>

      <div className="overflow-x-auto w-full max-w-4xl">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-4">S.No</th>
              <th className="py-2 px-4">Company Name</th>
              <th className="py-2 px-4">Red Flag</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Last Valuation</th>
              <th className="py-2 px-4">Our Valuation</th>
              <th className="py-2 px-4">Last Transaction</th>
              <th className="py-2 px-4">Last Data Summary</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c) => (
              <tr
                key={c.sNo}
                className="border-b hover:bg-blue-50 cursor-pointer transition-all"
                onClick={() => onSelect(c)}
              >
                <td className="py-2 px-4 text-center">{c.sNo}</td>
                <td className="py-2 px-4">{c.name}</td>
                <td className={`py-2 px-4 font-semibold ${c.redFlag === "Yes" ? "text-red-600" : "text-green-600"}`}>{c.redFlag}</td>
                <td className="py-2 px-4">{c.description}</td>
                <td className="py-2 px-4">{c.lastValuation}</td>
                <td className="py-2 px-4">{c.ourValuation}</td>
                <td className="py-2 px-4">{c.lastTransaction}</td>
                <td className="py-2 px-4">{c.lastDataSummary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LandingTable;
