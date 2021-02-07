import React, { useState } from 'react';

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
            <h2>FlashCard: add your words which you want to memorize</h2>
           <form onSubmit={handleSubmit}>
               <input type='text'
               onChange={(e) => setHead(e.target.value)}/>
               <input type='text'
                      onChange={(e) => setTail( e.target.value)} />
               <input
                   type='submit'
               />
           </form>
            {list && list.map((item,index) => <li key={index}><span>{item.head}</span>
           <span>{item.tail}</span></li>)}
        </div>
    );
}

export default List;
