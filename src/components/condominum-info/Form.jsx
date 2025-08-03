import React from "react";
import { BiSolidEdit, BiPlus } from "react-icons/bi";

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
  { label: "Community's amenity/features", optional: true, recommended: true },
  { label: "Nearest stations", optional: true, recommended: true },
  { label: "Nearest landmark", optional: true, recommended: true },
  { label: "Utilities provider", optional: true, recommended: true },
];

const Form = ({ 
      onOpenPropertyModal, onOpenLeasingModal, onOpenChargesModal, 
      onOpenPetFeesModal, onOpenParkingModal,onOpenRentFrequencyModal,onOpenAboutPropertyModal,
      propertyData, leasingData, chargesData, petFeesData, parkingData,rentFrequencyData, aboutPropertyData,
    }) => {

  return (
        <div className="grid grid-cols-1 md:grid-cols-2">
        {
          fieldData.map( (field, index) => {
            const isProperty = field.label === "Property address";
            const isPetFees = field.label === "Pet fees";
            const isLeasing = field.label === "Leasing info";
            const isCharges = field.label === "Charges";
            const isParking = field.label === "Parking";
            const isRentFrequency = field.label === "Rent frequency & payment reminder";
            const isAboutProperty = field.label === "About the property"
            
            const hasProperty = isProperty && propertyData;
            const hasPetFees = isPetFees && petFeesData;
            const hasLeasing = isLeasing && leasingData;
            const hasCharges = isCharges && chargesData;
            const hasParking = isParking && parkingData;
            const hasRentFrequency = isRentFrequency && rentFrequencyData
            const hasAboutProperty = isAboutProperty && aboutPropertyData

            return (
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
                 
                      {hasProperty && (
                        <div className="border-t border-gray-300 p-2">
                        <p> <strong>Name: </strong>{propertyData.propertyName} <strong>City: </strong>{propertyData.city} <strong>units: </strong>{propertyData.totalUnits} <strong>Apt: </strong>{propertyData.apt}</p>
                        <p> <strong>State:</strong> {propertyData.state} <strong>Street: </strong>{propertyData.street} <strong>web: </strong>{propertyData.website} <strong>Zip: </strong> {propertyData.zip}</p>
                        </div>  
                      )}

                      {hasPetFees && (
                        <div className="border-t border-gray-300 p-2">
                          <p><strong>Pet Type: </strong> {petFeesData.petType} <strong>Weight: </strong> {petFeesData.weight}lb <strong>Pet Fee: </strong> ${petFeesData.petFee}</p>
                          <p><strong>Security Deposit: </strong> ${petFeesData.securityFee} <strong>Monthly Rent: </strong> ${petFeesData.monthlyRent}</p>
                        </div>
                      )}

                      {hasLeasing && (
                        <div className="border-t border-gray-300 p-2">
                          <p><strong>Manager: </strong> {leasingData.leasingManager} <strong>Phone: </strong> {leasingData.managerPhone} <strong>Email: </strong> {leasingData.managerEmail}</p>
                        </div>
                      )}
                      
                      {hasCharges && (
                        <div className="border-t border-gray-300 p-2">
                          <p><strong> Application Fee: </strong> {chargesData.applicationFee} <strong>Type: </strong> {chargesData.applicantType} <strong>Admin Fee: </strong>{chargesData.adminFee}</p>
                        </div>
                      )}

                      {hasParking && (
                        <div className="border-t border-gray-300 p-2">
                          <p><strong>Parking Time: </strong> {parkingData.parkingTime} <strong>Parking overview: </strong> {parkingData.overview}</p>
                        </div>
                      )}

                      {hasRentFrequency && (
                        <div className="border-t border-gray-300 p-2">
                          <p><strong>Rent payment frequency: </strong> {rentFrequencyData.paymentMonth} <strong>Rent reminder: </strong> {rentFrequencyData.rentReminder}</p>
                          <p><strong>Due date:</strong> {rentFrequencyData.rentDue}</p>
                        </div>
                      )}

                      {hasAboutProperty && (
                        <p className="border-t border-gray-300 p-2">{aboutPropertyData.message}</p>
                      )}
                       
                  </div>

                  <button className="flex justify-center items-center cursor-pointer gap-1"
                    onClick={() => {
                      if (field.label === "Property address") {
                        onOpenPropertyModal();
                      } else if (field.label === "Pet fees") {
                        onOpenPetFeesModal();
                      } else if (field.label === "Leasing info") {
                        onOpenLeasingModal();
                      } else if (field.label === "Charges") {
                        onOpenChargesModal();
                      } else if (field.label === "Parking") {
                        onOpenParkingModal();
                      } else if (field.label === "Rent frequency & payment reminder") {
                        onOpenRentFrequencyModal();
                      } else if (field.label === "About the property") {
                        onOpenAboutPropertyModal();
                      }
                    }}
                  >
                    {hasProperty || hasPetFees || hasLeasing || hasCharges || hasParking || hasRentFrequency || hasAboutProperty ? (
                        <>
                          <BiSolidEdit className="text-base" />
                          <span>Edit</span>
                        </>
                      ) : (
                        <>
                          <BiPlus className="text-base" />
                          <span className="underline">Add</span>
                        </>
                      )}
                  </button>
            </div>
          )
            
          } )
        }
      </div>
  )
}

export default Form