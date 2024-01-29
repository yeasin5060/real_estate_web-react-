import React from 'react'
import './Footerlink.css'
import { Link } from 'react-router-dom'
import Miniheading from '../../../../Utilities/Miniheading/Miniheading'

const Footerlink = () => {
  return (
    <section id='footerlink'>
        <div className='container'>
            <div className='footerlink_contant_box'>
                <div className='footerlink_head_box'>
                    <Miniheading text="discover a place you'll love to live" style="footerlink_head"/>
                </div>
                <div className='footerlink_link_box_flex'>
                    <div className='footerlink_link_flex'>
                        <div className='footerlink_link_head_box'>
                            <Link className='footerlink_link_head' to = "alaskarealestate">Real Estate Markets</Link>
                        </div>
                        <Link className='footerlink_page' to = "alaskarealestate">Alaska Real Estate</Link>
                        <Link className='footerlink_page' to = "alaskarealestate">Alabama Real Estate</Link>
                        <Link className='footerlink_page' to = "alaskarealestate">Arkansas Real Estate</Link>
                        <Link className='footerlink_page' to = "alaskarealestate">Arizona Real Estate</Link>
                    </div>
                    <div className='footerlink_link_flex'>
                        <div className='footerlink_link_head_box'>
                            <Link className='footerlink_link_head' to = "alaskarealestate">Popular Searches</Link>
                        </div>
                        <Link className='footerlink_page' to = "alaskarealestate">Condos for Sale Near Me</Link>
                        <Link className='footerlink_page' to = "alaskarealestate">Alaska Real Estate</Link>
                        <Link className='footerlink_page' to = "alaskarealestate">Alaska Real Estate</Link>
                        <Link className='footerlink_page' to = "alaskarealestate">Alaska Real Estate</Link>
                    </div>
                    <div className='footerlink_link_flex'>
                        <div className='footerlink_link_head_box'>
                            <Link className='footerlink_link_head' to = "alaskarealestate">Explore Trulia</Link>
                        </div>
                        <Link className='footerlink_page' to = "alaskarealestate">Facebook</Link>
                        <Link className='footerlink_page' to = "alaskarealestate">Twitter</Link>
                        <Link className='footerlink_page' to = "alaskarealestate">Instagram</Link>
                        <Link className='footerlink_page' to = "alaskarealestate">Pinterest</Link>
                    </div>
                    <div className='footerlink_link_flex'>
                        <div className='footerlink_link_head_box'>
                            <Link className='footerlink_link_head' to = "alaskarealestate">For Professionals</Link>
                        </div>
                        <Link className='footerlink_page' to = "alaskarealestate">Popular Counties</Link>
                        <Link className='footerlink_page' to = "alaskarealestate">Rental Communities</Link>
                        <Link className='footerlink_page' to = "alaskarealestate">Real Estate Leads</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footerlink