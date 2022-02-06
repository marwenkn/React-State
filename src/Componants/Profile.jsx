import React, { Component } from 'react';

class Profile extends Component {

	constructor(props) {
		super(props)
		this.state = {
			display : true
		}

		//this is CSS

		this.divContainerStyle = {
			margin : "10px"
		}
		this.buttonStyle = {
			backgroundColor : "#008CBA", /* Blue */
			border : "none",
			color : "white",
			padding : "15px 32px",
			textAlign : "center",
			textDecoration : "none",
			display : "inline-block",
			fontSize : "16px",
			width : "300px",
			cursor : "pointer"
		}

		this.textStyle = {
			textAlign : "center",
			margin : "16px"
		}
	}

	display (){
		this.state.display ? this.setState({display : false}) : this.setState({display : true})
	}

	render() {
		if(this.state.display === true){
			return (
				<div style = {this.divContainerStyle}>
					<button style = {this.buttonStyle} onClick = { () => this.display() } > {this.props.FullName} </button>
					<div class="card">
			            <div class="text">
			                <img src={this.props.Img} />
			                <h3 style = {this.textStyle}>{this.props.FullName}</h3>
							<p style = {this.textStyle}>{this.props.Profession}</p>
							<p style = {this.textStyle}>{this.props.Bio}</p>
			            </div>
			       </div>
			    </div>
			);
		}
		else{
			return(
				<div style = {this.divContainerStyle}>
					<button style = {this.buttonStyle} onClick = { () => this.display() }> {this.props.FullName} </button>
				</div>
			);
		}
	}
}

export default Profile;
