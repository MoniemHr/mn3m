import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" FoteerContainer text-center">
      <div className="row p-0   ">
        <div className="col-xs-12 col-sm-3 col-md-3 mt-4 ml-4">
          <h3 className="whoFotter">who are we</h3>
          <p >It is one of the leading companies in the field of perfumes since the beginning of the twentieth century
At the end of 2009,..</p>
          
        </div>
        <div className="col-xs-12 col-sm-3 col-md-3 mt-4 ">
          <h3 className="">Follow Us</h3>
          <FaInstagram className="icon"/>
            <FaFacebookSquare className="icon"/>
            <FaLinkedin className="icon"/>
            <FaWhatsapp className="icon"/>
        </div>
        <div className="col-xs-12 col-sm-3 col-md-3 mt-4 ">
          <h3 className="text-left">Importent Link</h3>
          <ul className="m-3">
            <li>
              Home page
            </li>
            <li>
              About us
            </li>
            <li>
              Category
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-3 col-md-3 mt-4">
          <h1>Aroma</h1>
          <h1>Best</h1>
          <h1>Perfume</h1>
        </div>

      </div>
      
    </div>
    
  );
}

export default Footer;