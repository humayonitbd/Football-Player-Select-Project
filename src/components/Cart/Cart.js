import colorNames from 'daisyui/src/colors/colorNames';
import React, { useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    // console.log(cart)

    const [seconds, setSeconds] = useState([]);
    const breackHandler = (data) =>{
        // console.log('breck', data)
        localStorage.setItem('seconds', JSON.stringify(data))
        const getData = localStorage.getItem('seconds')
        let newArr = [];
        if(getData){
            const newArrtt = JSON.parse(getData)
            newArr.push(newArrtt)
        }
        
        setSeconds(data,newArr);
    }
    console.log(seconds)
    // for(const sece of seconds){
    //     console.log(sece);
        
    // }
    
    let time = 0;
    for(const info of cart){
        time = time + info.time;

    }
    // console.log(time);

    return (
        <div>
            <div className='flex  justify-center align-center'>
                <img src="" alt="" />
                <div>
                    <h3 className='text-lg font-bold'>Humayon Forid</h3>
                    <p>Web developer</p>
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
                <button className='bg-primary text-white text-center font-bold text-lg py-4 px-8 rounded my-8'>Activity completed</button>
            </div>
        </div>
    );
};

export default Cart;