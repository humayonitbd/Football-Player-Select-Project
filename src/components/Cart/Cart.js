import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart)
    let time = 0;
    for(const info of cart){
        time = time + info.time;

    }
    // console.log(time);

    return (
        <div>
            <div>
                <h3 className='text-lg font-bold my-4'>Exercize details</h3>
                <p className='bg-red-100 py-3 px-1 rounded my-2'><strong>Exercize time: <span></span>{time}</strong></p>
                <p className='bg-red-100 py-3 px-1 rounded'><strong>Break time: </strong></p>
            </div>
        </div>
    );
};

export default Cart;