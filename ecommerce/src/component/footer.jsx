import React from "react";
import { FaFacebook , FaInstagram} from 'react-icons/fa';
import { MdAddIcCall } from "react-icons/md";


const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column ">
            <p>@2023 Mani Mugahl All Rights Reserved</p>
            <p className="cont">
             <MdAddIcCall /> +923227832633</p>

            <div className="links ">
              <a href="http://www.facebook.com">
                <FaFacebook icon={FaFacebook} /> Facebook
              </a>
              <br/>
              <a href="http://www.instagram.com">
              <FaInstagram icon={FaInstagram} />Instagram</a>
              <p>PRIVACY POLICY</p>
              
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
