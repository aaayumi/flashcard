import React, { useState } from 'react';
// import './List.css';

function List() {
    const [word, setWord] = useState();
    const handleSubmit = (e)=> {
        e.preventDefault();
        alert('hh')
    }

    return (
        <div className="List">
           <form onSubmit={handleSubmit}>
               <input type='text'
               onChange={(e) => setWord({head: e.target.value})}/>
               <input type='text'
                      onChange={(e) => setWord({tail: e.target.value })} />
               <input
                   type='submit'
               />
           </form>
        </div>
    );
}

export default List;
