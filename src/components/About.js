import React from 'react';
import skills from '../assets/technologies';
import './About.scss'
import me from '../assets/images/me.jpeg'

const About = props => (
  <div className="about">
    {/* <span class="dot"></span> */}
    <h1> About me: </h1> 
  <img src={me} alt=""/>

    <p>
    My name is Olena. I am a Software Engineer based in NYC (but I'm open to relocate to New Jersey or Pennsylvania). I was born in Ukraine and have been living in New York for a five years. <br></br> I hold a Master of Management & Administration from Finance University in Ukraine.
  I enjoy building things, exploring and learning something new - as my recent project <a target="https://github.com/oslabs-beta/Trinity" href="https://github.com/oslabs-beta/Trinity">Trinity</a> - a developer tool for previewing Neo4j Cypher queries and database structure within the VS Code environment. I am especially an engineer focused on building full-stack applications with <strong>React/Redux, Node/Express, PostgreSQL/MongoDB</strong> .
<p> When I am out of the computer, I enjoy listening to music, cooking ukrainian food, traveling, taking some pictures & spending time with my friends and family.
</p>
 </p>
 
<h2 className="p"> I'd love to hear from you, so please feel free to <a target="mailto:olenadanykh@gmail.com" href="mailto:olenadanykh@gmail.com">reach out</a> !</h2>
  </div> 
);

export default About;
