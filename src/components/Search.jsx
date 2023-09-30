import React from 'react'

const search = () => {
  return (
    <div className='search'>
        <div className='searchForm'>
            <input type='text' placeholder='find a user'/>
        </div>
        <div className='userChat'>
            <img src='https://images.pexels.com/photos/7203785/pexels-photo-7203785.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
            <div className='userChatInfo'>
                <span>Jane</span>
            </div>
        </div>
    </div>
  )
}

export default search