import React, { Component } from 'react'
import url from "../../media/img/1c4eab1f1de6313e9ac9039651fe24c4.jpg"
export default class Card extends Component {
    render() {
        return (
            <div className="col">
					<div className="col_status new">
						New
					</div>
					<div className="col_face">
						<a href="single.html">
							<img src={url} alt="" />
						</a>
					</div>
					<div className="col_description">
						<a href="single.html" className="page">
        <h3 className="col_title">{this.props.title}</h3>
							<p className="col_text">
								{this.props.description}
							</p>
						</a>
						<ul className="col_size">
							<li className="active">25см/800гр</li>
							<li>32см/1200гр</li>
						</ul>
						<ul className="col_footer">
							<li>
								<h3 className="col_price">5900 руб.</h3>
							</li>
							<li>
								<button  className="btn to_order">
									В корзину
								</button>
							</li>
						</ul>
					</div>
				</div>
        )
    }
}