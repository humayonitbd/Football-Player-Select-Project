import React from 'react';
import './Header.css';

const Header = ({logo}) => {
    return (
        <div className='bg-base-300'>
            <div className="navbar w-10/12 mx-auto ">
            <div className="flex-none">
                <img className='logoImage' src={logo} alt="" />
            </div>
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl" href='hello'>Bd-Football-club</a>
            </div>
            <div className="flex-none">
                <button className="btn btn-square btn-ghost">login</button>
            </div>
            </div>
            
        </div>
    );
};

export default Header;