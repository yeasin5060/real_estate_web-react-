import React from 'react'
import './Buyhome.css'
import Miniheading from '../../../../Utilities/Miniheading/Miniheading'
import Nanoheading from '../../../../Utilities/Nanoheading/Nanoheading'
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

let arraybuy = [
    {
        id : 1,
        img :homeone ,
        price : "$1,275,000",
        bd : "5bd 5ba 4,642 sqft (on 0.30 acres)",
        serial : "1247 Mayfair Dr,",
        number : "Atlanta, GA 30324",
        mls : "PEACHTREE REALTORS, LLC., MLS#7329306"
    },
    {
        id : 2,
        img :hometwo ,
        price : "$764,000",
        bd : "3bd 4ba 1,604 sqft",
        serial : "1970 Dekalb Ave #9,",
        number :"Atlanta, GA 30324",
        mls : "KELLER WILLIAMS PREMIER, MLS#7329586"
    },
    {
        id : 3,
        img : homethree,
        price :"$445,000",
        bd : "4bd 3ba 2,262 sqft (on 0.35 acres)",
        serial : "1960 Enon Mill Dr SW,",
        number : "Atlanta, GA 30331",
        mls : "MARK SPAIN REAL ESTATE, MLS#7329537"
    },
    {
        id : 4,
        img :homefour ,
        price :"$849,900" ,
        bd : "3bd 3ba 2,786 sqft",
        serial :"244 Locust St NE #A," ,
        number :"Atlanta, GA 30317" ,
        mls :   "COLDWELL BANKER REALTY, MLS#7328755"
    },
    {
        id : 5,
        img : homefive,
        price :"$1,050,000" ,
        bd :"4bd 2ba 2,274 sqft" ,
        serial :"1339 Berwick Ave NE," ,
        number : "Atlanta, GA 30306",
        mls :"ANSLEY REAL ESTATE | CHRISTIE'S INTERNATIONAL REAL ESTATE, MLS#7325999"
    },
    {
        id : 6,
        img : homesix,
        price : "$3,750,000",
        bd : "6bd 6ba 6,245 sqft (on 0.49 acres)",
        serial :"4063 Rickenbacker Dr NE," ,
        number : "Atlanta, GA 30342",
        mls :"COMPASS, MLS#7317491"
    },
    {
        id : 1,
        img :homeone ,
        price : "$1,275,000",
        bd : "5bd 5ba 4,642 sqft (on 0.30 acres)",
        serial : "1247 Mayfair Dr,",
        number : "Atlanta, GA 30324",
        mls : "PEACHTREE REALTORS, LLC., MLS#7329306"
    },
    {
        id : 2,
        img :hometwo ,
        price : "$764,000",
        bd : "3bd 4ba 1,604 sqft",
        serial : "1970 Dekalb Ave #9,",
        number :"Atlanta, GA 30324",
        mls : "KELLER WILLIAMS PREMIER, MLS#7329586"
    },
    {
        id : 3,
        img : homethree,
        price :"$445,000",
        bd : "4bd 3ba 2,262 sqft (on 0.35 acres)",
        serial : "1960 Enon Mill Dr SW,",
        number : "Atlanta, GA 30331",
        mls : "MARK SPAIN REAL ESTATE, MLS#7329537"
    },
    {
        id : 4,
        img :homefour ,
        price :"$849,900" ,
        bd : "3bd 3ba 2,786 sqft",
        serial :"244 Locust St NE #A," ,
        number :"Atlanta, GA 30317" ,
        mls :   "COLDWELL BANKER REALTY, MLS#7328755"
    },
]

const Buyhome = () => {
  return (
   <section id='buyhome'>
        <div className='container'r>
            <div className='buyhome_wrapper'>
                <div className='buyhome_wrapper_head_box'>
                    <Miniheading text="Atlanta, GA Real Estate & Homes For Sale" style="buyhome_wrapper_head"/>
                    <span className='buyhome_wrapper_sort'>Sort: <em className='buyhome_wrapper_listing'>New Listing</em></span>
                </div>
                <div className='buyhome_wrapper_flex'>
                <div className='buyhome_image_wrapper_flex'>
                        {
                            arraybuy.map((item , index)=>(
                                <div key={index} className='buyhome_image_wrapper_box'>
                                    <div className='buyhome_image_box'>
                                        <img src={item.img} alt="not found" />
                                    </div>
                                    <div className='buyhome_image_details_box'>
                                        <Miniheading text={item.price} style="buyhome_image_details_box_head"/>
                                        <Nanoheading text={item.bd}style="buyhome_image_details_box_details"/>
                                        <Nanoheading text={item.serial} style="buyhome_image_details_box_details"/>
                                        <Nanoheading text={item.number} style="buyhome_image_details_box_details"/>
                                        <em  className='buyhome_image_details_box_mls'>{item.mls}</em>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='buyhome_map_box'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212271.67203540824!2d-84.58494340997333!3d33.767257972258456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA%2C%20USA!5e0!3m2!1sen!2sbd!4v1706448608307!5m2!1sen!2sbd"loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
   </section>
  )
}

export default Buyhome