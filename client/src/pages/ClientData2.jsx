import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ClientData2 = () => {
  const documents = [
    "Tally",
    "Balance Sheet",
    "Profit & Loss A/C",
    "MIS",
    "Cash Flow",
    "Bank Statement",
  ];

  const [uploaded, setUploaded] = useState({});
  const [formatType, setFormatType] = useState("format1");
  const [showPopup, setShowPopup] = useState(false); // For modal

  const handleUpload = (doc) => {
    toast.success(`"${doc}" uploaded successfully! ✅`, {
      position: "top-right",
      autoClose: 2000,
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

  const handleSendEmail = () => {
    setShowPopup(true);
  };

  const todayDate = new Date().toLocaleDateString();

  const renderEmailContent = () => {
    switch (formatType) {
      case "format1":
        return (
          <p className="text-gray-700 leading-relaxed">
            Hi there, <br />
            <br />
            This is a gentle reminder to upload and submit the pending financial
            documents as soon as possible. Let us know if you face any issues.
            <br />
            <br />
            Regards, <br />
            <strong>Finance Team</strong>
          </p>
        );

      case "format2":
        return (
          <div className="text-gray-700 leading-relaxed">
            <p>Hello,</p>
            <br />
            <p>Please ensure the following tasks are completed:</p>
            <ol className="list-decimal ml-6 mt-2">
              <li>Upload all required documents (Tally, Balance Sheet, etc.)</li>
              <li>Click on "Submit" after uploading each document</li>
              <li>Notify us once the process is complete</li>
            </ol>
            <br />
            <p>Thanks,</p>
            <strong>Accounts Department</strong>
          </div>
        );

      case "format3":
        return (
          <div className="text-red-700 font-semibold leading-relaxed">
            <p>URGENT: ACTION REQUIRED</p>
            <br />
            <p>
              You are <u>required</u> to upload and submit all mandatory
              financial documents <u>immediately</u>. Non-compliance may result in
              delays or penalties.
            </p>
            <br />
            <p>
              Ensure that all documents are uploaded and submitted before the
              deadline.
            </p>
            <br />
            <p>Regards,</p>
            <strong>Compliance Office</strong>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200 p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Client Data</h2>

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

      {/* Email Reminder Section */}
      <div className="mt-10 border-t pt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-blue-700">Email Reminder</h3>

          {/* Send Button */}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
            onClick={handleSendEmail}
          >
            Send
          </button>
        </div>

        {/* Format Selector */}
        <div className="mb-4 max-w-xs">
          <label
            htmlFor="format"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Select Reminder Format:
          </label>
          <select
            id="format"
            className="border border-gray-300 rounded px-3 py-2 text-sm w-full"
            value={formatType}
            onChange={(e) => setFormatType(e.target.value)}
          >
            <option value="format1">Format 1 - Gentle Reminder</option>
            <option value="format2">Format 2 - Ordered Steps</option>
            <option value="format3">Format 3 - Compulsory Reminder</option>
          </select>
        </div>

        {/* Render Email Content */}
        <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
          {renderEmailContent()}
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 text-center">
            <h3 className="text-lg font-semibold text-green-700 mb-4">
              Email reminder sent successfully! ✅
            </h3>
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              onClick={() => setShowPopup(false)}
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientData2;
