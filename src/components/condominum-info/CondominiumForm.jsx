import React, { useState } from "react";
import Form from "./Form";
import PhotoUpload from "./PhotoUpload";
import UploadVideos from "./UploadVideos";
import PropertyAddress from "./modals/PropertyAddress";
import LeasingInfo from "./modals/LeasingInfo";
import Charges from "./modals/Charges";

const CondominiumForm = () => {
  const [propertyData, setPropertyData] = useState(null);
  const [leasingData, setLeasingData] = useState(null);
  const [chargesData, setChargesData] = useState(null);
 
  const [showPropertyModal, setShowPropertyModal] = useState(false);
  const [showLeasingModal, setShowLeasingModal] = useState(false);
  const [showChargesModal, setShowChargesModal] = useState(false);

  const handleOpenPropertyModal = () => setShowPropertyModal(true);
  const handleClosePropertyModal = () => setShowPropertyModal(false);

  const handleOpenLeasingModal = () => setShowLeasingModal(true);
  const handleCloseLeasingModal = () => setShowLeasingModal(false);

  const handleOpenChargesModal = () => setShowChargesModal(true);
  const handleCloseChargesModal = () => setShowChargesModal(false);

  const handleSubmitProperty = (data) => {
    setPropertyData(data)
    console.log(data);
    
    handleClosePropertyModal();
  };

  const handleSubmitLeasing = (data) => {
    console.log("Submitted Leasing Info:", data);
     setLeasingData(data)
    handleCloseLeasingModal();
  };

  const handleSubmitCharges = (data) => {
    console.log("Submitted Charges info:", data);
    setChargesData(data)
    handleCloseChargesModal();
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-sm">
      <h2 className="text-xl font-semibold px-5 mb-6">Condominiums Information</h2>
      <Form
        onOpenPropertyModal={handleOpenPropertyModal}
        onOpenLeasingModal={handleOpenLeasingModal}
        onOpenChargesModal={handleOpenChargesModal}
        propertyData={propertyData}
        leasingData={leasingData}
        chargesData={chargesData}
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
    </div>
  );
};

export default CondominiumForm;
