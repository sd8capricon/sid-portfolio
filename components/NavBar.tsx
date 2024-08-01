import React, { ComponentProps, FC, RefObject, useState } from 'react';
import NavLink from '../components/NavLink'

interface Props extends ComponentProps<'nav'> {
    innerRef: RefObject<HTMLElement>;
}


const NavBar: FC<Props> = (props) => {

    const [isActive, setIsActive] = useState(false);
    const toggleNav = () => setIsActive(!isActive);

    return (
        <nav ref={props.innerRef} id="nav" className='fixed shadow-xl top-0 z-50 bg-background w-full lg:flex justify-between px-6 lg:px-12 xl:px-24 py-5'>
            <div className="flex justify-between">
                <span className='text-lg md:text-xl font-bold'><a href="#">Siddharth Dhaigude</a></span>

                <button id="nav-btn" onClick={toggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                        className="w-6 h-6 lg:hidden" id="hamburger">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                        className="w-6 h-6 hidden lg:hidden" id="cross">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <ul className={"w-44 lg:w-auto lg:flex" + (isActive ? '' : ' hidden')} id="nav-links">
                <NavLink toggleNav={toggleNav} href='#'>Home</NavLink>
                <NavLink toggleNav={toggleNav} href='#about'>About</NavLink>
                <NavLink toggleNav={toggleNav} href='#resume'>Resume</NavLink>
                {/* <NavLink toggleNav={toggleNav} href='#projects'>Projects</NavLink> */}
                <NavLink toggleNav={toggleNav} href='#contact'>Contact</NavLink>
                <NavLink toggleNav={toggleNav} href='/assets/files/Siddharth Resume.pdf' download>Download Resume</NavLink>
            </ul>
        </nav>
    );
}

export default NavBar;