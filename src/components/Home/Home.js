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
    // console.log(players)
    const playerSelectHandler = (player) =>{
        // console.log('clicked', player);
        const newArray =[...carts, player] 
        setCarts(newArray)
    }
    // console.log(carts)



    return (
        <div>
            <div className="Home-container">
                <div className="Home-left-side">
                    {
                        players.map(player => <Player player={player} playerSelectHandler={playerSelectHandler} key={player.id}></Player>)
                    }
                </div>
                <div className="Home-right-side">
                    <h1>home right site</h1>
                    <Cart cart={carts}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;