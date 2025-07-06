import React from 'react'

const fieldData = [
  { label: "Property address", required: true },
  { label: "Pet fees", optional: true, note: ", (add fees if you allow pet)" },
  { label: "Leasing info", required: true },
  { label: "Parking", optional: true },  
  { label: "Charges", required: true },
  { label: "Nearest educational institution", optional: true, recommended: true },
  { label: "Rent frequency & payment reminder", required: true },
  { label: "Application agreement", optional: true },
  { label: "About the property", optional: true },
  { label: "Community’s amenity/features", optional: true, recommended: true },
  { label: "Nearest stations", optional: true, recommended: true },
  { label: "Nearest landmark", optional: true, recommended: true },
  { label: "Utilities provider", optional: true, recommended: true },
];

const Form = () => {
  return (
          <div className="grid grid-cols-1 md:grid-cols-2">
        {
          fieldData.map( (field, index) => (
            <div key={index}
              className="flex justify-between items-center m-4 px-4 py-3 border border-gray-300 rounded-2xl "
            >
                <div>
                  <p className="font-semibold text-lg py-1">
                    {field.label}
                    {field.required && (
                      <span className="text-red-500"> (Required)</span>
                    )}
                    {field.optional && !field.recommended && (
                      <span className="text-gray-600"> (optional)</span>
                    )}
                    {field.optional && field.recommended && (
                      <span className="text-gray-600"> (optional but recommended)</span>
                    )}
                    {field.note && (
                      <span className="text-gray-600"> {field.note}</span>
                    )}
                    
                  </p>
                </div>

                <button className="flex justify-center items-center gap-1">
                  <span className="text-base">+</span>
                  <span className="underline cursor-pointer">Add</span>
                </button>
            </div>
          ))
        }
      </div>
  )
}

export default Form