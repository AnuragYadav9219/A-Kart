import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-medium"
        onClick={() => setOpen(!open)}
      >
        {question}
        <span className="text-blue-500">{open ? '-' : '+'}</span>
      </button>
      {open && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQs = () => {
  const faqData = [
    {
      question: 'What is your return policy?',
      answer: 'You can return most items within 30 days of delivery. Check our Returns page for more info.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping usually takes 3-7 business days depending on your location.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship worldwide. International shipping charges may apply.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you’ll receive a tracking link via email or SMS.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept Visa, MasterCard, UPI, PayPal, and major credit/debit cards.'
    }
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <FAQItem key={index} {...faq} />
      ))}
    </div>
  );
};

export default FAQs;
