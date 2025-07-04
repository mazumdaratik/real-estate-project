import React from 'react'
import { IoKeyOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { MdOutlineApartment } from "react-icons/md";

    const PropertyRole = ({selectPropertyRole, setSelectPropertyRole}) => {


    const propertyRoleData = [
        {
            id:1,
            icon: <IoKeyOutline size={25}/>,
            title: "LandLord",
            description: "Owner of the property"

        },
        {
            id:2,
            icon: <GoPeople size={25}/>,
            title: "Realtor",
            description: "Manage property on behalf of owner"

        },
        {
            id:3,
            icon: <MdOutlineApartment size={25}/>,
            title: "Property Management Company",
            description: "For management company"

        },
    ]

  return (
    <div>
        <h3 className='text-xl font-semibold ml-6 mt-4'>Propert Role</h3>
        <div className='flex justify-between bg-white m-4'>
            {
                propertyRoleData.map( data => 
                <div 
                key={data.id} 
                onClick={ () => setSelectPropertyRole(data.id)}
                className={`w-100 flex justify-center items-center gap-4 p-4 border m-2 rounded-2xl cursor-pointer transition all
                    ${selectPropertyRole === data.id ? 'border-blue-600': 'border-gray-200'}`}>
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

export default PropertyRole