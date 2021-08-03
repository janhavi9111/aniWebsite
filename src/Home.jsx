import React from 'react';
import Commons from './Commons';
import web from '../src/images/w1.jpg'

const Home=()=> {
  return (
    <Commons name='Explore Your Potential with MySite' imgsrc={web} visit='/courses' btname='Get started'></Commons>
  )
}

export default Home
