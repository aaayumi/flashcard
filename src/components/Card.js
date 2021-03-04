import React, { useState } from 'react';
import './Card.css'

function Card() {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem('listInLocalStorage')));
    const [number, setNumber] = useState(0);
    const [turn, setTurn] = useState();
    const [visibility, setVisibility] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setValue(JSON.parse(localStorage.getItem('listInLocalStorage')))
        setVisibility(!visibility)
    }
    const card = value && value[number]
    return(
        <div className='Card'>
            <button onClick={handleClick} >Start FlashCard</button>
            {visibility &&
                <div className='field'>
            {value && (number < value.length )?
            (turn ? card.tail : card.head)
                : <p>end</p>
            }
            <div className='buttons'>
                <button onClick={() => setTurn(!turn)}>check</button>
                <button onClick={() => setNumber(number + 1)}>next</button>
            </div>
                </div>
            }
        </div>
    );
}
export default Card;
