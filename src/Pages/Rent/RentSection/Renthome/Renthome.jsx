import React from 'react'
import "./Renthome.css"
import Miniheading from '../../../../Utilities/Miniheading/Miniheading'
import Nanoheading from '../../../../Utilities/Nanoheading/Nanoheading'
import rentone from '../../../../images/rentone.jpg'
import renttwo from '../../../../images/renttwo.jpg'
import rentthree from '../../../../images/rentthree.jpg'
import rentfour from '../../../../images/rentfour.jpg'
import rentfive from '../../../../images/rentfive.jpg'
import rentsix from '../../../../images/rentsix.jpg'
import rentseven from '../../../../images/rentseven.jpg'
import renteight from '../../../../images/renteight.jpg'
import rentnine from '../../../../images/rentnine.jpg'
import rentten from '../../../../images/rentten.jpg'

let arrayrent = [
    {
        id :1 ,
        img : rentone,
        price : "$1,739 - $2,938/mo",
        bd : "1-2bd 1-2ba",
        details : "92 West Paces,",
        number : "Atlanta, GA 30305"
    },
    {
        id : 2,
        img : renttwo,
        price : "$1,621 - $3,702/mo",
        bd : "Studio-2bd 1-2ba",
        details : "Vireo,",
        number : "Atlanta, GA 30309"
    },
    {
        id : 3,
        img : rentthree,
        price : "$1,887 - $3,705/mo",
        bd : "1-2bd 1-2ba",
        details : "Vireo",
        number : "Atlanta, GA 30309"
    },
    {
        id : 4,
        img :rentfour ,
        price : "$1,463 - $3,233/mo",
        bd : "1-3bd 1-3ba",
        details : "Steelworks,",
        number : "Atlanta, GA 30318"
    },
    {
        id : 5,
        img : rentfive,
        price : "$1,458 - $3,178/mo",
        bd : "1-3bd 1-3ba",
        details : "Steelworks,",
        number : "Atlanta, GA 30363"
    },
    {
        id : 6,
        img :rentsix ,
        price : "$1,496 - $1,881/mo",
        bd : "1-2bd 1-2ba",
        details : "Briarcliff Court Apartments,",
        number : "Atlanta, GA 30306"
    },
    {
        id :7 ,
        img : rentseven,
        price : "$1,682 - $2,936/mo",
        bd : " Studio-2bd 1-2ba",
        details : "AMLI Parkside,",
        number : "Atlanta, GA 30312"
    },
    {
        id :8 ,
        img : renteight,
        price : "$2,525 - $6,255/mo",
        bd : "1-3bd 1-2ba",
        details : "Signal House,",
        number : "Atlanta, GA 30308"
    },
    {
        id : 9,
        img :rentnine ,
        price : "$2,475 - $6,050/mo",
        bd : " 1-3bd 1-2.5ba",
        details : "Signal House,",
        number : "Atlanta, GA 30308"
    },
    {
        id :10 ,
        img :rentten ,
        price : "$1,499 - $2,199/mo",
        bd : "1-2bd 1-2ba",
        details : "1660 Peachtree Midtown,",
        number : "Atlanta, GA 30309"
    },
]

const Renthome = () => {
  return (
    <section id='renthome'>
        <div className='container'r>
            <div className='renthome_wrapper'>
                <div className='renthome_wrapper_head_box'>
                    <Miniheading text="Apartments For Rent in Atlanta, GA" style="renthome_wrapper_head"/>
                    <span className='renthome_wrapper_sort'>Sort: <em className='renthome_wrapper_listing'>New Listing</em></span>
                </div>
                <div className='renthome_wrapper_flex'>
                <div className='renthome_image_wrapper_flex'>
                        {
                            arrayrent.map((item , index)=>(
                                <div key={index} className='renthome_image_wrapper_box'>
                                    <div className='renthome_image_box'>
                                        <img src={item.img} alt="not found" />
                                    </div>
                                    <div className='renthome_image_details_box'>
                                        <Miniheading text={item.price} style="renthome_image_details_box_head"/>
                                        <Nanoheading text={item.bd}style="renthome_image_details_box_details"/>
                                        <Nanoheading text={item.serial} style="renthome_image_details_box_details"/>
                                        <Nanoheading text={item.number} style="renthome_image_details_box_details"/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='renthome_map_box'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212271.67203540824!2d-84.58494340997333!3d33.767257972258456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA%2C%20USA!5e0!3m2!1sen!2sbd!4v1706448608307!5m2!1sen!2sbd"loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Renthome