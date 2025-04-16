import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Raunak Verma</h4>
      <h4>Copyright &copy; 2025 RV</h4>
      <div className='footerLinks'>
        <a href="https://github.com/RaunakVerma15" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/raunak-verma-9504342b0/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:dineshverma8448592@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/RaunakVerma/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer