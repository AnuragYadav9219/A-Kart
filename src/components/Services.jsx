import React from 'react';
import { motion } from 'framer-motion';

function Services() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: "easeInOut" },
    };

    return (
        <motion.div
            className="flex flex-col font-bold w-full px-5 md:px-10 lg:px-20 py-10 md:py-14"
            initial="initial"
            animate="animate"
            variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
        >
            <motion.div
                className='flex flex-col items-center mb-15 justify-center w-full'
                variants={fadeIn}
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-4 text-center w-full"
                    variants={fadeIn}
                >
                    🛍️ Our Services
                </motion.h1>
                <motion.p
                    className="text-md md:text-lg text-gray-500 max-w-2xl text-center mt-5 md:mt-10 items-center w-full"
                    variants={fadeIn}
                >
                    At <span className="font-bold text-blue-500">A-Kart</span>, we are dedicated to offering more than just products — we provide experiences designed to make your shopping smooth, enjoyable, and reliable. Here's what we offer:
                </motion.p>
            </motion.div>

            <motion.div className="flex mt-5 md:mt-8 mb-15 justify-start" variants={fadeIn}>
                <div className="max-w-2xl">
                    <h1 className="text-2xl md:text-3xl font-bold w-full">
                        🚚 Fast & Reliable Delivery
                    </h1>
                    <p className="text-md md:text-lg text-gray-500 mt-4 md:mt-7 w-full">
                        We understand the excitement of getting your purchases quickly!
                        That's why we ensure fast, safe, and timely delivery right to your doorstep, with real-time tracking and updates
                    </p>
                </div>
            </motion.div>

            <motion.div className="flex mt-5 md:mt-8 mb-15 justify-end" variants={fadeIn}>
                <div className="max-w-2xl">
                    <h1 className="text-2xl md:text-3xl font-bold w-full">
                        💬 24/7 Customer Support
                    </h1>
                    <p className="text-md md:text-lg text-gray-500 mt-4 md:mt-7 w-full">
                        Got a question or facing an issue?
                        Our friendly customer support team is available 24/7 to assist you via chat, email, or phone.
                        We believe in providing solutions — fast and hassle-free!
                    </p>
                </div>
            </motion.div>

            <motion.div className="flex mt-5 md:mt-8 mb-15 justify-start" variants={fadeIn}>
                <div className="max-w-2xl">
                    <h1 className="text-2xl md:text-3xl font-bold w-full">
                        🔄 Easy Returns & Refunds
                    </h1>
                    <p className="text-md md:text-lg text-gray-500 mt-4 md:mt-7 w-full">
                        Not satisfied with your purchase? No worries!
                        Enjoy easy returns within a specified period and quick refunds, because your satisfaction is our priority.
                    </p>
                </div>
            </motion.div>

            <motion.div className="flex mt-5 md:mt-8 mb-15 justify-end" variants={fadeIn}>
                <div className="max-w-2xl">
                    <h1 className="text-2xl md:text-3xl font-bold w-full">
                        🎁 Personalized Shopping Experience
                    </h1>
                    <p className="text-md md:text-lg text-gray-500 mt-4 md:mt-7 w-full">
                        We recommend products based on your preferences and past purchases, so you always find what you love.
                        Smart recommendations, curated just for you.
                    </p>
                </div>
            </motion.div>

            <motion.div className="flex mt-5 md:mt-8 mb-15 justify-start" variants={fadeIn}>
                <div className="max-w-2xl">
                    <h1 className="text-2xl md:text-3xl font-bold w-full">
                        🛡️ Secure Payments
                    </h1>
                    <p className="text-md md:text-lg text-gray-500 mt-4 md:mt-7 w-full">
                        Shop confidently with 100% secure payment options.
                        We support all major debit/credit cards, UPI, wallets, and COD (Cash on Delivery) where available.
                    </p>
                </div>
            </motion.div>

            <motion.div className="flex mt-5 md:mt-8 mb-15 justify-end" variants={fadeIn}>
                <div className="max-w-2xl">
                    <h1 className="text-2xl md:text-3xl font-bold w-full">
                        🎉 Exclusive Offers & Loyalty Rewards
                    </h1>
                    <p className="text-md md:text-lg text-gray-500 mt-4 md:mt-7 w-full">
                        Become a part of our family and enjoy special deals, discount coupons, and loyalty points with every purchase.
                        We love rewarding our loyal customers!
                    </p>
                </div>
            </motion.div>

            <motion.div
                className='flex flex-col items-center mb-15 mt-10 md:mt-20 justify-center w-full'
                variants={fadeIn}
            >
                <h1 className="text-4xl md:text-5xl font-bold text-center w-full">
                    ✨ Why Choose Us?
                </h1>
                <p
                    className="text-md md:text-lg text-gray-500 max-w-2xl mt-5 md:mt-10 items-center w-full"
                    variants={fadeIn}
                >
                    <ul className='list-disc list-inside'>
                        <li>Trusted by thousands of happy customers</li>
                        <li>Handpicked products with quality assurance</li>
                        <li>Seamless shopping experience from start to finish</li>
                    </ul>
                </p>
            </motion.div>

            <motion.div
                className='text-md md:text-lg text-gray-500 mt-10 md:mt-20 justify-center w-full'
                variants={fadeIn}
            >
                Join the <span className='text-blue-500'>A-Kart</span> community and experience shopping the way it’s meant to be — easy, enjoyable, and exciting!
            </motion.div>
        </motion.div>
    );
}

export default Services;