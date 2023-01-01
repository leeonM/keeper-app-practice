import React from 'react'

const ListItem = (props) => {
    function handleClick(){
        props.delete(props.id)
    }
  return (
    <li className="text-clip rounded-md bg-white px-6 py-4 border border-gray-300 w-1/2">
          <h3 className="text-lg font-medium leading-6 text-gray-900 border-b">{props.title}</h3>
          <p>{props.content}</p>
          <button className="rounded-full border border-gray-300 bg-slate-700 px-1.5 py-1 text-white text-xs hover:bg-indigo-700 mt-2" onClick={handleClick}>Delete</button>
        </li>
  )
}

export default ListItem