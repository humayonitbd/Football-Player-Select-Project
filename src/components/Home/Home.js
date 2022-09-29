import colorNames from 'daisyui/src/colors/colorNames';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Home.css'


const Home = () => {
    const [players, setPlayers] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])
    const playerSelectHandler = (player) =>{
        const newArray =[...carts, player] 
        setCarts(newArray)
    }
    
    return (
        <div>
            <div className="Home-container">
                <div className='Home-left-side-container'>
                <h2 className='ml-5 text-2xl font-medium my-3'>Select football players exercise</h2>
                <div className="Home-left-side">
                    {
                        players.map(player => <Player player={player} playerSelectHandler={playerSelectHandler} key={player.id}></Player>)
                    }
                </div>
                </div>
                <div className="Home-right-side">
                    <Cart cart={carts}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;