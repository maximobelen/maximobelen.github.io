var React = require('react');
var model = require('./landing-model');
var Hero = require('../Hero/hero');
var DescriptionCanvas = require('../DescriptionCanvas/descriptionCanvas');
var ProjectsPreview = require('../ProjectsPreview/projectsPreview');
var AboutPreview = require('../AboutPreview/aboutPreview');
var InspirationalPreview = require('../InspirationalPreview/inspirationalPreview');
var ScrollManager = require('scroll-manager');
var Contact = require('../Contact/contact');

var Landing = React.createClass({

  componentDidMount: function() {
    this.scroller =  new ScrollManager();
    this.scroller.scrollTop({element: document.body, duration: 0.4, ease:'easeOutExpo'});
    window.addEventListener('scroll', this.refs.descriptionCanvas.onScroll, true);
  },
  
  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.refs.descriptionCanvas.onScroll, true);
  },

  render: function() {    
  	return (
        <div id="landing">
          <Hero ref={'hero'}></Hero>
          <DescriptionCanvas ref={'descriptionCanvas'}></DescriptionCanvas>
          <ProjectsPreview></ProjectsPreview>
          <AboutPreview></AboutPreview>
          <Contact></Contact>
        </div>
      );
    }
});

module.exports = Landing;