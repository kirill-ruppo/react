import React, { Component } from "react";
// import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
		<div className="container">
			<div className="right">
				<nav>
					<a href="actions.html">
						Акции
					</a>
					<a href="index.html" className="active">Меню</a>
				</nav>
			</div>


			<button className="mobile_button" >
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	</header>
    );
  }
}
