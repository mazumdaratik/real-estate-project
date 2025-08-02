import React, { useState } from 'react'

const RentFrequency = ({onClose, onSubmit}) => {

  const [form, setForm] = useState({
    paymentMonth: "",
    rentReminder: "",
    rentDue: "",
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm( (prev) => ({
      ...prev, [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
    onClose();
  }

  return (
    <div className='p-4 fixed inset-0 flex items-center justify-center bg-black/50 z-50'>
        <div className='bg-white rounded-lg shadow-lg w-[55%] max-w-4xl'>
            <div className='p-3 flex justify-between items-center border-b border-gray-300 bg-gray-100 rounded-t-lg'> 
                <h3 className='text-lg font-semibold'>Rent frequency & payment reminder</h3>
                <button 
                onClick={onClose}
                className="text-gray-500 text-lg cursor-pointer hover:text-black">✕</button>
            </div>
            <form onSubmit={handleSubmit} className='p-4 grid grid-cols-3 gap-6'>
                <div>
                    <label htmlFor="rent-payment" className='block text-sm font-medium mb-1'>Rent payment frequency <span className='text-red-500'>*</span></label>
                    <select 
                    name="paymentMonth" 
                    value={form.paymentMonth}
                    onChange={handleChange}
                    className='p-2 border border-gray-300 rounded-lg w-50'
                    required
                    >
                        <option value="monthly">Monthly</option>
                        <option value="quarterly">Quaterly</option>
                        <option value="weekly">Weekly</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="rent-reminder" className='block text-sm font-medium mb-1'>Rent Reminder/Statement date <span className='text-red-500'>*</span></label>
                    <input type="date"
                    name='rentReminder'
                    value={form.rentReminder}
                    onChange={handleChange}
                    className='p-2 border border-gray-300 rounded-lg w-50'
                    required
                     />
                </div>
                <div>
                    <label htmlFor="rent-due" className='block text-sm font-medium mb-1'>Rent due date <span className='text-red-500'>*</span></label>
                    <input type="date"
                    name='rentDue'
                    value={form.rentDue}
                    onChange={handleChange}
                    className='p-2 border border-gray-300 rounded-lg w-50'
                    required
                     />
                </div>

          <div className="border-t border-gray-300 pt-4 col-span-3 text-right">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-6 py-2 rounded"
            >
              Add
            </button>
          </div>
            </form>
        </div>
    </div>
  )
}

export default RentFrequency