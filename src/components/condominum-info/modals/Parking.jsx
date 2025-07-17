import React, { useState } from 'react';

const Parking = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({
    parkingTime: '',
    overview: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    onClose();
  };

  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black/50 z-50'>
      <div className='bg-white w-[55%] rounded-2xl shadow-lg'>


        <div className='flex justify-between items-center px-5 py-3 bg-gray-100 rounded-t-2xl border-b border-gray-300'>
          <h3 className='text-lg font-semibold'>Parking</h3>
          <button
            className='text-xl text-gray-500 hover:text-black font-bold cursor-pointer'
            onClick={onClose}
          >
            ✕
          </button>
        </div>


        <form className='px-5 py-4' onSubmit={handleSubmit}>

          <div className='w-75 flex justify-between items-center border border-gray-300 rounded-xl px-4 py-3 mb-4'>
            <p className='text-sm font-medium'>Guest vehicle parking time</p>
            <select
              value={form.parkingTime}
              onChange={(e) => setForm({ ...form, parkingTime: e.target.value })}
              className='border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none'
            >
              <option value="">Select</option>
              <option value="2H">2H</option>
              <option value="3H">3H</option>
              <option value="4H">4H</option>
            </select>
          </div>


          <textarea
            placeholder='Write parking overview...'
            className='w-full border border-gray-300 rounded-xl p-3 text-lg resize-none'
            rows={4}
            maxLength={200}
            value={form.overview}
            onChange={(e) => setForm({ ...form, overview: e.target.value })}
          ></textarea>

          <div className='text-right text-xs text-gray-500 mt-1'>
            {form.overview.length}/200
          </div>


          <div className='flex justify-end mt-4'>
            <button
              type="submit"
              className='bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 text-sm'
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Parking;
