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
            <div className='flex  justify-start align-center'>
                <img className='h-14 w-14 rounded-full mr-3' src={img} alt="" />
                <div className=''>
                    <h3 className='text-lg font-bold mb-0'>Humayon Forid</h3>
                    <p>Web developer</p>
                </div>
            </div>
            <div className='flex justify-between align-center my-3 bg-red-100 p-5 rounded'>
                <div>
                    <span className='font-bold text-lg'>55</span><span>kg</span>
                    <p>Weight</p>
                </div>
                <div>
                <span className='font-bold text-lg'>5.5</span>
                    <p>Weight</p>
                </div>
                <div>
                <span className='font-bold text-lg'>21</span><span>yrs</span>
                    <p>Age</p>
                </div>
            </div>
            <div>
                <h3 className='text-lg font-bold my-4'>Add A Break</h3>
                <ul className='flex justify-between px-4'>
                    <li className='bg-purple-50 p-3 rounded-full'><span onClick={() => breackHandler(15)}>15</span>s</li>
                    <li className='bg-purple-50 p-3 rounded-full'><span onClick={() => breackHandler(25)} className='option'>25</span>s</li>
                    <li className='bg-purple-50 p-3 rounded-full'><span onClick={() => breackHandler(35)} className='option'>35</span>s</li>
                    <li className='bg-purple-50 p-3 rounded-full'><span onClick={() => breackHandler(10)} className='option'>10</span>s</li>
                </ul>
            </div>
            <div>
                <h3 className='text-lg font-bold my-4'>Exercize details</h3>
                <p className='bg-red-100 py-3 px-1 rounded my-2'><strong>Exercize time: <span></span>{time} seconds</strong></p>
                <p className='bg-red-100 py-3 px-1 rounded'><strong>Break time: {seconds} seconds</strong></p>
            </div>
            <div className='text-center'>
                <button className='bg-primary text-white text-center font-bold text-lg py-4 px-8 rounded my-8' onClick={toastHandler}>Activity completed</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Cart;