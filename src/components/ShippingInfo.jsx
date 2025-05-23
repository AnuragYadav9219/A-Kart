import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const ShippingInfo = ({ onNext }) => {
  const [form, setForm] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    phone: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, address, city, postalCode, country, phone } = form;

    if (!fullName || !address || !city || !postalCode || !country || !phone) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    onNext && onNext(form);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: 'Full Name', name: 'fullName', type: 'text' },
          { label: 'Address', name: 'address', type: 'text' },
          { label: 'City', name: 'city', type: 'text' },
          { label: 'Postal Code', name: 'postalCode', type: 'text' },
          { label: 'Country', name: 'country', type: 'text' },
          { label: 'Phone Number', name: 'phone', type: 'tel' }
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block text-sm font-medium mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        ))}

        <NavLink to='/payment'>
          <button
            type="submit"
            onClick={() => {alert("Information Saved")}}
            className="w-full bg-blue-600 cursor-pointer text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Payment Methods
          </button>
        </NavLink>
      </form>
    </div>
  );
};

export default ShippingInfo;
