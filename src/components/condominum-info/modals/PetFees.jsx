import React, { useState } from 'react';

const PetFees = ({ onClose, onSubmit }) => {
    const [form, setForm] = useState({
        petType: "",
        weight: "",
        petFee: "",
        securityFee: "",
        monthlyRent: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!form.petType || form.petType === "Select") {
            newErrors.petType = "Please select a pet type";
        }
        if (!form.weight) {
            newErrors.weight = "Weight is required";
        }
        if (!form.petFee) {
            newErrors.petFee = "Pet fee is required";
        }
        if (!form.securityFee) {
            newErrors.securityFee = "Security fee is required";
        }
        if (!form.monthlyRent) {
            newErrors.monthlyRent = "Monthly rent is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            onSubmit(form);
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-4xl">
                {/* Header */}
                <div className="flex justify-between items-center p-3 border-b border-gray-300 bg-gray-100 rounded-t-xl">
                    <h2 className="text-lg font-semibold">Pet Fees</h2>
                    <button 
                        onClick={onClose} 
                        className="text-gray-500 text-lg cursor-pointer hover:text-black"
                    >
                        ✕
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-4">
                    {/* First Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col">
                            <label className="block text-sm font-medium mb-1">
                                Pet type <span className="text-red-500">*</span>
                            </label>
                            <select 
                                name="petType" 
                                value={form.petType}
                                onChange={handleChange}
                                className={`p-3 border rounded-lg cursor-pointer focus:outline-none ${
                                    errors.petType ? 'border-red-500' : 'border-gray-300'
                                }`}
                            >
                                <option value="">Select pet type</option>
                                <option value="Dog">Dog</option>
                                <option value="Cat">Cat</option>
                                <option value="Bird">Bird</option>
                                <option value="Fish">Fish</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.petType && (
                                <span className="text-red-500 text-sm mt-1">{errors.petType}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label className="block text-sm font-medium mb-1">
                                Max weight (lb) <span className="text-red-500">*</span>
                            </label>
                            <input 
                                name="weight" 
                                type="number" 
                                value={form.weight}
                                onChange={handleChange} 
                                placeholder="e.g. 50" 
                                className={`p-3 border rounded-lg focus:outline-none ${
                                    errors.weight ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            {errors.weight && (
                                <span className="text-red-500 text-sm mt-1">{errors.weight}</span>
                            )}
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex flex-col">
                            <label className="block text-sm font-medium mb-1">
                                One time pet fee ($) <span className="text-red-500">*</span>
                            </label>
                            <input 
                                name="petFee" 
                                type="number" 
                                value={form.petFee}
                                onChange={handleChange}
                                placeholder="e.g. 100" 
                                className={`p-3 border rounded-lg focus:outline-none ${
                                    errors.petFee ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            {errors.petFee && (
                                <span className="text-red-500 text-sm mt-1">{errors.petFee}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label className="block text-sm font-medium mb-1">
                                Pet security deposit ($) <span className="text-red-500">*</span>
                            </label>
                            <input 
                                name="securityFee" 
                                type="number" 
                                value={form.securityFee}
                                onChange={handleChange} 
                                placeholder="e.g. 200" 
                                className={`p-3 border rounded-lg focus:outline-none ${
                                    errors.securityFee ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            {errors.securityFee && (
                                <span className="text-red-500 text-sm mt-1">{errors.securityFee}</span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label className="block text-sm font-medium mb-1">
                                Monthly pet rent ($) <span className="text-red-500">*</span>
                            </label>
                            <input 
                                name="monthlyRent" 
                                type="number" 
                                value={form.monthlyRent}
                                onChange={handleChange} 
                                placeholder="e.g. 25" 
                                className={`p-3 border rounded-lg focus:outline-none ${
                                    errors.monthlyRent ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            {errors.monthlyRent && (
                                <span className="text-red-500 text-sm mt-1">{errors.monthlyRent}</span>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-gray-300 flex items-center justify-between">
                        <p className="text-sm font-semibold text-gray-800">
                            ❕ Type 0 if pet fees not applicable
                        </p>
                        <button 
                            type="submit" 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-colors duration-200"
                        >
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PetFees;