import React from 'react';
import ProjectBox from './ProjectBox';
import Tictactoe from '../images/Tictactoe.png';
import Crystal_Charm from '../images/Crystal_Charm.png';
import Bootstrap from '../images/Bootstrap.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={Bootstrap} projectName="Bootstrap" />
        <ProjectBox projectPhoto={Crystal_Charm} projectName="Crystal_Charm" />
        <ProjectBox projectPhoto={Tictactoe} projectName="Tictactoe" />
        {/* <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" /> */}
      </div>

    </div>
  )
}

export default Projects