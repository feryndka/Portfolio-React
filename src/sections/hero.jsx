import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import TelegramIcon from '@mui/icons-material/Telegram';
import img from '../assets/icon.png'

export default function Hero() {
    return (
        <div className="hero" id='hero-section'>
            {/* Page 1 Start */}
            <div className="page1" id='home'>
                <h1 className='text-[100px] font-semibold'>Fery <span style={{color:'cyan'}}>Andika</span>, <br />Fullstack Web <br />Developer</h1>
                <div className="line"></div>
                <div className='btnpg1 my-5'>
                    <a href="mailto:feryandika151@gmail.com">
                        <Button variant="outlined" startIcon={<EmailIcon />}>
                            Email
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/feryandika/">
                        <Button variant="outlined" startIcon={<LinkedInIcon />}>
                            LinkedIn
                        </Button>
                    </a>
                    <a href="https://github.com/feryndka">
                        <Button variant="outlined" startIcon={<GitHubIcon />}>
                            GitHub
                        </Button>
                    </a>
                </div>
            </div>
            {/* Page 1 End */}
            <br id='about' />
            {/* Page 2 Start */}
            <div className='page2 grid grid-cols-2 gap-10'>
                <div className='page2-content font-bold mx-8 my-24'>
                    <div className="line2"></div>
                    I love to researching and analyzing about technology.
                </div>
                <div className='paragraf'>
                    <p className='paragraf-content p-5 font-serif'>
                        A passionate IT student currently pursuing my degree. Technology has always fascinated me, and I find joy in exploring the vast world of Information Technology.
                    </p>
                    <p className='paragraf-content p-5 font-serif'>
                        I am currently enrolled in <span>Telkom University</span> where I am gaining a comprehensive understanding of various IT concepts,
                        programming languages, and the latest advancements in the field. From developing software applications to understanding 
                        network architectures, my academic journey is equipping me with the knowledge and skills needed to thrive in the dynamic 
                        IT industry.
                    </p>
                    <p className='paragraf-content p-5 font-serif'>
                        I am particularly interested in <span>web development</span>, and I am eager to contribute my skills to real-world projects. 
                        I believe in the power of technology to bring about positive change, and I am excited about the opportunities 
                        that lie ahead in the IT field.
                    </p>
                    <p className='paragraf-content p-5 font-serif'>
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
        </div>
    )
}