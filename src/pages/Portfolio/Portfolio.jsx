import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const Portfolio = () => {
    return (
        <div className='max-w-5xl mx-auto text-center px-3 my-10'>
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
                className="text-4xl lg:text-5xl font-bold">From Thoughts</motion.h1>
            <motion.h1
                initial={{ opacity: 0.5, y: 70 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
                className="text-4xl lg:text-5xl font-bold mb-10 mt-2">To Display</motion.h1>
            {/* cooking god project */}
            <div data-aos="fade-up"
                data-aos-duration="2000" className="card flex flex-col lg:flex-row card-side p-10 bg-base-100 shadow-xl hover:shadow-slate-400">
                <div className='lg:w-9/12 w-full'>
                    <motion.figure
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 50, damping: 5 }}
                    ><img className='w-full' src="https://i.ibb.co/47CD26q/Screenshot-66.png" alt="Movie" /></motion.figure>
                </div>
                <div className="card-body lg:w-96 w-full ml-0 lg:ml-5">
                    <h2 className="card-title text-3xl font-bold style">Cooking God</h2>
                    <p className='text-justify'>This websites offers three types of user - Normal Users,Premium Users and Admins.This is a meal distribution site where a normal user can just see the details and review,premium users have permission to Meal request and others and admin will handle the site and user activity.</p>
                    <div className="card-actions items-center justify-start mt-3">
                        <Link to='https://hostel-management-client12.web.app/' target="blank" className='btn btn-outline'>Live Link</Link>
                        <Link to='https://github.com/I-am-MoRsHeD/hostel-management-client12.git' target="blank" className='text-3xl ml-3'><FaGithub /></Link>
                    </div>
                </div>
            </div>
            {/* divider */}
            <div className="divider mt-10"></div>
            {/* Jobs World project */}
            <div data-aos="fade-up"
                data-aos-duration="2000" className="card flex flex-col lg:flex-row mt-10 card-side p-10 bg-base-100 shadow-xl hover:shadow-slate-400">
                <div className='lg:w-9/12 w-full'>
                    <motion.figure
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 50, damping: 5 }}
                    ><img className='w-full' src="https://i.ibb.co/nBCSGmW/Screenshot-67.png" alt="Movie" /></motion.figure>
                </div>
                <div className="card-body lg:w-96 w-full ml-0 lg:ml-5">
                    <h2 className="card-title text-3xl font-bold style">Jobs World</h2>
                    <p className='text-justify'>This website indicates about job hunting and posting thoughts.There anyone can post a job or jobs and the same person can apply for the job.But no one can apply for the job that he/she added.</p>
                    <div className="card-actions items-center justify-start mt-3">
                        <Link to='https://wondrous-trifle-3074aa.netlify.app/' target="blank" className='btn btn-outline'>Live Link</Link>
                        <Link to='https://github.com/I-am-MoRsHeD/jobs-world-client-am11.git' target="blank" className='text-3xl ml-3'><FaGithub /></Link>
                    </div>
                </div>
            </div>
            {/* divider */}
            <div className="divider mt-10"></div>
            {/* Tech brand project */}
            <div data-aos="fade-up"
                data-aos-duration="2000" className="card flex flex-col lg:flex-row mt-10 card-side p-10 bg-base-100 shadow-xl hover:shadow-slate-400">
                <div className='lg:w-9/12 w-full'>
                    <motion.figure
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 50, damping: 5 }}
                    ><img className='w-full' src="https://i.ibb.co/47sh7yz/Screenshot-68.png" alt="Movie" /></motion.figure>
                </div>
                <div className="card-body lg:w-96 w-full ml-0 lg:ml-5">
                    <h2 className="card-title text-3xl font-bold style">Tech Brand</h2>
                    <p className='text-justify'>On this site,one can add product and can update product details.One can cart product in easy way.But if the user is not logged in,he/she cannot do anything.</p>
                    <div className="card-actions items-center justify-start mt-3">
                        <Link to='https://tech-brand.web.app/' target="blank" className='btn btn-outline'>Live Link</Link>
                        <Link to='https://github.com/I-am-MoRsHeD/Tech-brand-client10.git' target="blank" className='text-3xl ml-3'><FaGithub /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;