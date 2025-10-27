import React from "react";

const CompanyDetails = ({ company, onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-blue-700">
            {company.companyName}
          </h2>
          <button
            onClick={onBack}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
          >
            ← Back
          </button>
        </div>

        {/* Random Info Section */}
        <p className="text-gray-700 mb-6">
          Welcome to <span className="font-semibold">{company.companyName}</span>’s detailed
          page. This page can be used to display insights, analytics, and
          additional company-specific details.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg bg-gray-50">
            <h3 className="font-semibold text-gray-800">Default</h3>
            <p className="text-gray-600">{company.default}</p>
          </div>

          <div className="p-4 border rounded-lg bg-gray-50">
            <h3 className="font-semibold text-gray-800">Last Data Summary</h3>
            <p className="text-gray-600">{company.lastDataSummary}</p>
          </div>

          <div className="p-4 border rounded-lg bg-gray-50 col-span-2">
            <h3 className="font-semibold text-gray-800">Description</h3>
            <p className="text-gray-600">{company.description}</p>
          </div>
        </div>

        {/* Dummy extra section */}
        <div className="mt-8 bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="text-blue-700 font-semibold mb-2">More Insights</h4>
          <p className="text-gray-700">
            Here you can add graphs, data visualizations, or custom tabs later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
