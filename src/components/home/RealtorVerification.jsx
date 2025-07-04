import React, {useState} from 'react'
import { TbArrowDownFromArc } from "react-icons/tb";

const RealtorVerification = ({selectPropertyType, selectPropertyRole}) => {
    const [fileName, setFileName] = useState(null);

    const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "No file selected");
    };

  return (
        <div className={selectPropertyType === 3 && selectPropertyRole === 2 ? "m-4 rounded-b-lg" : "m-4 rounded-b-lg hidden"}>
            <h4 className='bg-gray-100 text-xl p-2 rounded-t-lg'>Realtor Verification</h4>

                <div>
                    <div className='flex gap-4 p-2'>

                        <div className="flex flex-col items-start gap-2 m-2">
                                <p className='m-2'>Lenience number*</p>

                                <input
                                    type="number"
                                    placeholder='0000000000'
                                    className='w-70 border border-gray-200 p-2 rounded-md'
                                />
                        </div> 

                        <div className="flex flex-col items-start gap-2 m-2">
                                <p className='m-2'>Additional documents for realtor</p>                    
                                <label
                                htmlFor="file-upload"
                                className="w-70 cursor-pointer bg-gray-100 border border-dashed border-gray-300 px-4 py-3 rounded-md hover:bg-gray-200"
                                >
                                    <div className='flex justify-center items-center gap-2'>
                                        <span>< TbArrowDownFromArc size={20} /></span> <span>(Pdf only)</span>
                                    </div>
                                </label>

                                <span className="text-sm text-gray-500">{fileName}</span>

                                <input
                                    type="file"
                                    id="file-upload"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                        </div>  

                        <div className="flex flex-col items-start gap-2 m-2">
                                <p className='m-2'>Ownership doc*</p>                    
                                <label
                                htmlFor="file-upload"
                                className="w-70 cursor-pointer bg-gray-100 border border-dashed border-gray-300 px-4 py-3 rounded-md hover:bg-gray-200"
                                >
                                    <div className='flex justify-center items-center gap-2'>
                                        <span>< TbArrowDownFromArc size={20} /></span> <span>(Pdf only)</span>
                                    </div>
                                </label>

                                <span className="text-sm text-gray-500">{fileName}</span>

                                <input
                                    type="file"
                                    id="file-upload"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                        </div>  

                    </div>
                </div>
            <p> <span>☐</span>  Accept RentYard property adding terms and condition</p>
        </div>
  )
}

export default RealtorVerification