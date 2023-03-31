import React, { useState } from 'react'

export default function TodoForm(props) {
    const [inputtext, setInputtext] = useState("")
    const handleSubmit=()=>{
       props.addlist(inputtext);
        setInputtext("")
    }

    
  return (
    <>
    <div className="todoForm">
    <input type="text" placeholder='write todo here' value={inputtext} onChange={(e)=>{setInputtext(e.target.value)}}></input>
    <button type="submit" onClick={handleSubmit}>Go</button>
    </div>
    </>
  )
}
