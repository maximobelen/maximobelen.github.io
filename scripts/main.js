window.onload = function() {
  var loader = document.getElementsByClassName('loader')[0];
  TweenMax.to(loader, 0.4, {autoAlpha:0, ease: Power2.easeOut});
  this.init();
};

var init = function(){
  var name = document.getElementsByClassName('name')[0];
  var job = document.getElementsByClassName('job')[0];
  var image = document.getElementsByClassName('image')[0];
  var background = document.getElementsByClassName('avatar')[0];

  TweenMax.fromTo(name, 0.4, {autoAlpha:0, y: 50}, {delay: 0.4, autoAlpha:1, y:0, ease: Power2.easeOut});
  TweenMax.fromTo(job, 0.4, {autoAlpha:0, y: 50}, {delay: 0.6, autoAlpha:1, y:0, ease: Power2.easeOut});
  TweenLite.fromTo(image, 0.8,  {autoAlpha:0, scaleX:0.2, scaleY:0.2}, 
    {autoAlpha:1, delay: 0.6, scaleX:1, scaleY:1, ease: Power2.easeOut});

  TweenLite.fromTo(background, 0.8,  {autoAlpha:0, scaleX:0.2, scaleY:0.2}, 
    {autoAlpha:1, delay: 0.6, scaleX:1, scaleY:1, ease: Power2.easeOut});


  addListeners();
};

var addListeners =  function(){
  var image = document.getElementsByClassName('image')[0];
  var background = document.getElementsByClassName('avatar')[0];

  image.addEventListener("mouseenter", function(){
    TweenLite.to(image, 0.4, {autoAlpha:0.9, ease: Power2.easeOut});
    TweenLite.to(background, 0.4, {scaleX:1.1, scaleY:1.1, ease: Power2.easeOut});
  }.bind(this), false);

  image.addEventListener("mouseleave", function(){
    TweenLite.to(image, 0.4, {autoAlpha:1, scaleX:1, scaleY:1, ease: Power2.easeOut});
    TweenLite.to(background, 0.4, {scaleX:1, scaleY:1, ease: Power2.easeOut});
  }.bind(this), false);

  window.addEventListener('scroll', this.onScroll, true);
};

var onScroll =  function() {

    var scrollTop = window.scrollY;
};