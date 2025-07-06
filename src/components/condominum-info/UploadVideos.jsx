import React, {useState} from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { TbArrowDownFromArc } from "react-icons/tb";

const videoData = [
    {
        id:1,
        title: "Property video",
        optional: "(optional)",
    },
    {
        id:1,
        title: "Property virtual tour",
        optional: "(optional)",
    },
    {
        id:1,
        title: "Porperty aria video",
        optional: "(optional)",
    }
]

const UploadVideos = () => {
    const [videoFile, setVideoFile] = useState(Array(3).fill(null));
    const handleVideoUpload = (e, index) => {
        const file = e.target.files[0];
        const updatedFiles = [...videoFile];
        updatedFiles[index] = file;
        setVideoFile(updatedFiles);

    }
  return (
    <div className="m-4 border border-gray-300 rounded-t-md">
      <div className=' bg-gray-100 rounded-t-md border-gray-300 flex justify-between items-center'>
        <h2 className=" font-semibold  p-3">Videos <span className='text-gray-500'>(optional)</span> </h2>
        <span> <IoIosArrowDropdownCircle size={28} className='mr-4 cursor-pointer text-gray-500'/> </span>
      </div>
      <div className="flex gap-10">
        {videoData.map( (data, index) => (
            <div key={index} className='m-4'>
                <p className='text-medium font-semibold py-4'>{data.title} 
                    <span className='text-gray-500'> {data.optional}</span>
                </p>
                <label
                  key={index}
                  className="border-2 bg-blue-50 border-dashed border-blue-300 rounded-2xl h-[120px] w-[150px] flex items-center justify-center flex-col cursor-pointer "
                >
                  <TbArrowDownFromArc className="text-blue-400 border p-0.5 rounded-md border-dashed border-blue-300" size={25} />
                  <input type="file" accept="video/*" className='hidden' onChange={(e) => handleVideoUpload(e, index)}/>
                  <span className="text-sm">{videoFile[index]?.name || ""}</span>
                </label>

            </div>
        ))}
      </div>

    </div>
  )
}

export default UploadVideos