import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();

    const handleCheckbox = (e) => {
        setAccepted(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (accepted) {
            localStorage.setItem('privacyAccepted', 'true');
            navigate('/signup');
        }
    };

    return (
        <div className='h-[89vh] flex justify-center items-center px-2'>
            <div className="w-10/12 sm:w-4/6 md:w-3/6 lg:w-2/6 xl:w-1/3 h-auto max-h-[90vh] border-2 border-gray-300 rounded-lg shadow-orange-300 pb-4 px-5 overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out bg-white">

                <h1 className="text-xl font-bold text-center mt-4 mb-3">Privacy Policy</h1>

                <div className="border p-3 rounded-lg h-60 overflow-y-auto bg-gray-50 text-sm leading-relaxed text-gray-700 shadow-inner">
                    <p>
                        A-Kart (“we,” “us,” or “our”) values your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information.
                    </p>
                    <p className="mt-2">
                        <strong>1. Information We Collect:</strong> We collect personal details (name, contact, address, payment info) and technical data (IP, device info) to deliver services efficiently.
                    </p>
                    <p className="mt-2">
                        <strong>2. Use of Data:</strong> Your data helps us process orders, provide customer support, and improve your shopping experience.
                    </p>
                    <p className="mt-2">
                        <strong>3. Third-Party Sharing:</strong> We only share information with trusted partners like payment processors and logistics services.
                    </p>
                    <p className="mt-2">
                        <strong>4. Data Security:</strong> We use industry-standard measures to protect your data, but no system is 100% secure.
                    </p>
                    <p className="mt-2">
                        <strong>5. Your Rights:</strong> You may request access to, correction, or deletion of your personal data at any time.
                    </p>
                    <p className="mt-2">
                        <strong>6. Cookies:</strong> We use cookies to enhance functionality and analyze user behavior. You may adjust settings via your browser.
                    </p>
                    <p className="mt-2">
                        <strong>7. Policy Changes:</strong> We may update this policy. Continued use of our platform implies consent to the latest version.
                    </p>
                    <p className="mt-2">
                        Contact us at <strong>privacy@a-kart.com</strong> for any questions or data concerns.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-4">
                    <label className="flex items-start space-x-2 text-xs text-gray-700">
                        <input
                            type="checkbox"
                            className="mt-1"
                            checked={accepted}
                            onChange={handleCheckbox}
                            required
                        />
                        <span>
                            I have read and agree to the <strong>Privacy Policy</strong>.
                        </span>
                    </label>

                    <button
                        type="submit"
                        disabled={!accepted}
                        className={`w-full h-10 mt-4 rounded-3xl border-2 ${accepted
                                ? 'bg-blue-500 text-white cursor-pointer hover:bg-blue-600'
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        Accept and Continue
                    </button>


                </form>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
