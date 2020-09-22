import React, {Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import technologies from '../assets/technologies'
import './Technologies.scss'

export const MenuItem = ({ text }) => {
  return (
    <div className="menu-item">
      {text}
    </div>
  );
};

export const Menu = (technologies) => technologies.map(el => {
  const { name } = el;
  return (
    <MenuItem
      text={name}
      key={name}
    />
  );
});


export const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

class Technologies extends Component {
  
  render() {
    const menu = Menu(technologies);

    return (
      <div className="menu">
        <p className="scroll"> Scroll through some technologies I've been working with:
        </p>
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
        />
      </div>
    );
  }
}
export default Technologies

