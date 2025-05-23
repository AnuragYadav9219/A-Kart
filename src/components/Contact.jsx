import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-[90vh] bg-gray-50 py-12 px-4 sm:px-8 lg:px-20 text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Get in Touch</h1>
        <p className="text-center text-gray-600 mb-10">
          We'd love to hear from you! Whether you have a question about your order, our services, or anything else—our team is ready to help.
        </p>

        <form className="grid gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              placeholder="E.g. Order Inquiry"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 text-sm text-gray-600 text-center">
          📧 You can also email us directly at <strong>A-KartSupport@gmail.com</strong>
        </div>
      </div>
    </div>
  );
};

export default Contact;
