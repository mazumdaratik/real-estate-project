// import React, {useState} from 'react'
// import { TbArrowDownFromArc } from "react-icons/tb";

const CompanyInfo = ({selectPropertyType, selectPropertyRole}) => {
    // const [fileName, setFileName] = useState(null);

    // const handleFileChange = (e) => {
    // const file = e.target.files[0];
    // setFileName(file ? file.name : "No file selected");

    // };
      const fields = [
    { id: 1, label: "Company Name*", type: "text" },
    { id: 2, label: "Company Identifier(EIN/TIN)*", type: "text" },
    { id: 3, label: "Your job title*", type: "text" },
    { id: 4, label: "Agree with landlord/owner*", type: "file" },
    { id: 5, label: "Country Region", type: "select", options: ["Bangladesh", "India", "USA"] },
    { id: 6, label: "Street address*", type: "text" },
    { id: 7, label: "Apt,suit,unit(if applicable)", type: "text" },
    { id: 8, label: "Phone number*", type: "number" },
    { id: 9, label: "Contact email*", type: "mail" },
    { id: 10, label: "City/Town*", type: "text" },
    { id: 11, label: "State/Territory", type: "option" },
    { id: 12, label: "Zip code*", type: "number" },
  ];

  return (
        <div className={selectPropertyType === 3 && selectPropertyRole === 3 ? "m-4 rounded-b-lg" : "m-4 rounded-b-lg hidden"}>
            <h4 className='bg-gray-100 text-xl p-2 rounded-t-lg'>company and office info</h4>

                <div>
                    <form className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
                        {fields.map((field) => (
                            <div key={field.id} className="flex flex-col">
                            <label htmlFor={field.id} className="mb-1 text-sm font-medium text-gray-700">
                                {field.label}
                            </label>

                            {
                                field.type === "select" ? (
                                    <select 
                                    id={field.id}
                                    name={field.id}
                                    className="border border-gray-300 rounded-lg px-3 py-2"
                                    >
                                    <option value="">Select Country</option>
                                    {field.options.map( (option, i) => (
                                        <option key={i} value={option}>{option}</option>
                                    ))}    
                                    </select>
                                ) : (
                                    <input
                                        type={field.type}
                                        id={field.id}
                                        name={field.id}
                                        className="border border-gray-300 rounded-lg px-3 py-2"
                                        placeholder={`Enter ${field.label.toLowerCase()}`}
                                    />                                    
                                )
                            }
                            </div>
                        ))}
                    </form>
                </div>
            <p> <span>☐</span>  Accept RentYard property adding terms and condition</p>
        </div>
  )
}

export default CompanyInfo