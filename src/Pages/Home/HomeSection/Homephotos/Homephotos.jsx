import React from 'react'
import './Homephotos.css'
import Subheading from '../../../../Utilities/Subheading/Subheading'
import Pera from '../../../../Utilities/Pera/Pera'
import homeone from '../../../../images/homeone.jpg'
import hometwo from '../../../../images/hometwo.jpg'
import homethree from '../../../../images/homethree.jpg'
import homefour from '../../../../images/homefour.jpg'
import homefive from '../../../../images/homefive.jpg'
import homesix from '../../../../images/homesix.jpg'
import homeseven from '../../../../images/homeseven.jpg'
import homeeight from '../../../../images/homeeight.jpg'
import homenine from '../../../../images/homenine.jpg'
import hometen from '../../../../images/hometen.jpeg'
import homealiven from '../../../../images/homealiven.jpeg'
import hometwelve from '../../../../images/hometwelve.jpg'
import { Link } from 'react-router-dom'
import Nanoheading from '../../../../Utilities/Nanoheading/Nanoheading'

let arrayhome = [
    {
        id : 1,
        img: homeone,
        details : "Details", 
        name : "Atlanta , GA",
        link : "atlanta"
    },
    {
        id : 2,
        img: hometwo,
        details : "Details", 
        name : "Scottsdale, AZ",
        link : "atlanta"
    },
    {
        id : 3,
        img: homethree,
        details : "Details", 
        name : "Oakland, CA",
        link : "atlanta"
    },
    {
        id : 4,
        img: homefour,
        details : "Details", 
        name : "Sandy Springs, GA",
        link : "atlanta"
    },
    {
        id : 5,
        img: homefive,
        details : "Details",  
        name : "Carlsbad, CA",
        link : "atlanta"
    },
    {
        id : 6,
        img: homesix,
        details : "Details", 
        name : "Newton, MA",
        link : "atlanta"
    },
    {
        id : 7,
        img: homeseven,
        details : "Details", 
        name : "Atlanta , GA",
        link : "atlanta"
    },
    {
        id : 8,
        img: homeeight,
        details : "Details", 
        name : "Oakland, CA",
        link : "atlanta"
    },
    {
        id : 9,
        img: homenine,
        details : "Details",
        name : "Boston, MA",
        link : "atlanta"
    },
    {
        id : 10,
        img: hometen,
        details : "Dtails", 
        name : "Austin, TX",
        link : "atlanta"
    },
    {
        id : 11,
        img: homealiven,
        details : "Details", 
        name : "Lowell, MA",
        link : "atlanta"
    },
    {
        id : 12,
        img: hometwelve,
        details : "Details", 
        name : "Aurora, CO",
        link : "atlanta"
    },
]


const Homephotos = () => {
  return (
    <section id='homephotos'>
        <div className='container'>
            <div className='homephotos_wrapper'>
                <div className='homephotos_contant'>
                    <Subheading text="Explore homes on Trulia" style="homephoto_head"/>
                    <Pera text="Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you." style="homephoto_pera"/>
                </div>
                <div className='homephotos_flex'>
                    {
                        arrayhome.map((item , index)=>(
                            <div key={index} className='homephotos_flex_box'>
                                <div className='homephotos_image_box'>
                                    <img src={item.img} alt="not found" />
                                </div>
                                <div className='homephotos_image_contant_box'>
                                    <Link className='home_link_details' to ={item.link}>{item.details}</Link>
                                    <Nanoheading text={item.name} style="property_name"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homephotos