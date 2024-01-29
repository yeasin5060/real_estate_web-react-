import React from 'react'
import './Footerhead.css'
import Miniheading from '../../../../Utilities/Miniheading/Miniheading'

const Footerhead = () => {
  return (
    <section id='footerhead'>
        <div className='container'>
            <div className='footerhead_contant'>
                <Miniheading text="Check out a neighborhood" style="footerhead_heading"/>
                <input className='footer_search' type='search' placeholder='Search for City, Neighborhood, Zip, County, School'/>
            </div>
        </div>
    </section>
  )
}

export default Footerhead