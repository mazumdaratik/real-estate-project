import React, {useState} from 'react'
import { TbArrowDownFromArc } from "react-icons/tb";

const PhotoUpload = () => {

      const [galleryFiles, setGalleryFiles] = useState(Array(15).fill(null));

        const handleUpload = (e, index) => {
            const file = e.target.files[0];
            
            if (!file) return;

            const updatedFiles = [...galleryFiles];
            updatedFiles[index] = file;
            setGalleryFiles(updatedFiles);
        };

  return (
    <div className="m-4 border border-gray-300 rounded-t-md">
      <h2 className="bg-gray-100 font-semibold rounded-t-md border-gray-300 p-3">
        Property gallery <span className="text-gray-500">(it's not unit photo)</span>
        <span className="text-red-500">*</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-10 p-4">
        {/* Featured Photos */}
        <div className="flex flex-col">
          <p className="px-2 pb-1 font-medium text-gray-700">
            Featured photos <span className="text-red-500">*</span>
          </p>
          <div className="flex gap-4">
            <label className="border-2 h-[180px] w-[180px] bg-blue-50 border-dashed border-blue-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer">
              <TbArrowDownFromArc className="text-blue-500 mb-2 border p-0.5 rounded-md border-dashed border-blue-300 " size={28} />
              <span className="text-sm text-gray-600 text-center px-2">
                Upload cover photo<br /> (.jpg, .png only)
              </span>
              <input type="file" accept="image/*" className="hidden" onChange={(e) => handleUpload(e, 0)} />
              <span>{galleryFiles[0]?.name || ""}</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, i) => (
                <label
                  key={i}
                  className="border-2 bg-blue-50 border-dashed border-blue-300 rounded-2xl h-[85px] w-[100px] flex items-center justify-center flex-col cursor-pointer "
                >
                  <TbArrowDownFromArc className="text-blue-400 border p-0.5 rounded-md border-dashed border-blue-300" size={25} />
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleUpload(e, i + 1)} />
                  <span className="text-sm">{galleryFiles[i + 1]?.name || ""}</span>
                </label>  
              ))}

            </div>
          </div>
        </div>

        {/* More Photos */}
        <div className="flex-1">
          <p className="px-2 pb-1 font-medium text-gray-700">
            More photos <span className="text-gray-500">(optional)</span>
          </p>
          <div className="grid grid-cols-5 gap-4">
            {[...Array(10)].map((_, i) => (
              <label
                key={i}
                className="border-2 bg-blue-50 border-dashed border-blue-300 rounded-2xl h-[85px] w-[80%] flex flex-col items-center justify-center cursor-pointer"
              >
                <TbArrowDownFromArc className="text-blue-400 border p-0.5 rounded-md border-dashed border-blue-300" size={25} />
                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleUpload(e, i + 5)} />
                <span className="p-1 text-sm text-blue-600">{galleryFiles[i + 5]?.name || ""}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
  </div> 
  )
}

export default PhotoUpload