import React, { useState } from 'react';
import './List.css'

function List() {
    const [head, setHead] = useState();
    const [tail, setTail] = useState();
    const [list, setList] = useState([]);
    const handleSubmit = (e)=> {
        e.preventDefault();
        setList(list => [...list, {head,tail,done: false}]);
        localStorage.setItem('listInLocalStorage',JSON.stringify(list));
    }

    return (
        <div className="List">
            <h2>FlashCard</h2>
           <form onSubmit={handleSubmit}>
               <input type='text'
               onChange={(e) => setHead(e.target.value)}/>
               <input type='text'
                      onChange={(e) => setTail( e.target.value)} />
               <input
                   type='submit'
                   className='submit'
               />
           </form>
            <ul>
            {list && list.map((item,index) => <li key={index}><p>{item.head}</p>
           <p>{item.tail}</p></li>)}
            </ul>
        </div>
    );
}

export default List;
