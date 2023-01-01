import React, { useState } from 'react'
import ListItem from './ListItem'

const List = () => {
    const [item, setItem] = useState({
        title: "",
        content: ""
    })

    
  return (
    <div className="flex flex-col w-full my-6">
        <ul role="list" className="flex flex-col space-y-3 items-center">
        <ListItem 
        title="This is the Title"
        content="This is the Content"
        />
    </ul>
    </div>
  )
}

export default List