import React from 'react'
import './homebanar.css'
import Heading from '../../../../Utilities/Heading/Heading'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";

const Homebanar = () => {
  return (
    <section id='homebanar'>
        <div className='container'>
            <div className='homebanar_wrapper'>
                <div className='homebanar_head_box'>
                    <Heading text="Discover a place you'll love to live" style="homebanar_head"/>
                </div>
                <div className='homebanar_link_box'>
                    <Link className='homebanar_link' to = "homebuy">Buy</Link>
                    <Link className='homebanar_link' to = "homebuy">Rent</Link>
                    <Link className='homebanar_link' to = "homebuy">Sold</Link>
                </div>
                <div className='homebanar_search_box'>
                <IoSearch  className='homebanar_search_icon'/><input className='homebanar_search' type="search" placeholder='Search your dream home' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homebanar