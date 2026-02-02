import React from 'react'
import Chats from '../../assets/Data/Chats'

const ChatsPage = () => {
  return (
    <div className='w-full flex flex-col'>
        <h1 className=' capitalize text-xl sm:text-2xl font-semibold text-center mb-2'>chats</h1>
        <hr className='w-full h-1 text-gray-300'/>
        {Chats.map(chat=>(
            <div key={chat.id} className=''>
                <div className='flex items-start p-2 gap-3.5 md:px-5'>
                    <div className='w-16'>
                      <img src={chat.image} />
                    </div>
                    <div className='w-3/4'>
                        <h2 className='font-semibold text-sm md:text-base lg:text-lg'>{chat.namePerson}</h2>
                        <p className='text-custom  md:text-sm lg:text-base'>{chat.content}</p>
                    </div>
                </div>
                <hr className='w-full h-1 text-gray-300'/>
            </div>
        ))}
    </div>
  )
}

export default ChatsPage