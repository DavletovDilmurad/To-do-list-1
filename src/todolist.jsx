import React, { useState } from 'react';

function App() {
  const [state, setState] = useState("");
  const [state1, setState1] = useState("");
  const [data, setData] = useState([]);

  const getinputValue = (e) => {
    setState(e.target.value)

  }
  const getinputValue1 = (e) => {
    setState1(e.target.value)

  }
  const add = () => {
    setData([...data, {  text1: state1,text: state , id: data.length + 1 }])
    setState(""); 
    setState1(""); 
  }
  const Delete=(id)=>{
const newData=data.filter((value)=> value.id !==id)
setData(newData);
  }
  return (
    <div className="p-4">
      <div className="mb-4 gap-10 flex">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded w-[530px]"
          placeholder="Todo matnini kiriting"
          onChange={getinputValue}
          value={state} 
        />
         <input
          type="text"
          className="border border-gray-300 p-2 rounded w-[530px]"
          placeholder="Todo matnini kiriting"
          onChange={getinputValue1}
          value={state1} 
        />
        <button
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={add}
        >
          Qo'shish
        </button>
      </div>
      <div className='grid grid-cols-4 gap-[15px] ml-[50px]'> 
        {data.map((todo) => (
          <div key={todo.id} className="border border-3 rounded-lg border-black p-4 mb-2  w-[200px] items-center">
            <div>
            <p className='text-3xl'>{todo.text}</p>
            <p className='text-gray-500'>{todo.text1}</p>
            </div>
            <div >
              <button className='w-[100%] mt-4 h-[30px] bg-red-600 text-white rounded-xl' onClick={()=>Delete(todo.id)}>delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
