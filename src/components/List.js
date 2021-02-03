import React, { useState } from 'react';
// import './List.css';

function List() {
    const [head, setHead] = useState();
    const [tail, setTail] = useState();
    const [list, setList] = useState([]);
    const handleSubmit = (e)=> {
        e.preventDefault();
        setList(list => [...list, {head,tail}]);
    }

    return (
        <div className="List">
           <form onSubmit={handleSubmit}>
               <input type='text'
               onChange={(e) => setHead(e.target.value)}/>
               <input type='text'
                      onChange={(e) => setTail( e.target.value)} />
               <input
                   type='submit'
               />
           </form>
        </div>
    );
}

export default List;
