/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./Index1.css";
import { NavLink } from 'react-router-dom';

const Commons = (props) => {
    return (
       <section id="header" className="d-flex align-item-center">
           <div className="container fluid nav_bg">
               <div className="row">
               <div className="col-10 mx-auto">
               <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>{props.name}</h1>
                    <h2 className="my-3">We group of 3 B-tech Students created this channel with the aim to provide 
 you the best of knowledge about latest technologies up there and keep you up-to date
  with the programming sport.</h2>
                    <div className="mt-3">
                        <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={props.imgsrc} className="img-fluid animated" />
                </div>
               </div>
               </div>
               </div>
           </div>
       </section>
    )
}

export default Commons
