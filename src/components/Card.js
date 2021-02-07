import React, { useState } from 'react';

function Card() {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem('listInLocalStorage')));
    const [number, setNumber] = useState(0);
    const [turn, setTurn] = useState();
    const [visibility, setVisibility] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setValue(JSON.parse(localStorage.getItem('listInLocalStorage')))
        setVisibility(!visibility)
        console.log(visibility)
    }
    const card = value[number]
    return(
        <div>
            <button onClick={handleClick} >start</button>
            {value && visibility &&
            (turn ? card.head : card.tail)
            }
            <button onClick={() => setTurn(!turn)}>check</button>
            <button onClick={() => setNumber(number + 1)}>next</button>
        </div>
    )
}

export default Card;