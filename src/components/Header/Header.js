import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Header.css';

const Header = ({logo}) => {
    const toastHandler = () =>{
        toast.success("Login Success!!!", {
            position:"top-center"
        });
    }
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
                <button className="btn bg-primary text-white" onClick={toastHandler}>login</button>
            </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Header;