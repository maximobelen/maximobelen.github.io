var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./about-model');
var TweenMax = require('gsap');
var Close = require('../Close/close');

var About = React.createClass({

	componentDidMount: function() {
		this.container = ReactDOM.findDOMNode(this);
		this.body = document.body;
		this.divider = this.container.getElementsByClassName('divider')[0];
		this.scrollContainer = this.container.getElementsByClassName('scroll-container')[0];

	},

	closeHandler: function(value) {
		this.hide();
	},

	hide: function() {
		TweenMax.to(this.container, 0.4, {autoAlpha: 0, zIndex: -100});
		TweenMax.set(this.body, {overflow: 'auto'});
		this.refs.close.animateOut();
	},

	show: function() {
		TweenMax.to(this.container, 0.4, {autoAlpha: 1, zIndex: 1000});
		TweenMax.set(this.body, {overflow: 'hidden'});
		var height = window.innerHeight - 50 + 'px';
		TweenMax.set(this.scrollContainer, {height: height});
		this.refs.close.animateIn();
	},

	render: function() {
		return (
			<div className="about">
				<div className="close-icon">
					<Close ref={'close'} onClicked={this.closeHandler} grey={true} ></Close>
				</div>
				<div className="scroll-container">
					<div className="title">{model.title}</div>
					<div className="description">
						{
						  	model.description.map(function(object, i){	 
								return <p key={i} ref="{object.ref}" >
								{model.description[i]}
								</p>;
						    }.bind(this))
						}

					</div>
					<div className="phrase-container">
						<div className="phrase">"{model.phrase}"</div>
						<div className="author">{model.author}</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = About;