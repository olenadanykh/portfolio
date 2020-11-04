
import React, {Component} from 'react';
import { myProjects } from '../assets/projects';
import Technologies from './Technologies'
import "./Projects.scss"
import loading_gif from '../assets/images/coming_gif.gif'

class Projects extends Component {
  constructor(){
    super()


    }
      render() {
        const projects = myProjects.map((el) => {
          const { title, description, github, language, logo, bullets} = el;
          console.log('bullets', bullets)
      
          return(
            
            <div className="container">
          <div className="card-image">
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
          <div>
          < Technologies/>
          <ul className="scroll-container">
            {projects}
            <div className="container">
          <div className="card-image">
            <img src={loading_gif}/>
            </div>
            <div className="card-content">
          <h1 className="card-title">...coming soon</h1> 
            </div>
          </div>
            
          </ul>
          </div>
        )
      }
  }
  


export default Projects;
