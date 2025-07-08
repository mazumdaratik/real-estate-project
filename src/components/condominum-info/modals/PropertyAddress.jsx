import React, { useState } from "react";

const PropertyAddress = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState( {
    propertyName: "",
    totalUnits: "",
    website: "",
    country: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: ""
  } );

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
    <div className="p-4 fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[55%] max-w-4xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-300 bg-gray-100 rounded-t-md">
          <h2 className="text-lg font-semibold">Property address</h2>
          <button className="text-gray-500 hover:text-black" onClick={onClose}>✕</button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Property name as identifier<span className="text-red-500">*</span></label>
            <input name="propertyName" placeholder="Enter property name" value={form.propertyName} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-3 py-2" required />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Total apartment unit<span className="text-red-500">*</span></label>
            <input type="number" name="totalUnits" placeholder="e.g. 50" value={form.totalUnits} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-3 py-2" required />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Property website <span className="text-gray-400">(optional)</span></label>
            <input name="website" value={form.website} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-3 py-2" placeholder="https://" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Country/Region</label>
            <select name="country" value={form.country} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-3 py-2">
              <option value="">Choose country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Street address<span className="text-red-500">*</span></label>
            <input name="street" placeholder="e.g. 111 Austin Ave" value={form.street} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-3 py-2" required />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Apt, suite, unit <span className="text-gray-400">(if applicable)</span></label>
            <input name="apt" placeholder="e.g. 101" value={form.apt} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">City/Town</label>
            <input name="city" placeholder="e.g. Dallas" value={form.city} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">State/Territory</label>
            <select name="state" value={form.state} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-3 py-2">
              <option value="">Choose state</option>
              <option value="TX">Texas</option>
              <option value="CA">California</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Zip code<span className="text-red-500">*</span></label>
            <input name="zip" placeholder="e.g. 75001" value={form.zip} onChange={handleChange} className="w-full border border-gray-300 rounded-xl px-3 py-2" required />
          </div>

          <div className="border-t border-gray-300 p-2 lg:col-span-3 text-right">
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyAddress;
