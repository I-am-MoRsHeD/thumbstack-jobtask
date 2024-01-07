import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion"


const Navbar = () => {
    const [selectedTab, setSelectedTab] = useState('Home');

    const navlinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/skills'>Skills</Link></li>
        <li><Link to='/contact'>Contact Me</Link></li>
    </>
    return (
        <div className='max-w-5xl mx-auto'>
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
                className="navbar">
                {/* dropdown */}
                <div className="navbar-start lg:hidden">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box font-mono w-52">
                            {navlinks}
                            <Link title='LinkedIn' className='ml-4 text-lg mt-1' target='blank' to='https://github.com/I-am-MoRsHeD'><FaGithub /></Link>
                            <Link className='text-blue-600 ml-4 text-lg mt-2' title='LinkedIn' target='blank' to='https://www.linkedin.com/in/md-morshed-b634692a3/'><FaLinkedin /></Link>
                        </ul>
                    </div>
                </div>
                <div className="navbar-start hidden lg:flex">
                    <ul className='menu menu-horizontal text-lg font-mono px-1'>
                        <li
                            onClick={() => setSelectedTab('Home')}><Link className={selectedTab === 'Home' ? `underline` : ''} to='/'>Home</Link></li>
                        <li
                            onClick={() => setSelectedTab('Skills')}><Link className={selectedTab === 'Skills' ? `underline` : ''} to='/skills'>Skills</Link></li>
                        <li
                            onClick={() => setSelectedTab('Contact')}><Link className={selectedTab === 'Contact' ? `underline` : ''} to='/contact'>Contact Me</Link></li>
                    </ul>
                </div>
                <div className="navbar-center style text-xl ml-28">
                    <Link to='/'><img className='w-52 rounded-full bg-gradient-to-l from-[#F6F7E9] via-cyan-200' src="https://i.ibb.co/QncM1jG/logo-2.png" alt="" /></Link>
                </div>
                <div className="navbar-end hidden lg:flex flex-row space-x-4 text-xl">
                    <Link title='LinkedIn' className='text-2xl' target='blank' to='https://github.com/I-am-MoRsHeD'><FaGithub /></Link>
                    <Link className='text-blue-600 text-2xl' title='LinkedIn' target='blank' to='https://www.linkedin.com/in/md-morshed-b634692a3/'><FaLinkedin /></Link>
                </div>
            </motion.div>
        </div>
    );
};

export default Navbar;