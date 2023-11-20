import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Hero() {
    return (
        <div className="hero">
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
                            Github
                        </Button>
                    </a>
                </div>
            </div>
            {/* Page 1 End */}
            <hr id='about' />
            {/* Page 2 Start */}
            <div className='page2 grid grid-cols-2 gap-10'>
                <div className='font-bold mx-8 my-24'>
                    <div className="line2"></div>
                    I love to researching and analyzing about technology.
                </div>
                <div className='paragraf'>
                    <p className='p-5 pt-10 pr-20 font-serif'>
                        A passionate IT student currently pursuing my degree. Technology has always fascinated me, and I find joy in exploring the vast world of Information Technology.
                    </p>
                    <p className='p-5 pr-20 font-serif'>
                        I am currently enrolled in <span>Telkom University</span> where I am gaining a comprehensive understanding of various IT concepts,
                        programming languages, and the latest advancements in the field. From developing software applications to understanding 
                        network architectures, my academic journey is equipping me with the knowledge and skills needed to thrive in the dynamic 
                        IT industry.
                    </p>
                    <p className='p-5 pr-20 font-serif'>
                        I am particularly interested in <span>web development</span>, and I am eager to contribute my skills to real-world projects. 
                        I believe in the power of technology to bring about positive change, and I am excited about the opportunities 
                        that lie ahead in the IT field.
                    </p>
                    <p className='p-5 pr-20 font-serif'>
                        Feel free to connect with me if you share similar interests or if you'd like 
                        to discuss anything related to technology and IT. I'm always open to new ideas and collaborations!
                    </p>
                </div>
            </div>
            {/* Page 2 End */}
            <hr id='tools'/>
            {/* Page 3 Start */}
            <div className='page3 grid grid-cols-4 gap-4 grid-rows-6 pb-5'>
                <div className='header3 col-span-4 row-start-1 row-end-2 font-bold underline underline-offset-8 mt-10'>TOOLS</div>
                <div className='content col-start-1 row-start-3 row-end-5 ml-5'>
                    <div className='flex flex-row justify-center'>
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" style={{backgroundSize:'cover', height:'150px'}} />
                    </div>
                </div>
                <div className='content col-start-2 row-start-3 row-end-5 ml-0'>
                    <div className='flex flex-row justify-center '>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="" style={{backgroundSize:'cover', height:'120px', borderRadius:'20px', marginTop:'15px'}} />
                    </div>
                </div>
                <div className='content col-start-3 row-start-3 row-end-5 ml-0'>
                    <div className='flex flex-row justify-center align-center'>
                        <img src="https://i0.wp.com/www.ruhidesain.com/wp-content/uploads/2017/10/nodejs-logo-e1497443346889.png?fit=435%2C473&ssl=1" alt="" style={{backgroundSize:'cover', height:'120px', borderRadius:'20px', marginTop:'15px'}} />
                    </div>
                </div>
                <div className='content col-start-4 row-start-3 row-end-5 mr-5'>
                    <div className='flex flex-row justify-center'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png" alt="" style={{backgroundSize:'cover', height:'120px', marginTop:'15px'}} />
                    </div>
                </div>
                <div className='content col-start-1 row-start-5 row-end-7 ml-5'>
                    <div className='flex flex-row justify-center'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" alt="" style={{backgroundSize:'cover', height:'120px', borderRadius:'20px', marginTop:'15px'}} />
                    </div>
                </div>
                <div className='content col-start-2 row-start-5 row-end-7 ml-0'>
                    <div className='flex flex-row justify-center'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png" alt="" style={{backgroundSize:'cover', height:'120px', borderRadius:'20px', marginTop:'15px'}} />
                    </div>
                </div>
                <div className='content col-start-3 row-start-5 row-end-7 ml-0'>
                    <div className='flex flex-row justify-center'>
                        <img src="https://cdn-icons-png.flaticon.com/256/174/174854.png" alt="" style={{backgroundSize:'cover', height:'120px', marginTop:'15px'}} />
                    </div>
                </div>
                <div className='content col-start-4 row-start-5 row-end-7 mr-5'>
                    <div className='flex flex-row justify-center'>
                        <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" alt="" style={{backgroundSize:'cover', height:'120px', marginTop:'15px'}} />
                    </div>
                </div>
            </div>
            {/* Page 3 End */}
        </div>
    )
}