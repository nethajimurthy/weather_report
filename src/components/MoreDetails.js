import React from 'react'
import '../Stylesheets/moreDetails.css'
import Cards from '../components/Cards'
import humidity from '../images/humidity.svg'
import prep from '../images/prep.svg'
import rain from '../images/rain.svg'
import tempr from '../images/tempr.svg'
import UVindex from '../images/UVindex.svg'
import wind from '../images/wind.svg'

const MoreDetails = () => {

const cardData=[
    {
        title:'Humidity',
        val:82,
        max:100,
        logo: humidity,
        unit:'%',
        comment:'Bad'
    },
    {
        title:'Wind',
        val:8,
        max:40,
        logo: wind,
        unit:' km/hr',
        comment:''
    },
    {
        title:'Precipation',
        val:1.4,
        max:10,
        logo: prep,
        unit:' cm',
        comment:''
    },
    {
        title:'UV index',
        val:4,
        max:11,
        logo: UVindex,
        unit:'',
        comment:'medium'
    },
    {
        title:'Feels like',
        val:30,
        max:50,
        logo: tempr,
        unit:'\u00B0',
        comment:''
    },
    {
        title:'Chance of rain',
        val:42,
        max:100,
        logo: rain,
        unit:'%',
        comment:''
    },
]

  return (
    <div className='MoreDetails'>
        <h3>More Details on Today's weather</h3>
        <div className='CardsArea'>
            {cardData.map((card)=>{
               return <Cards data={card}/>
            })}
        </div>
    </div>
  )
}

export default MoreDetails