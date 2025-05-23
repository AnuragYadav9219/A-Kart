import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-12 text-gray-800">
  <div className="max-w-6xl mx-auto text-center">
    <h1 className="text-4xl font-bold mb-6">A-Kart: Your Everyday Shopping Companion</h1>
    <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
      Since our launch, we’ve been committed to quality, speed, and affordability. Whether you're buying groceries or gadgets, A-Kart ensures a seamless journey from click to doorstep.
    </p>

    <div className="grid sm:grid-cols-3 gap-8 text-center">
      <div>
        <h2 className="text-3xl font-bold text-blue-600">1M+</h2>
        <p className="text-sm text-gray-500">Products Sold</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-blue-600">500K+</h2>
        <p className="text-sm text-gray-500">Happy Customers</p>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-blue-600">99.5%</h2>
        <p className="text-sm text-gray-500">On-Time Delivery</p>
      </div>
    </div>

    <p className="mt-10 text-sm text-gray-600">
      For partnerships or queries, contact us at <strong>A-KartSupport@gmail.com</strong>
    </p>
  </div>
</div>

  );
};

export default About;
