import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientData = () => {
  const documents = [
    "Tally",
    "Balance Sheet",
    "Profit & Loss A/C",
    "MIS",
    "Cash Flow",
    "Bank Statement",
  ];

  const [uploaded, setUploaded] = useState({});

  const handleUpload = (doc) => {
    toast.success(`"${doc}" uploaded successfully! ✅`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setUploaded((prev) => ({ ...prev, [doc]: true }));
  };

  const handleSubmit = (doc) => {
    if (uploaded[doc]) {
      toast.success(`"${doc}" submitted successfully! 🎉`, {
        position: "top-right",
        autoClose: 2000,
      });
    } else {
      toast.error(`Please upload "${doc}" first! ⚠️`, {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  const todayDate = new Date().toLocaleDateString();

  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200 p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">
        Client Data
      </h2>

      <table className="min-w-full text-gray-700 text-sm table-fixed border border-gray-200">
        <thead className="bg-red-600 text-white">
          <tr>
            <th className="py-2 px-4 w-1/3 text-left">Document</th>
            <th className="py-2 px-4 w-1/3 text-left">Upload</th>
            <th className="py-2 px-4 w-1/3 text-left">Submit</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc, i) => (
            <tr
              key={i}
              className="border-b border-gray-200 hover:bg-blue-50 transition-all"
            >
              <td className="py-2 px-4 font-medium">{doc}</td>
              <td className="py-2 px-4">
                <button
                  className="bg-pink-800 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                  onClick={() => handleUpload(doc)}
                >
                  Upload
                </button>
              </td>
              <td className="py-2 px-4">
                <button
                  className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                  onClick={() => handleSubmit(doc)}
                >
                  Submit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-4 text-gray-500 text-sm">
        Last updated on: <span className="font-medium">{todayDate}</span>
      </p>

      {/* Toastify Container */}
      <ToastContainer />
    </div>
  );
};

export default ClientData;
