import React, { useState } from 'react'
import { FaHouseChimney } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const PropertyType = () => {

    const[selectProperty, setSelectProperty] = useState(null)

    const propertyData = [
        {
            id:1,
            icon: <FaHouseChimney size={25}/>,
            title: "Single House Propert",
            description: "Single unit house for single family"

        },
        {
            id:2,
            icon: <BsBuildingsFill size={25}/>,
            title: "Apartments Complex",
            description: "Multiple unit house for single families"

        },
        {
            id:3,
            icon: <HiOutlineBuildingOffice2 size={25}/>,
            title: "Condominiums",
            description: "Multiple unit house for single families"

        },
    ]

  return (
    <div>
        <h3 className='text-xl font-semibold ml-6 mt-2'>Propert Type</h3>
        <div className='flex justify-between bg-white m-4'>
            {
                propertyData.map( data => 
                <div key={data.id} className='flex justify-center items-center gap-4 p-4 border border-gray-200 m-2 rounded-sm cursor-pointer'>
                    <div>{data.icon}</div>
                    <div>
                        <h3 className='text-lg font-semibold'>{data.title}</h3>
                        <p className='text-gray-500'>{data.description}</p>
                    </div>
                </div>
            )
            }
        </div>
    </div>
  )
}

export default PropertyType