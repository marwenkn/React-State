import './App.css';
import React, { Component } from 'react';
import Profile from './Componants/Profile.jsx'
import Sboui from './Componants/Pics/Sbouii.jpg'
import Soliman from './Componants/Pics/Soliman.jpg'
import Dalanda from './Componants/Pics/Dalanda.jpg'
import Zaineb from './Componants/Pics/Zaineb.jpg'
import Fouchika from './Componants/Pics/Fouchika.jpg'
import Fadhila from './Componants/Pics/Fadhila.jpg'
import Azza from './Componants/Pics/Azza.jpg'
import Jannet from './Componants/Pics/Jannet.jpg'


class App extends React.Component {

	constructor(props) {
		super(props)
		this.ProfileStyle = {
			display : "flex",
			flexWrap : "wrap"
		}
	}

render() {
	return (
		<div style = {this.ProfileStyle}>
			<Profile FullName="Sboui" Profession="Psychologist's courier" Bio="main character" Img={Sboui}  />
			<Profile FullName="Soliman" Profession="Psychologist" Bio="main character" Img={Soliman}  />
			<Profile FullName="Dalanda" Profession="Psychologist's secretary" Bio="main character" Img={Dalanda}  />
			<Profile FullName="Zaineb" Profession="Psychologist's wife" Bio="main character" Img={Zaineb}  />
			<Profile FullName="Fouchika" Profession="Gardian" Bio="main character" Img={Fouchika}  />
			<Profile FullName="Fadhila" Profession="Soliman and Sboui's mother" Bio="main character" Img={Fadhila}  />
			<Profile FullName="Azza" Profession="Sboui's Wife" Bio="main character" Img={Azza}  />
			<Profile FullName="Jannet" Profession="seeier" Bio="main character" Img={Jannet}  />
		</div>
	);
}
}

export default App;