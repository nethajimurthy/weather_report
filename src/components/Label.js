import React from 'react'
import sunny from '../images/sunny.png'
import cloud from '../images/cloud.png'

const Label = ({val}) => {
    const temp=[27,28,29,30,]
    let randTemp=temp[Math.floor(Math.random()*temp.length)];
  return (
    <ul className='LabelIcon'>
        <p>{val}</p>
        <img src={randTemp<29? sunny:cloud} alt='Label 1' />
        <p>{randTemp}&deg;</p>
    </ul>
  )
}

export default Label