import React from 'react';
import image from '../assets/images/myPicture.jpg';
import './Home.scss'



const Home = () => {
  return(
      <div className="intro" id="home">
      <h1 className="section__title section__title--intro" >hi, I'm <strong>Olena Danykh </strong></h1>
      <p className="section__subtitle section__subtitle--intro">Software Engineer <br></br>...based in New York,NY</p>
    <img className="intro__img" src={image}/>
      </div>
  
  )
}
export default Home;