import { useState } from 'react';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    const [isDensityIconVisible, setDensityIconVisible] = useState(true);

    const handleIconClick = () => {
        setDensityIconVisible(!isDensityIconVisible);
    };

    return (
        <nav>
            <div className="logo">FA</div>
            
            <ul className={!isDensityIconVisible ? '' : 'visible'}>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#tools">Tools</a></li>
            </ul>

            <div className='iconDensity' onClick={handleIconClick}>
                {isDensityIconVisible ? (<DensityMediumIcon />) : (<CloseIcon />)}
            </div>
        </nav>
    )
}