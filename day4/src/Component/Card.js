import React from 'react'

function Card ({image,name,destination,description}) {
  return (
    <div className='card'>
    <img src={image} alt={name} width={150}/>
    <div className="card-body">
     <h3 className='title'>{destination}</h3>
     <h2 className='name'>{name}</h2>
     <p className='subTitle'>{description}</p>
    </div>
    </div>
  )
}
export default Card