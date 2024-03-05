import React from 'react'
import './Errpage.css'
import Nanoheading from '../../Utilities/Nanoheading/Nanoheading'
import { useNavigate } from 'react-router-dom'

const Errpage = () => {
    const navigate = useNavigate()

    let backHome = ()=>{
        navigate("/")
    }
  return (
    <section id='err_page'>
        <Nanoheading text="this page is not yet full developed . please return to home page" style="err_page_header"/>
        <div className='err_page_button'>
            <button className='err_page_btn' onClick={backHome}>
                home page
            </button>
        </div>
    </section>
  )
}

export default Errpage