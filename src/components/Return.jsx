import React from 'react';

const Return = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Returns & Exchanges</h2>
      <p className="mb-4">
        We want you to love your purchase. If you're not completely satisfied, you can return the item within <strong>14 days</strong> of delivery.
      </p>

      <h3 className="text-lg font-semibold mb-2">Return Eligibility</h3>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Items must be unused and in original packaging</li>
        <li>Return must be initiated within 30 days</li>
        <li>Some items (e.g., final sale, perishable goods) are non-returnable</li>
      </ul>

      <h3 className="text-lg font-semibold mb-2">How to Return</h3>
      <ol className="list-decimal list-inside mb-4 text-gray-700">
        <li>Log in to your account and go to the 'Orders' section</li>
        <li>Click 'Request Return' on the item you'd like to return</li>
        <li>Print the return label and drop the item at your nearest courier service</li>
      </ol>

      <p className="text-sm text-gray-600">
        For any questions, contact our support at <a href="mailto:support@example.com" className="text-blue-500">A-KartSupport@gmail.com</a>.
      </p>
    </div>
  );
};

export default Return;
