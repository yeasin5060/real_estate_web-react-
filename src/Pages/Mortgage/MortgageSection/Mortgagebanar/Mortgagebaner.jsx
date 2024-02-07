import React from 'react'
import "./Mortgagebanar.css"
import Miniheading from '../../../../Utilities/Miniheading/Miniheading'
import Pera from '../../../../Utilities/Pera/Pera'
import svgone from '../../../../images/svgone.svg'

const Mortgagebaner = () => {
  return (
    <section id='mortgagebanar'>
        <img src={svgone} alt="not found" />
        <div className='container'>
            <div className='mortgagebanar_wrapper'>
                <div className='mortgagebanar_head_box'>
                    <Miniheading text="Looking for a mortgage? Let Trulia be your guide." style="mortgagebanar_headinmg"/>
                    <Pera text="Take the first step and get pre-qualified." style="mortgagebanar_pera"/>
                </div>
                <div className='mortgagebanar_input_box'>
                    <input type="text" className='mortgagebanar_input'/>
                    <button className='mortgagebanar_input_btn'>Get Per-Qualifide</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mortgagebaner