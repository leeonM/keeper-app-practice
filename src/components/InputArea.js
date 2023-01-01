import React, {useState} from 'react'
import ListItem from './ListItem'

const InputArea = () => {
    const [item, setItem] = useState({
        title: "",
        content: ""
    })
    const [list, setList] = useState([])
    const [submitStatus, setSubmitStatus] = useState(false)

  function handleChange(e){
    const { name , value } = e.target;
    setItem(prevValue => {
        return {
            ...prevValue,
            [name]: value
        }
    })
  } 

  function handleClick(){
    setList(prevList => {
        if (item.title.length < 1 || item.content.length < 1 ){
            setSubmitStatus(true)
            return [...prevList]
        } else {
            setSubmitStatus(false)
            return [...prevList, item]
        }
    })
    setItem({
        title: "",
        content: "",
    })
  }


  function deleteItem(id){
    setList(prevList => {
       return prevList.filter((item,index) => {
           return index !== id
        })
    })
  }

  return (
    <>
    <div className="flex flex-col w-full justify-center items-center my-6">
      <div className="rounded-md rounded-b-none border border-gray-300 px-3 py-2  w-1/2">
        <label htmlFor="name" className="block text-xs font-medium text-gray-900">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={item.title}
          onChange={handleChange}
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
        />
      </div>
      <div className="rounded-md rounded-t-none border border-gray-300 px-3 py-2  w-1/2">
        <label htmlFor="job-title" className="block text-xs font-medium text-gray-900">
          Content
        </label>
        <textarea type="text"
          name="content"
          id="content"
          value={item.content}
          onChange={handleChange}
          className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm">
        </textarea>
      </div>
      <button
        onClick={handleClick}
        type="button"
        className="inline-flex items-center rounded-full border border-transparent bg-slate-700 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4 mb-2"
      >
        Submit
      </button>
      {submitStatus ? <p>Please fill in all the details before submitting</p> : null}
    </div>
    
    <div className="flex flex-col w-full my-6 min-h-screen">
        <ul role="list" className="flex flex-col space-y-3 items-center">

        {list.map((item, index) => (<ListItem
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            delete={deleteItem}
        />))}
    </ul>
    </div>
    </>
  )
}

export default InputArea