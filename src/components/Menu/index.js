import React, { Component } from 'react'
import Card from "./Card";
export default class Menu extends Component {
    render() {
        return (
            <section className="menu">
		<div className="container">
			
			<div className="wrap">
				<Card
                title="Card 1"
                description ="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima magnam vel fugit ullam vitae distinctio similique quaerat temporibus, dolorem molestias." some text
                />
			</div>
			
		</div>
	</section>
        )
    }
}