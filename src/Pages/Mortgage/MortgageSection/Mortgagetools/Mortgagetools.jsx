import React from 'react'
import './Mortgagetools.css'
import { Link } from 'react-router-dom'
import Miniheading from '../../../../Utilities/Miniheading/Miniheading'
import Nanoheading from '../../../../Utilities/Nanoheading/Nanoheading'
import svgtwo from '../../../../images/svgtwo.svg'
import svgthree from '../../../../images/svgthree.svg'
import svgfour from '../../../../images/svgfour.svg'


let arraytools = [
    {
        id : 1,
        img :svgtwo ,
        linkname:"Affordability Calculator" ,
        link : "Affordability",
    },
    {
        id : 2,
        img :svgthree ,
        linkname: "Mortgage Calculator",
        link :"Mortgage" ,
    },
    {
        id :3 ,
        img :svgfour ,
        linkname: "Refinance Calculator",
        link :"Refinance" ,
    },
]
const Mortgagetools = () => {
  return (
    <section id='mortgagetools'>
        <div className='container'>
            <div className='mortgagetools_wrapper'>
                <div className='mortgagetools_heading_box'>
                    <Miniheading text="Try our helpful mortgage tools" style="mortgagetools_head"/>
                    <Nanoheading text="Overwhelmed by mortgages? Don't sweat it. Here are some tools to help make it a little easier." style="mortgagetools_pera"/>
                </div>
                <div className='mortgagetools_image_box_wrapper_flex'>
                    {
                        arraytools.map((item , index)=>( 
                            <div key={index} className='mortgagetools_image_box_wrapper'>
                                <div className='mortgagetools_image_box'>
                                    <img src={item.img} alt="not found" />
                                </div>
                                <div className='mortgagetools_btn_box'>
                                    <Link className='mortgagetools_btn_link' to={item.link}>{item.linkname}</Link>
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

export default Mortgagetools