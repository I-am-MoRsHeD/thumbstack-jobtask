
import { motion } from "framer-motion"

const Skills = () => {
    return (
        <div className='max-w-5xl mx-auto my-10 px-2'>
            <motion.h1
                initial={{ opacity: 0.5, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
                className="lg:text-5xl text-3xl style text-center font-bold mb-10">From Nothing To Something</motion.h1>
            <div className="divider w-2/3 mx-auto"></div>
            {/* skills */}
            <div className='my-32'>
                <h2
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-4xl font-bold text-center style">My Skills</h2>
                <div className="divider w-1/3 mx-auto"></div>
                {/* skills bar */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className='grid grid-cols-3 lg:grid-cols-7 justify-center gap-16 items-center mt-20'>

                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">90%</div>
                        <span className='block ml-4 mb-1'>HTML5</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">80%</div>
                        <span className='block ml-4 mb-1'>CSS3</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">90%</div>
                        <span className='block ml-4 mb-1'>Tailwind</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">80%</div>
                        <span className='block ml-1 mb-1'>Bootstrap</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">80%</div>
                        <span className='block ml-1 mb-1'>JavaScript</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">85%</div>
                        <span className='block ml-4 mb-1'>React JS</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">90%</div>
                        <span className='block ml-4 mb-1'>Firebase</span>
                    </div>


                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className='grid lg:grid-cols-7 grid-cols-3 mt-10 justify-center gap-16 items-center'>

                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">70%</div>
                        <span className='block ml-4 mb-1'>Node JS</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">80%</div>
                        <span className='block mb-1'>Express JS</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">85%</div>
                        <span className='block mb-1'>Mongo DB</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">80%</div>
                        <span className='block ml-4 mb-1'>Axios</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">75%</div>
                        <span className='block ml-4 mb-1'>Stripe</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">75%</div>
                        <span className='block text-center mb-1'>Tanstack Query</span>
                    </div>
                    <div>
                        <div className="radial-progress" style={{ "--value": 80 }} role="progressbar">80%</div>
                        <span className='block ml-4 mb-1'>JWT</span>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Skills;