import React from 'react';
import './Player.css'

const Player = ({player, playerSelectHandler}) => {
    // console.log(player)
    const {img, name, time, details} = player;
    return (
        <div className='product-container'>
            <div className="card  bg-base-100 shadow-xl">
            <figure><img src={img} className="imageCard" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4>Time required: {time}</h4>
                <p>{details}</p>
                <div className="card-actions justify-end">
                <button onClick={()=> playerSelectHandler(player)} className="btn btn-primary">Select-Player</button>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Player;