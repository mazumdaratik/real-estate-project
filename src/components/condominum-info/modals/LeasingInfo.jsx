import React, { useState } from 'react';
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const LeasingInfo = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({
    leasingManager: "",
    managerPhone: "",
    managerEmail: "",
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
    <div className="p-4 fixed inset-0 flex justify-center items-center bg-black/50 z-50">
      <div className="bg-white w-[55%] rounded-2xl">
        <div className="flex justify-between items-center p-4 border border-gray-300 bg-gray-100 rounded-t-2xl">
          <h2 className="text-lg font-semibold">
            Leasing Info <span className="text-red-500">*</span>
          </h2>
          <button
            className="text-gray-500 text-lg font-semibold cursor-pointer hover:text-black"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1 px-1">
              Leasing manager name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="leasingManager"
              placeholder="Alex Johan"
              value={form.leasingManager}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-3 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 px-1">
              Leasing manager phone no. <span className="text-red-500">*</span>
            </label>
            <div className="flex">
              <select className="border border-gray-300 rounded-bl-xl rounded-tl-xl px-2 py-2">
                <option value="BD">BD</option>
                <option value="USA">USA</option>
                <option value="CA">Canada</option>
              </select>
              <input
                type="tel"
                name="managerPhone"
                placeholder="+880"
                value={form.managerPhone}
                onChange={handleChange}
                className="w-full border-t border-b border-r border-gray-300 rounded-tr-xl rounded-br-xl px-3 py-2"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 px-1">
              Leasing manager email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="managerEmail"
              placeholder="leasing@rentyard.com"
              value={form.managerEmail}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-3 py-2"
              required
            />
          </div>

          <div className="flex items-center gap-2 mt-6">
            <MdCheckBoxOutlineBlank className="cursor-pointer" />
            <p className="text-md font-medium">Address as same property</p>
          </div>

          <div className="border-t border-gray-300 pt-4 col-span-2 text-right">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeasingInfo;
