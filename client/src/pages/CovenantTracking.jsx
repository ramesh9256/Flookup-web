import React, { useState } from "react";
import { Loader2 } from "lucide-react";

const CovenantTracking = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
    }, 3000);
  };

  const previousData = [
    { id: 1, covenant: "Debt raised from ABC Ventures", status: "Complied" },
    { id: 2, covenant: "Debt raised from XYZ Ventures", status: "UnComplied" },
    { id: 3, covenant: "Debt raised from DEF Capital", status: "Non-Complied" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
        <button
          onClick={handleUpload}
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all"
        >
          Upload Covenant Document
        </button>

        <div className="flex items-center justify-center sm:justify-end gap-3 text-gray-700 w-full sm:w-auto">
          {isUploading && (
            <Loader2 className="animate-spin text-blue-600 w-6 h-6" />
          )}
          <span className="text-base sm:text-lg font-semibold text-center sm:text-left">
            Let our AI do the magic ✨
          </span>
        </div>
      </div>

      {/* Covenant Table */}
      <div className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200 mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-700 bg-blue-50 px-4 sm:px-6 py-3 sm:py-4">
          Covenant Tracking
        </h2>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="min-w-full border-t border-gray-200 text-sm sm:text-base">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs sm:text-sm">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left">Covenant</th>
                <th className="px-4 sm:px-6 py-3 text-left">Type</th>
                <th className="px-4 sm:px-6 py-3 text-left">Due Date</th>
                <th className="px-4 sm:px-6 py-3 text-left">Filing Date</th>
                <th className="px-4 sm:px-6 py-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  name: "Financial Covenant",
                  type: "Financial",
                  due: "15 Oct 2025",
                  file: "16 Oct 2025",
                  status: "Complied",
                  color: "green",
                },
                {
                  name: "Operational Covenant",
                  type: "Operational",
                  due: "18 Oct 2025",
                  file: "Pending",
                  status: "Pending",
                  color: "yellow",
                },
                {
                  name: "Regulatory Compliance Covenant",
                  type: "Compliance",
                  due: "20 Oct 2025",
                  file: "19 Oct 2025",
                  status: "Complied",
                  color: "green",
                },
                {
                  name: "Debt Service Coverage Covenant",
                  type: "Financial",
                  due: "25 Oct 2025",
                  file: "Not Filed",
                  status: "Non-Complied",
                  color: "red",
                },
                {
                  name: "Operational Efficiency Covenant",
                  type: "Operational",
                  due: "28 Oct 2025",
                  file: "Pending",
                  status: "In Review",
                  color: "yellow",
                },
                {
                  name: "Quarterly Reporting Covenant",
                  type: "Financial",
                  due: "30 Oct 2025",
                  file: "30 Oct 2025",
                  status: "Complied",
                  color: "green",
                },
              ].map((item, index) => (
                <tr key={index} className="border-t hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-3">{item.name}</td>
                  <td className="px-4 sm:px-6 py-3">{item.type}</td>
                  <td className="px-4 sm:px-6 py-3">{item.due}</td>
                  <td className="px-4 sm:px-6 py-3">{item.file}</td>
                  <td className="px-4 sm:px-6 py-3">
                    <span
                      className={`px-3 py-1 rounded-lg text-sm font-medium ${
                        item.color === "green"
                          ? "bg-green-100 text-green-700"
                          : item.color === "yellow"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Previous Covenants Section */}
      <div className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-700 bg-blue-50 px-4 sm:px-6 py-3 sm:py-4">
          Previous Covenants (Debt Funding)
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border-t border-gray-200 text-sm sm:text-base">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs sm:text-sm">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left">Covenant</th>
                <th className="px-4 sm:px-6 py-3 text-left">
                  Complied / Non-Complied
                </th>
              </tr>
            </thead>

            <tbody>
              {previousData.map((item) => (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50 transition-all"
                >
                  <td className="px-4 sm:px-6 py-3">{item.covenant}</td>
                  <td className="px-4 sm:px-6 py-3">
                    {item.status === "Complied" ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                        {item.status}
                      </span>
                    ) : item.status === "UnComplied" ? (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-sm font-medium">
                        {item.status}
                      </span>
                    ) : (
                      <button
                        onClick={() => setShowModal(true)}
                        className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-all"
                      >
                        {item.status}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-md relative">
            <h3 className="text-lg sm:text-xl font-bold text-red-600 mb-4">
              Non-Complied Details
            </h3>
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              The following covenants were not complied due to delayed filing
              and missing financial data submissions. Please ensure all pending
              documents are uploaded soon.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full sm:w-auto px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CovenantTracking;
