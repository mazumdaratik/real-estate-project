import React, { useState } from 'react'

const AboutProperty = ({onClose, onSubmit}) => {
  const [form, setForm] = useState({
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(form)
    onClose();
  }

  return (
    <div className='p-4 fixed inset-0 flex justify-center items-center bg-black/50 z-50'>
        <div className='bg-white w-[55%] rounded-lg shadow-lg max-w-4xl'>
            <div className='p-3 flex justify-between items-center bg-gray-100 border-b border-gray-300 rounded-t-lg'>
                <h3 className='text-lg font-semibold'>About the property(optional)</h3>
                <button onClick={onClose} className='text-gray-500 hover:text-black cursor-pointer'>✕</button>
            </div>
            <form onSubmit={handleSubmit} className='grid grid-cols-1'>
                <textarea name="" id="" 
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className='p-3 m-3 w-177 h-40 resize-none border rounded-lg border-gray-400'
                placeholder='Type message here'/>
                <div className="border-t border-gray-300 p-3 col-span-1 text-right">
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

export default AboutProperty