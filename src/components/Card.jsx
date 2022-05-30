import React from 'react'

const Card = ({userRandom, colorRandom, arrayColor, users, getElementRandom, clickButton}) => {
 const styleButton = {
    backgroundColor: colorRandom
 }
 
 
 return (
   <article className='card' style={{color: colorRandom}}>
     <h2 className='card__title'>{userRandom.name}</h2>      
      <ul className='card__list'>
       <li className='card__list'>
         <b className='card__b'>Company name: </b>
         {userRandom.company.name}
       </li>           
       <li className='card__list'>
         <b className='card__b'>City: </b>
         {userRandom.address.city}
       </li>           
       <li className='card__list'>
         <b className='card__b'>Website: </b>
         {userRandom.website}
       </li>           
      </ul>
      <button style={styleButton} 
         className='card__btn'
         onClick={clickButton}
         >O</button>
   </article>
  )
}

export default Card