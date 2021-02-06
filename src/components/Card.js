import React, { useState, useEffect } from 'react';

function Card() {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem('listInLocalStorage')));
    const [number, setNumber] = useState(0);
    const [card, setCard] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setCard(true)
        setValue(JSON.parse(localStorage.getItem('listInLocalStorage')))
    }

    function handleCardClick (location){
       const loc =  value.find(item => item.head === location)
        loc.done = !loc.done;
        value.filter(v => v.done === false && [...value])
    }
    return(
        <div>
            <button onClick={handleClick} >start</button>
            {card && value.map((v, index) =>
                <div key={index}>{v.head}
                <button onClick={() => handleCardClick(v.head)}>next</button></div>)
            }
        </div>
    )
}

export default Card;