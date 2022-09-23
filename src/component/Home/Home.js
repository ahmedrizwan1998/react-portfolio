import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import logoTitle from '../../assets/images/logo-s.png';

function Home() {
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1> hi, I'm 
                <img src={logoTitle} alt='developer'/>
                lade
                <br />
                web developer
            </h1>
            <h2>MERN Stack Developer</h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
    </div>
  )
}

export default Home