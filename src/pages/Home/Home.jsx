import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className='flex h-full justify-between items-center max-w-5xl mx-auto'>
                <div className='flex-1 ml-5'>
                    <h1 className='text-lg lg:text-3xl ml-1'>I am a </h1>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 50 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
                        className='lg:text-6xl text-4xl font-bold'>Frontend-Focused</motion.h1>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 60 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
                        className='lg:text-6xl text-4xl font-bold'>MERN Stack</motion.h1>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 70 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
                        className='lg:text-6xl text-4xl font-bold'>Developer</motion.h1>
                    <p className='mt-6 lg:text-lg text-sm font-mono'>Basically MERN Stack Developer works for building websites through javascript,react,tailwindCss and backend techs.Also capable of making user friendly websites and bosting users using ability and satisfaction</p>
                    <Link to='/portfolio'><button className='lg:text-2xl btn btn-accent mt-3 text-xl hover:underline font-semibold'>Portfolio</button></Link>
                </div>
                <div className='-mr-5'>
                    <img className='border-8 border-t-teal-400 border-b-teal-400 border-r-0 border-l-0 rounded-tl-full rounded-bl-full' src="https://i.ibb.co/Gx5MsyD/IMG-20231113-WA0024-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;