import React from "react";
import PhotoUpload from "./PhotoUpload";
import Form from "./Form";
import UploadVideos from "./UploadVideos";

const CondominiumForm = () => {

  return (
    <div className="p-6 bg-white rounded-md shadow-sm">
      <h2 className="text-xl font-semibold px-5 mb-6">Condominiums information</h2>
        <Form />
        <PhotoUpload/>
        <UploadVideos/>
    </div>
  );
};

export default CondominiumForm;
