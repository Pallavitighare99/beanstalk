import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <>
        <footer id="footer" className="footer-1">
        <div className="main-footer widgets-dark typo-light">
        <div className="container">
        <div className="row">
         
        <div className="col-xs-12 col-sm-6 col-md-3">
        <div className="widget subscribe no-box">
        <h5 className="widget-title">Beanstalk Edu<span></span></h5>
        <p>Our programs are designed to provide solutions to businesses. We incorporate cutting edge research into our curriculum and continue to develop programs that offer unique academic and commercial benefit to partne.</p>
        </div>
        </div>
       
        <div className="col-xs-12 col-sm-6 col-md-3">
        <div className="widget no-box">
        <h5 className="widget-title">Quick Links<span></span></h5>
        <ul className="thumbnail-widget">
        <li>
      
        </li>
        <li>
        <div className="thumb-content"><a href="/">Home</a></div>
        </li>
        </ul>
        </div>
        </div>
       
        <div className="col-xs-12 col-sm-6 col-md-3">
        <div className="widget no-box">
        <h5 className="widget-title">Get Started<span></span></h5>
        <div className="thumb-content">
        <a href='https://beanstalkedu.com/' target="__blank" style={{textDecoration:"none", color:"orange"}}>Visit our Website</a>
        </div>
      
    
        </div>
        </div>
       
        <div className="col-xs-12 col-sm-6 col-md-3">
       
        <div className="widget no-box">
        <h5 className="widget-title">Contact Us<span></span></h5>
       
        <p><a href="mailto:alencolins@gmail.com" title="glorythemes">alencolins@gmail.com</a></p>
        <p> +91-9644377621</p>
        <ul className="social-footer2">
       
        </ul>
        </div>
        </div>
       
        </div>
        </div>
        </div>
         
        <div className="footer-copyright">
        <div className="container">
        <div className="row">
        <div className="col-md-12 text-center">
        <p>Copyright © Sanket Bagad. All rights reserved.</p>
        </div>
        </div>
        </div>
        </div>
        </footer>
        </>
    )
}
export default Footer