import React from 'react'
import "./style.css"

const List = () => {
  return (
    <>
    <div className="list">
        <hr /><h3>List</h3><hr />
    <span>Gaurika Sharma</span>
    <span>9889722970</span>
    <span>gaurika@gmail.com</span>
    <button className='button-edit'>Edit</button>
    <button className='button-delete'>Delete</button>
    </div>
    
    </>
  )
}

export default List