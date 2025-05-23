import images from '../components/image';
import { motion } from 'framer-motion';
import '../App.css';
import { Card4 } from './Card';

function Dashboard() {
    return (
        <div>
            <div className='relative w-full h-11/12 overflow-hidden py-10 md:px-10 lg:px-15 flex flex-col items-center justify-between '>

                {/* Desktop View */}
                <div>
                    <img
                        src={images.theme}
                        alt="Landing Page"
                        className="hidden md:block rounded-2xl w-screen border h-[550px] border-gray-400 object-cover transition duration-200 ease-in-out"
                    />
                </div>


                {/* Desktop Text Overlay */}
                <div className="absolute top-1/2 md:top-6/12 lg:top-1/2 right-1/2 left-2/12 text-left transform -translate-x-1/12 -translate-y-1/2 text-slate-800 text-5xl md:text-3xl lg:text-5xl font-bold mt-4 hidden md:block">
                    Welcome to
                    <span className='text-gray-400 fade-in'>&nbsp;A-Kart</span>
                    <p className="md:text-sm sm:text-sm text-2xl mt-4">
                        Your smart shopping destination. Discover top deals, fast delivery, and a seamless shopping experience.
                        From essentials to electronics, we’ve got it all. Shop smart. Live better.
                    </p>
                    <p className="text-sm md:text-lg mt-4">
                        Scroll down to explore our collections
                    </p>
                    <img src={images.down} alt="Scroll" className='w-8 h-8 md:w-10 md:h-10 mx-auto mt-4 rounded-full shadow-lg shadow-green-800 animate-bounce hover:scale-105 cursor-pointer' />
                </div>

                {/* Mobile View */}
                <div className="relative md:hidden w-full py-10 flex flex-col border-gray-200 border-2 rounded-2xl mb-12 items-center justify-center text-center space-y-4 bg-gray-200 shadow-2xl hover:scale-95 duration-700 hover:shadow-orange-300">


                    {/* Animated text */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-2xl font-bold text-slate-800"
                    >
                        Welcome to <span className="text-gray-400">A-Kart</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-sm px-4"
                    >
                        Your smart shopping destination. Top deals, fast delivery, and a seamless experience.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="text-xs text-gray-600"
                    >
                        Scroll down to explore our collections
                    </motion.p>

                    <motion.img
                        src={images.down}
                        alt="Scroll"
                        className='w-8 h-8 mt-2 animate-bounce cursor-pointer'
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    />
                </div>

            </div>
            <div className='lg:hidden'>
                <Card4 title="Featured Products" products={["Mobiles", "Electronics", "Beauty", "Cosmetics"]} />
            </div>
        </div>
    );
}

export default Dashboard;
