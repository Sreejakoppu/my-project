import React from 'react'

const Para=({names}) => {
  return (
    <>
    {
        names.name.map((items,index)=>{
            return <p key={index}>Iam {items}</p>
        })
    }
    </>
  )
}

export default Para