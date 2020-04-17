import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
		<div className="container upper">
			<nav>
				<a href="actions.html"> Акции </a>
				<a href="index.html" className="active">Меню</a>
			</nav>
		</div>
	</footer>

        )
    }
}