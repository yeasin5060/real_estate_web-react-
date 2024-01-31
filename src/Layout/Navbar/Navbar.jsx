import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import dreamlogo from '../../images/dream_home_logo.jpg'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Miniheading from '../../Utilities/Miniheading/Miniheading';
import Nanoheading from '../../Utilities/Nanoheading/Nanoheading';
import TextField from '@mui/material/TextField';
import { IoClose } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let forgetclose = ()=>{
    setOpen(false)
  }
  return (
    <section id='navbar'>
      <div className='container'>
        <div className='navbar_wrapper'>
          <div className='navbar_logo_site'>
              <div className='navbar_logo_box'>
                  <img src={dreamlogo} alt="not found" />
              </div>
              <ul className='navbar_logo_box_flex'>
                <li>
                  <NavLink to = "/">Home</NavLink>
                </li>
                <li>
                  <NavLink to = "buy">Buy</NavLink>
                </li>
                <li>
                  <NavLink to = "rent">Rent</NavLink>
                </li>
                <li>
                  <NavLink to = "mortgage">Mortgage</NavLink>
                </li>
              </ul>
          </div>
          <div className='navbar_link_site'>
              <ul className='navbar_link_site_wrapper'>
                <li>
                  <NavLink to = "savedhomes">Saved Homes</NavLink>
                </li>
                <li>
                  <NavLink to = "savedsearches">Saved Searches</NavLink>
                </li>
                <div className='navbar_link_button'>
                    <button className='navbar_link_btn'>
                      <NavLink className="Sign_up_or_Login" onClick={handleOpen} >Sign up or Login</NavLink>
                    </button>
                </div>
              </ul>
          </div>
        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
              <button className='signuporlogin_close_icon' onClick={forgetclose}><IoClose /></button>
              <div className='signuporlogin_contant_box'>
                <Miniheading text="Sign up or Log in" style="signuporlogin_contant_heading"/>
                <Nanoheading text="Email" style="signuporlogin_contant_email"/>
              </div>
              <div className='signuporlogin_input_box'>
                <TextField id="outlined-basic" name='email' type='email' label="Email" variant="outlined" />
              </div>
              <div className='signuporlogin_btn_box'>
                  <button className='signuporlogin_btn'>Submit</button>
              </div>
              <div className='signuporlogin_fb_box'>
                <button className='signuporlogin_fb'> <FaFacebookF className='signuporlogin_fb_icon' /> Continue with Facebook</button>
              </div>
              <div className='signuporlogin_gg_box'>
                <button className='signuporlogin_gg'> <FcGoogle className='signuporlogin_gg_icon' /> Continue with Facebook</button>
              </div>
          </Box>
        </Modal>
      </div>
    </section>
  )
}

export default Navbar