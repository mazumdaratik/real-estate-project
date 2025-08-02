import React, { useState } from "react";
import Form from "./Form";
import PhotoUpload from "./PhotoUpload";
import UploadVideos from "./UploadVideos";
import PropertyAddress from "./modals/PropertyAddress";
import LeasingInfo from "./modals/LeasingInfo";
import Charges from "./modals/Charges";
import PetFees from "./modals/PetFees";
import Parking from "./modals/Parking";
import RentFrequency from "./modals/RentFrequency";

const CondominiumForm = () => {
  const [propertyData, setPropertyData] = useState(null);
  const [leasingData, setLeasingData] = useState(null);
  const [chargesData, setChargesData] = useState(null);
  const [petFeesData, setPetFeesData] = useState(null);
  const [parkingData, setParkingData] = useState(null);
  const [rentFrequencyData, setRentFrequencyData] = useState(null)
 
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [showLeasingModal, setShowLeasingModal] = useState(false);
  const [showChargesModal, setShowChargesModal] = useState(false);
  const [showPetFeesModal, setShowPetFeesModal] = useState(false);
  const [showParkingModal, setShowParkingModal] = useState(false);
  const [showRentFrequencyModal, setShowRentFrequencyModal] = useState(false);

  const handleOpenPropertyModal = () => setShowPropertyModal(true);
  const handleClosePropertyModal = () => setShowPropertyModal(false);

  const handleOpenLeasingModal = () => setShowLeasingModal(true);
  const handleCloseLeasingModal = () => setShowLeasingModal(false);

  const handleOpenChargesModal = () => setShowChargesModal(true);
  const handleCloseChargesModal = () => setShowChargesModal(false);

  const handleOpenPetFeesModal = () => setShowPetFeesModal(true);
  const handleClosePetFeesModal = () => setShowPetFeesModal(false);

  const handleOpenParkingModal = () => setShowParkingModal(true);
  const handleCloseParkingModal = () => setShowParkingModal(false);

  const handleOpenRentFrequencyModal = () => setShowRentFrequencyModal(true);
  const handleCloseRentFrequencyModal = () => setShowRentFrequencyModal(false);



  const handleSubmitProperty = (data) => {
    setPropertyData(data);
    console.log("Submitted Property Data:", data);
    handleClosePropertyModal();
  };

  const handleSubmitLeasing = (data) => {
    console.log("Submitted Leasing Info:", data);
    setLeasingData(data);
    handleCloseLeasingModal();
  };

  const handleSubmitCharges = (data) => {
    console.log("Submitted Charges info:", data);
    setChargesData(data);
    handleCloseChargesModal();
  };

  const handleSubmitPetFees = (data) => {
    console.log("Submitted Pet Fees:", data);
    setPetFeesData(data);
    handleClosePetFeesModal();
  };

  const handleSubmitParking = (data) => {
    console.log("Parking data", data)
    setParkingData(data)
    handleCloseParkingModal();
  }

  const handleSubmitRentFrequency = (data) => {
    console.log("Frequency data", data)
    setRentFrequencyData(data)
    handleCloseRentFrequencyModal();
  }



  return (
    <div className="p-6 bg-white rounded-md shadow-sm">
      <h2 className="text-xl font-semibold px-5 mb-6">Condominiums Information</h2>
      <Form
        onOpenPropertyModal={handleOpenPropertyModal}
        onOpenLeasingModal={handleOpenLeasingModal}
        onOpenChargesModal={handleOpenChargesModal}
        onOpenPetFeesModal={handleOpenPetFeesModal}
        onOpenParkingModal={handleOpenParkingModal}
        onOpenRentFrequencyModal={handleOpenRentFrequencyModal}
        propertyData={propertyData}
        leasingData={leasingData}
        chargesData={chargesData}
        petFeesData={petFeesData}
        parkingData={parkingData}
        rentFrequencyData= {rentFrequencyData}

      />
      <PhotoUpload />
      <UploadVideos />

      {showPropertyModal && (
        <PropertyAddress
          onClose={handleClosePropertyModal}
          onSubmit={handleSubmitProperty}
        />
      )}

      {showLeasingModal && (
        <LeasingInfo
          onClose={handleCloseLeasingModal}
          onSubmit={handleSubmitLeasing}
        />
      )}

      {showChargesModal && (
        <Charges
          onClose={handleCloseChargesModal}
          onSubmit={handleSubmitCharges}
        />
      )}

      {showPetFeesModal && (
        <PetFees
          onClose={handleClosePetFeesModal}
          onSubmit={handleSubmitPetFees}
        />
      )}

      {showParkingModal && (
        <Parking 
        onClose={handleCloseParkingModal}
        onSubmit={handleSubmitParking}
        />
      )
      }

      {showRentFrequencyModal && (
        <RentFrequency 
        onClose={handleCloseRentFrequencyModal}
        onSubmit={handleSubmitRentFrequency}
        />
      )
      }
    </div>
  );
};

export default CondominiumForm;
