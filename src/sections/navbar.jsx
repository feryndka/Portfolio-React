import { useState } from 'react';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);

    const handleIconClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <nav>
            <div className="logo">FA</div>
            
            <ul className={!isVisible ? '' : 'visible'}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#tools">Tools</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className='iconDensity' onClick={handleIconClick}>
                {isVisible ? (<DensityMediumIcon />) : (<CloseIcon />)}
            </div>
        </nav>
    )
}