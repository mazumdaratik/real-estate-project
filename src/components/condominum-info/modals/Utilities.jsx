import React, { useState } from 'react'

const Utilities = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState({
    utilityType: '',
    providerName: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
    onClose()
  }

  return (
    <div className='p-4 inset-0 fixed flex justify-center items-center bg-black/50 z-50'>
      <div className='bg-white w-[55%] rounded-lg max-w-4xl'>
        <div className='p-3 flex justify-between items-center border-b border-gray-300 rounded-t bg-gray-100'>
          <h3 className='font-semibold text-lg'>Utilities Provider</h3>
          <button 
            onClick={onClose} 
            className='text-gray-500 hover:text-black cursor-pointer'
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className='grid grid-cols-2 p-4 gap-4'>
          <div>
            <label htmlFor="utilityType">
              Utility type <span className="text-red-600">*</span>
            </label> <br />
            <select
              id="utilityType"
              name="utilityType"
              value={form.utilityType}
              onChange={handleChange}
              required
              className="border border-gray-400 rounded-lg p-2 w-full"
            >
              <option value="">Select</option>
              <option value="utility-1">utility-1</option>
              <option value="utility-2">utility-2</option>
              <option value="utility-3">utility-3</option>
            </select>
          </div>

          <div>
            <label htmlFor="providerName">
              Provider company name <span className="text-red-600">*</span>
            </label>
            <input
              id="providerName"
              name="providerName"
              type="text"
              placeholder='Enter name'
              value={form.providerName}
              onChange={handleChange}
              required
              className="border border-gray-400 rounded-lg p-2 w-full"
            />
          </div>

          <div className='col-span-2 border-t border-gray-300 text-right pt-2 '>
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

export default Utilities
