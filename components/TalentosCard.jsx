import React from 'react'


const TalentosCard = ({data}) => {
  return (
      <div className='bg-white rounded-3xl p-3 flex flex-row  w-full shadow-xl'>
        <div className=' rounded-full mt-6 w-1/3'>
          <img src={data.avatar} className='rounded-full w-full' />
        </div>
        <div className='flex flex-wrap p-5 w-2/3'>
          <h1>Id: {data._id}</h1>
            <p>nombre: {data.name}</p>
            <p>email : {data.email}</p>
            <p>salary: {data.salary}</p>
        </div>
      </div>
  )
}

export default TalentosCard