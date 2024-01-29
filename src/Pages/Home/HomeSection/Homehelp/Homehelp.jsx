import React from 'react'
import './Homehelp.css'
import Subheading from '../../../../Utilities/Subheading/Subheading'
import Miniheading from '../../../../Utilities/Miniheading/Miniheading'
import Pera from '../../../../Utilities/Pera/Pera'
import { Link } from 'react-router-dom'
import homehelpone from '../../../../images/homehelpone.svg'
import homehelptwo from '../../../../images/homehelptwo.svg'
import homehelpthree from '../../../../images/homehelpthree.svg'

let arrayhelp = [
    {
        id : 1,
        img :homehelpone,
        name : "Buy a home ",
        pera : "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
        btn : "Find a home",
        link : "findahome"
    },
    {
        id : 2,
        img : homehelptwo,
        name : "Rent a home",
        pera : "With 35+ filters and custom keyword search, Trulia can help you easily find a home or apartment for rent that you'll love.",
        btn : "Find a rental",
        link : "findarental"
    },
    {
        id : 3,
        img : homehelpthree,
        name : "See neighborhoods",
        pera : "With more neighborhood insights than any other real estate website, we've captured the color and diversity of communities.",
        btn : "Learn more",
        link : "learnmore"
    }
]
const Homehelp = () => {
  return (
    <section id='homehelp'>
        <div className='container'>
            <div className='homehelp_contant_wrapper'>
                <div className='homehelp_contant_head_box'>
                        <Subheading text="See how Trulia can help" style="homehelp_contant_head"/>
                </div>
                <div className='homehelp_contant_box_flex'>
                    {
                        arrayhelp.map((item , index)=>(
                            <div key={index} className='homehelp_contant_box'>
                                <div className='homehelp_contant_image_box'>
                                    <img src={item.img} alt="not found" />
                                </div>
                                <div className='homehelp_contant_details_box'>
                                    <Miniheading text={item.name} style="homehelp_contant_details_head"/>
                                    <Pera text={item.pera} style="homehelp_contant_details_pera"/>
                                    <Link to ={item.link} className='homehelp_contant_details_link'>{item.btn}</Link>
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

export default Homehelp