import React, { useState } from 'react';

function Card() {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem('listInLocalStorage')));
    const [number, setNumber] = useState(0);
    const [turn, setTurn] = useState();

    const handleClick = (e) => {
        e.preventDefault();
        setValue(JSON.parse(localStorage.getItem('listInLocalStorage')))
    }
    const card = value[number]
    return(
        <div>
            <button onClick={handleClick} >start</button>
            {turn? card.head : card.tail}
            <button onClick={() => setTurn(!turn)}>check</button>
            <button onClick={() => setNumber(number + 1)}>next</button>
        </div>
    )
}

export default Card;