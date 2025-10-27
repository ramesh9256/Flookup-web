import React from "react";

const ChargeSummary = () => {
  const charges = [
    {
      id: "101153666",
      status: "Creation",
      date: "17 Sep, 2025",
      filingDate: "17 Sep, 2025",
      holder: "SMALL INDUSTRIES DEVELOPMENT BANK OF INDIA",
      amount: "7.50",
      propertyType:
        "Movable property - Equipment and Machinery, Movable property - Inventory (incl. Receivables), Intangible - Goodwill, Trademarks, Patent, Licence, Copyright, Designs, IPR, Book debts, Others (As per schedule 1 of deed of hypothecation)",
      holdersCount: "SMALL INDUSTRIES DEVELOPMENT BANK OF INDIA",
    },
    {
      id: "100945833",
      status: "Modification",
      date: "30 Jun, 2025",
      filingDate: "8 Jul, 2025",
      holder: "CANARA BANK",
      amount: "25.00",
      propertyType:
        "Movable property - Inventory (incl. Receivables), Book debts",
      holdersCount: "CANARA BANK",
    },
    {
      id: "100967017",
      status: "Satisfaction",
      date: "8 Sep, 2025",
      filingDate: "8 Sep, 2025",
      holder: "SAS FINSERV PRIVATE LIMITED",
      amount: "0.50",
      propertyType: "-",
      holdersCount: "SAS FINSERV PRIVATE LIMITED",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Creation":
        return "text-blue-600 bg-blue-100";
      case "Modification":
        return "text-yellow-600 bg-yellow-100";
      case "Satisfaction":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="p-4 md:p-8 bg-white rounded-xl shadow-md border border-gray-200 overflow-x-auto">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        Charge Details
      </h2>

      {/* Table for desktop */}
      <table className="min-w-full border border-gray-300 text-sm md:text-base">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3 text-left border">ID</th>
            <th className="p-3 text-left border">Status</th>
            <th className="p-3 text-left border">Date</th>
            <th className="p-3 text-left border">Filing Date</th>
            <th className="p-3 text-left border">Holder</th>
            <th className="p-3 text-left border">Amount (₹ Crore)</th>
            <th className="p-3 text-left border">Property Type</th>
            <th className="p-3 text-left border">Holders</th>
          </tr>
        </thead>

        <tbody>
          {charges.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              <td className="p-3 border">{item.id}</td>
              <td className="p-3 border">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>
              </td>
              <td className="p-3 border">{item.date}</td>
              <td className="p-3 border">{item.filingDate}</td>
              <td className="p-3 border">{item.holder}</td>
              <td className="p-3 border">{item.amount}</td>
              <td className="p-3 border">{item.propertyType}</td>
              <td className="p-3 border text-center">{item.holdersCount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile cards */}
      <div className="grid md:hidden gap-4 mt-4">
        {charges.map((item, index) => (
          <div
            key={index}
            className="p-4 border rounded-xl bg-gray-50 shadow-sm space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">{item.id}</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>
            <p>
              <strong>Date:</strong> {item.date}
            </p>
            <p>
              <strong>Filing Date:</strong> {item.filingDate}
            </p>
            <p>
              <strong>Holder:</strong> {item.holder}
            </p>
            <p>
              <strong>Amount:</strong> ₹{item.amount} Cr
            </p>
            <p>
              <strong>Property Type:</strong> {item.propertyType}
            </p>
            <p>
              <strong>No. of Holders:</strong> {item.holdersCount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChargeSummary;
