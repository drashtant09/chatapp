import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Drashtant Chat</span>
        < div className='user'>
            <img src='https://images.pexels.com/photos/7203785/pexels-photo-7203785.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
            <span>John</span>
            <button>logout</button>
        </div>
        </div>
  )
}

export default Navbar