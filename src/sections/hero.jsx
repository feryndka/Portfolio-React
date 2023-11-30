import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img from '../assets/icon.png'
import Particles from './particle'

export default function Hero() {
    return (
        <div className="hero" id='hero-section'>
            {/* Page 1 Start */}
            <div className="page1" id='home'>
                <Particles />
                <h1 className='text-[100px] font-semibold'>Fery Andika, <br />Fullstack Web <br />Developer</h1>
                <div className="line"></div>
                <div className='btnpg1 my-5'>
                    <a href="#about">
                        <Button variant="outlined" className="more">
                            Read More <ExpandMoreIcon sx={{ fontSize: 30 }}/>
                        </Button>
                    </a>
                    <a href="#contact">
                        <Button variant="outlined" className="contactMe">
                            Contact Me <TelegramIcon sx={{ fontSize: 30 }}/>
                        </Button>
                    </a>
                </div>
            </div>

            {/* <div className="page1 flex justify-center p-5 md:p-16 lg:p-28" id='home'>
                <Particles />
                <div className="flex flex-col text-center justify-center items-center max-w-7xl  text-white">
                    <div className="flex flex-col text-white mt-5">
                        <h1 className="text-[100px] font-semibold">Hello I'm Fery <span style={{color:'cyan'}}>Andika</span></h1>
                        <p className="text-[50px] mt-2 md:mt-4 tracking-wide">Fullstack Developer</p>
                    </div>
                    <div className="flex mt-10 space-x-5">
                        <a href="#about">
                            <button className="bg-white text-blue-600 px-6 py-2 hover:brightness-105 font-semibold">
                                Read More
                            </button>
                        </a>
                        <a href="#contact">
                            <button className="bg-blue-900 text-white border-2 border-white px-6 py-2 hover:brightness-105 font-semibold">
                                Contact Me <TelegramIcon /> 
                            </button>
                        </a>
                    </div>
                </div>
            </div> */}

            {/* Page 1 End */}
            <br id='about' />
            {/* Page 2 Start */}
            <div className='page2 grid grid-cols-2 gap-10'>
                <div className='page2-content font-bold mx-8 my-24'>
                    <div className="line2"></div>
                    A Passionate Web Developer.
                </div>
                <div className='paragraf'>
                    <p className='paragraf-content p-5 font-serif text-gray-400'>
                        A passionate IT student currently pursuing my degree. Technology has always fascinated me, and I find joy in exploring the vast world of Information Technology.
                    </p>
                    <p className='paragraf-content p-5 font-serif text-gray-400'>
                        I am currently enrolled in <span>Telkom University</span> where I am gaining a comprehensive understanding of various IT concepts,
                        programming languages, and the latest advancements in the field. From developing software applications to understanding 
                        network architectures, my academic journey is equipping me with the knowledge and skills needed to thrive in the dynamic 
                        IT industry.
                    </p>
                    <p className='paragraf-content p-5 font-serif text-gray-400'>
                        I am particularly interested in <span>web development</span>, and I am eager to contribute my skills to real-world projects. 
                        I believe in the power of technology to bring about positive change, and I am excited about the opportunities 
                        that lie ahead in the IT field.
                    </p>
                    <p className='paragraf-content p-5 font-serif text-gray-400'>
                        Feel free to connect with me if you share similar interests or if you'd like 
                        to discuss anything related to technology and IT. I'm always open to new ideas and collaborations!
                    </p>
                </div>
            </div>
            {/* Page 2 End */}

            {/* Page 3 Start */}
            <section className="text-gray-600 body-font" id='tools'>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-start w-full mb-10">
                        <h1 className="text-[90px] font-bold title-font mb-4 text-white tracking-widest underline underline-offset-[20px] decoration-[cyan]">Tools</h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white text-[25px]">React JS</h2>
                                    <h3 className="text-gray-200 mb-3">Library JavaScript</h3>
                                    <p className="mb-4 text-gray-400">A JavaScript library for building efficient and maintainable user interfaces.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white text-[25px]">JavaScript</h2>
                                    <h3 className="text-gray-200 mb-3">Programming Languange</h3>
                                    <p className="mb-4 text-gray-400">A commonly used programming language for web development.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/y9jbquchakdius6cs8ws"/>
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white text-[25px]">Tailwind</h2>
                                    <h3 className="text-gray-200 mb-3">Framework CSS</h3>
                                    <p className="mb-4 text-gray-400">A CSS framework that provides a large set of CSS utilities for building consistent and customizable web designs.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                <img alt="other-programming" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={img} />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white text-[25px]">Other</h2>
                                    <h3 className="text-gray-200 mb-3">Technology</h3>
                                    <p className="mb-4 text-gray-400">Other Technology like Go, C++, GitHub, Html, Css, NodeJs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Page 3 End */}
            <br id='contact'/>
            {/* Page 4 Start  */}
            <div className='page4'>
                <div className='card max-w-md w-4/5 mx-auto p-6 rounded-lg shadow-md'>
                    <h2 className='text-3xl text-center font-bold mb-6 underline underline-offset-8'>Contact Me</h2>
                    <form action="" method=''>
                        <div className='mb-4'>
                            <label className='block text-white text--sm font-semibold mb-2' htmlFor="">Your Name</label>
                            <input placeholder='Name' className='w-full px-3 py-2 border rounded-lg focus:outline-none' required type="text" name='Name' />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-white text--sm font-semibold mb-2' htmlFor="">Your Email</label>
                            <input placeholder='email@example.com' className='w-full px-3 py-2 border rounded-lg focus:outline-none' required type="email" name='Email' />
                        </div>
                        <div className='mb-4'>
                            <label className='block text-white text--sm font-semibold mb-2' htmlFor="">Your Messsage</label>
                            <textarea rows='4' placeholder='Type your message here...' className='w-full px-3 py-2 border rounded-lg focus:outline-none' required type="text" name='Message' />
                        </div>
                        <div className='flex justify-center'>
                            <button type='submit' className='text-white font-semibold px-4 py-2 rounded-lg focus:outline-white'>
                                Send Message <TelegramIcon />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Page 4 End  */}

            <a href="#home">
                <div className='scroll-bar'>
                    <ArrowCircleUpIcon sx={{ fontSize: 45 }} />
                </div>
            </a>

            {/* Footer */}
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 mr-5">
                        <div className="logo">FA</div>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 — Fery Andika</p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="ml-3 text-gray-500" href='https://github.com/feryndka'>
                            <GitHubIcon />
                        </a>
                        <a className="ml-3 text-gray-500" href='https://www.instagram.com/feryndka'>
                            <InstagramIcon />
                        </a>
                        <a className="ml-3 text-gray-500" href='https://www.linkedin.com/in/feryandika'>
                            <LinkedInIcon />
                        </a>
                        <a className="ml-3 text-gray-500" href='mailto:feryandika151@gmail.com'>
                            <EmailIcon />
                        </a>
                    </span>
                </div>
            </footer>
            {/* Footer End */}
        </div>
    )
}