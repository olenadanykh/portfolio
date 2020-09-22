/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
// import { SocialIcon } from 'react-social-icons';
import {FaGithub, FaRegEnvelope, FaDropbox, FaLinkedin } from 'react-icons/fa'
import { github, linkedIn, email } from '../assets/links';
import resume from '../assets/content/resume.pdf';
import './Footer.scss'


const Footer = () => (
  <section >
    <div className="links">
      {
        [
          ['Email', email, <FaRegEnvelope className="my-social-icon"/>],
          ['LinkedIn', linkedIn, <FaLinkedin className="my-social-icon"/>],
          ['GitHub', github, <FaGithub className="my-social-icon"/>],
          ['Resume', resume, <FaDropbox className="my-social-icon"/>],
        ].map(([title, url, icon], idx) => <Item className="link-item" key={idx} title={title} url={url} icon={icon} />)
                }
    </div>
    <p className="copyright">Designed by Olena Danykh © 2020</p>
  </section>
);
const Item = ({ url, icon}) => (
 
  <div target={"_blank"} onClick={() => window.open(url, "_blank")}>
    {icon}
  </div>
 

);


export default Footer;
