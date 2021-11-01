import React from 'react';
import './App.css'
import sticker from '../img/sticker1.jpg';
const App = () => {
    return (
        <div className="content">
            <div className="text">
                Ура, у мене вийшло!
            </div>
            <img className="sticker" src={sticker} alt="Girl-programmer" />
        </div>
    );
};

export default App;