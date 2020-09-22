
import React, {Component} from 'react';
import { myProjects } from '../assets/projects';
import Technologies from './Technologies'
import "./Projects.scss"
import experience from '../assets/experience'

class Projects extends Component {
  constructor(){
    super()


    }
      render() {
        // const {bullets} = experience;
        // const bullet = bullets.map(el => {
        //   return(
        //     <ul className="bullets">
        //       <li>
        //         {el}
        //       </li>
        //     </ul>
        //   )
        // })
    
        const projects = myProjects.map((el) => {
          const { title, description, github, language, logo, bullets } = el;
          console.log(bullets)
      
          return(
            
            <div className="container">
          <div class="card-image">
            <img src={logo} onClick={() => window.open(github)}/>
            </div>
            <div className="card-content">
          <h1 className="card-title" onClick={() => window.open(github)}>{title}</h1> 
            <p className="descrip" onClick={() => window.open(github)}>
              {description}
              </p>
              <p className="descrip-2">language: {language}</p> 
            </div>
          </div>
         
          )
        })
        return(
          <div >
          < Technologies/>
          <ul className="scroll-container">
            {projects}
            
          </ul>
          </div>
        )
      }
  }
  


export default Projects;
