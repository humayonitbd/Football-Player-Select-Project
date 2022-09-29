import colorNames from 'daisyui/src/colors/colorNames';
import React, { useEffect, useState } from 'react';
import './Cart.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import profileImg from './image/humayonitbd2.png'
import img from './image/humayonitbd.jpg'

const Cart = ({cart}) => {
    
    // console.log(cart)

    const [seconds, setSeconds] = useState([]);
   
    const breackHandler = (data) =>{
        localStorage.setItem('seconds', JSON.stringify(data))
        setSeconds(data);
    }
   
    useEffect(()=>{
        const getData = JSON.parse(localStorage.getItem('seconds'));
        let arr = [];
        if(getData){
            arr.push(getData);
        }
        setSeconds(arr);
        
    },[])
    
    
    let time = 0;
    for(const info of cart){
        time = time + info.time;

    }

    const toastHandler = () =>{
        toast.success("Activity Complited!!!", {
            position:"top-center"
        });
    }
    // console.log(time);

    return (
        <div>
            <div className="my-details">
            <div className='flex  justify-start align-center profileSec'>
                <img className='h-14 w-14 rounded-full mr-3' src={img} alt="" />
                <div className=''>
                    <h3 className='text-lg font-bold mb-0'>Humayon Forid</h3>
                    <p>Web developer</p>
                </div>
            </div>
            <div className='my-skill-sec mt-3'>
            <h3 className='text-lg font-bold lg:my-3 bg-primary text-white py-1 px-2 rounded mySkill'>My skill</h3>
                <div className='flex justify-between align-center detailsSec my-3 bg-red-100 p-5 rounded'>
                    <div className='text-center'>
                        <span className='font-bold text-lg'>90</span><span>%</span>
                        <p>HTML</p>
                    </div>
                    <div className='text-center'>
                    <span className='font-bold text-lg'>85</span><span>%</span>
                        <p>CSS</p>
                    </div>
                    <div className='text-center'>
                    <span className='font-bold text-lg'>70</span><span>%</span>
                        <p>JAVA SCRIPT</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='mt-5'>
                <h3 className='text-lg font-bold my-2 bg-primary text-white py-1 px-2 rounded'>Add A Break</h3>
                <ul className='flex justify-between px-4'>
                    <li className='bg-purple-50 p-3 rounded-full'><span onClick={() => breackHandler(15)}>15</span>s</li>
                    <li className='bg-purple-50 p-3 rounded-full'><span onClick={() => breackHandler(25)} className='option'>25</span>s</li>
                    <li className='bg-purple-50 p-3 rounded-full'><span onClick={() => breackHandler(35)} className='option'>35</span>s</li>
                    <li className='bg-purple-50 p-3 rounded-full'><span onClick={() => breackHandler(10)} className='option'>10</span>s</li>
                </ul>
            </div>
            <div className='mt-8'>
                <h3 className='text-lg font-bold my-2 bg-primary text-white py-1 px-2 rounded'>Exercize details</h3>
                <p className='bg-red-100 py-3 px-1 rounded my-2'><strong>Exercize time: <span></span>{time} <span className='text-slate-400'>seconds</span></strong></p>
                <p className='bg-red-100 py-3 px-1 rounded'><strong>Break time: {seconds} <span className='text-slate-400'>seconds</span></strong></p>
            </div>
            <div className='text-center'>
                <button className='bg-primary text-white text-center font-bold text-lg py-4 px-8 rounded my-8' onClick={toastHandler}>Activity completed</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Cart;