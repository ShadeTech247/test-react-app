import { useState } from "react";
function MultiStepForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
    
    const updateField = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };
    
    return (
        <div className="p-6 border rounded-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">Registration (Step {step}/3)</h2>
            
            {step === 1 && (
                <div>
                    <label className="block mb-2">Name:</label>
                    <input 
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="border-2 border-gray-300 rounded px-4 py-2 w-full mb-4"
                    />
                    <button 
                        onClick={nextStep}
                        disabled={!formData.name}
                        className="bg-blue-500 text-white px-6 py-2 rounded w-full disabled:bg-gray-300"
                    >
                        Next
                    </button>
                </div>
            )}
            
            {step === 2 && (
                <div>
                    <label className="block mb-2">Email:</label>
                    <input 
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="border-2 border-gray-300 rounded px-4 py-2 w-full mb-4"
                    />
                    <div className="flex gap-2">
                        <button 
                            onClick={prevStep}
                            className="bg-gray-500 text-white px-6 py-2 rounded flex-1"
                        >
                            Back
                        </button>
                        <button 
                            onClick={nextStep}
                            disabled={!formData.email}
                            className="bg-blue-500 text-white px-6 py-2 rounded flex-1 disabled:bg-gray-300"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
            
            {step === 3 && (
                <div>
                    <label className="block mb-2">Phone:</label>
                    <input 
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className="border-2 border-gray-300 rounded px-4 py-2 w-full mb-4"
                    />
                    <div className="flex gap-2">
                        <button 
                            onClick={prevStep}
                            className="bg-gray-500 text-white px-6 py-2 rounded flex-1"
                        >
                            Back
                        </button>
                        <button 
                            onClick={() => alert(JSON.stringify(formData, null, 2))}
                            disabled={!formData.phone}
                            className="bg-green-500 text-white px-6 py-2 rounded flex-1 disabled:bg-gray-300"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MultiStepForm