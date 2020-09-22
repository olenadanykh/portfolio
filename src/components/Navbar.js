
import React, * as react from 'react';
import { Grid, ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './NavBar.style.scss';
import logo from '../assets/images/logo.jpeg'
import dropdownIcon from '../assets/images/dropdown.png'

const Dropdown = ({ callbackFromParent }) => {
	const node = react.useRef();
	const handleClick = (e) => {
		if (node.current.contains(e.target)) {
			// inside click
			callbackFromParent(true);
			return;
		}
		// outside click
		callbackFromParent(false);
	};

	react.useEffect(() => {
		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);

	return (
		<Grid container ref={node}>
			<Grid className='main-nav'>
				<ListItem onClick={() => callbackFromParent(false)}>
					<Link className="nav-links" to="/home">Home</Link>
				</ListItem>
        <ListItem onClick={() => callbackFromParent(false)}>
					<Link className="nav-links" to="/about">About Me</Link>
				</ListItem>
        <ListItem onClick={() => callbackFromParent(false)}>
					<Link className="nav-links" to="/projects"> Projects</Link>
				</ListItem>
        <ListItem onClick={() => callbackFromParent(false)}>
					<Link className="nav-links" to="/contact-me"> Contact Me</Link>
				</ListItem>
				
			</Grid>
			</Grid>
	);
};

const NavBar = () => {
	const [listOpen, setListOpen] = react.useState(false);

	const myCallback = (listOpen) => {
		setListOpen(listOpen);
	};

	return (
		<Grid container className="navbar">
			<Grid >
				<Link to="/">
					<img className="logo" src={logo} alt="Logo"/>
				</Link>
			</Grid>
		
        {/* <h1 className='name'> Olena Danykh </h1> */}
				<img className='nav-logo' src={dropdownIcon} onClick={() => setListOpen(!listOpen)}/>
				
	
			<div className="dropdown">{listOpen ? <Dropdown  className="dropdown-item"callbackFromParent={myCallback} /> : null}</div>
		</Grid>
	);
};
export default NavBar;
