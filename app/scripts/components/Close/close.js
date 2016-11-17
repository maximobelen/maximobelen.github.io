var React = require('react');
var ReactDOM = require('react-dom');
var model = require('./close-model');
var TweenMax = require('gsap');
 
var Close = React.createClass({

	componentDidMount: function() {
		this.container = ReactDOM.findDOMNode(this);
		this.image = this.container.getElementsByClassName('close-image')[0];
		
		if (this.props.grey) {
			this.image.src = model.closeIconGrey;
		} else {
			this.image.src = model.closeIcon;
		}
	},

	handleMouseDown: function(){
        if (typeof this.props.onClicked === 'function') {
            this.props.onClicked();
        }
	},

	handleMouseEnter: function(){
		TweenMax.to(this.container, 0.4, {rotation: "90", ease: Expo.easeOut});

	},

	handleMouseLeave: function(){
		TweenMax.to(this.container, 0.4, {rotation: "-90", ease: Expo.easeOut});

	},

	animateIn: function(){
		TweenMax.to(this.container, 0.4, {delay: 0.4, autoAlpha: 1, ease: Expo.easeOut});

	},

	animateOut: function(){
		TweenMax.to(this.container, 0.4, {delay: 0.4, autoAlpha: 0, ease: Expo.easeOut});
	},

	render: function() {
		return (
			<div className="close" onMouseDown={this.handleMouseDown} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
				<img className="close-image"></img>
			</div>
		);
	}
});

module.exports = Close;