import React, { useState } from 'react';

const Charges = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({
    applicationFee: '',
    applicantType: 'All 18+ applicant',
    adminFee: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl">
        {/* Header */}
        <div className="flex justify-between items-center p-3 border-b border-gray-300 bg-gray-100 rounded-t-xl">
          <h2 className="text-lg font-semibold">Charges</h2>
          <button onClick={onClose} className="text-gray-500 text-lg cursor-pointer hover:text-black">✕</button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          {/* Application Fee */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <div className="w-full lg:w-1/2">
              <label className="block text-sm font-medium mb-1">Application fee (one-time)*</label>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <input
                  type="number"
                  name="applicationFee"
                  placeholder="e.g. 100"
                  value={form.applicationFee}
                  onChange={handleChange}
                  required
                  className="w-1/2 px-3 py-2 focus:outline-none"
                />
                <select
                  name="applicantType"
                  value={form.applicantType}
                  onChange={handleChange}
                  className="w-1/2 px-3 py-2 bg-white focus:outline-none"
                >
                  <option>All 18+ applicant</option>
                  <option>Only main applicant</option>
                  <option>Each adult</option>
                </select>
              </div>
            </div>

            {/* Admin Fee */}
            <div className="w-full lg:w-1/2">
              <label className="block text-sm font-medium mb-1">Admin fee (one-time)*</label>
              <input
                type="number"
                name="adminFee"
                placeholder="e.g. 15"
                value={form.adminFee}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
          </div>

          {/* Note */}
          <div className="pt-4 border-t border-gray-300 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-800">❕ Type 0 if charges not applicable</p>
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md"
                >
                    Add
                </button>
         </div>

        </form>
      </div>
    </div>
  );
};

export default Charges;
