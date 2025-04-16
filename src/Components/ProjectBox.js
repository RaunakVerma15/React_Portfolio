import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    BootstrapDesc : "This website is a iCoder for programmers. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    BootstrapGithub : "https://github.com/RaunakVerma15/Bootstrap",
    
  
    Crystal_CharmDesc : "A website that shows cosmetic product for skin .Crystal_Charm is a fully responsive ecommerce website,Responsive for all devices, build using HTML, CSS, and JavaScript.",
    Crystal_charmGithub : "https://github.com/RaunakVerma15/Crystal_Charm_",
  

    TictactoeDesc:"This website is used for to play game Tic-Tac-Toe. it is a simple game which is made using HTML, CSS, and JavaScript. It is a fully responsive website.",
    TictactoeGithub:"https://github.com/RaunakVerma15/Tic-Tac-Toe-Game",
    
    
  // Food_AppDesc:"An innovative pet management web app enabling pet parents to create unique pet IDs, securely store and share vaccination records, and generate QR codes for pet profiles, enhancing safety.",
    // Food_AppGithub:"https://github.com/RaunakVerma15/Food_Explorer_App.git",
    // // Food_AppWebsite:"https://wiggles.vercel.app/",
    }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            {/* <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
        </div>
    </div>
  )
}

export default  ProjectBox