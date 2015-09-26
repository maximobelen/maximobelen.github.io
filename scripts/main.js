window.onload = function() {
  var loader = document.getElementsByClassName('loader')[0];
  TweenMax.to(loader, 0.4, {autoAlpha:0, ease: Power2.easeOut});
  this.init();
};

var imageHide = true;
var headerHide = false;
var isAnimating = false;
var sections = [{section:document.getElementById('about-me'), hide: true},
    {section:document.getElementById('experience'), hide: true},
    {section:document.getElementById('education'), hide: true},
    {section:document.getElementById('skills'), hide: true},
    {section:document.getElementById('contact'), hide: true}];

var init = function(){
  var name = document.getElementById('name');
  var job = document.getElementsByClassName('job')[0];
  var image = document.getElementsByClassName('image')[0];
  var background = document.getElementsByClassName('avatar')[0];

  TweenMax.fromTo(name, 0.4, {autoAlpha:0, y: 50}, {delay: 0.4, autoAlpha:1, y:0, ease: Power2.easeOut});
  TweenMax.fromTo(job, 0.4, {autoAlpha:0, y: 50}, {delay: 0.6, autoAlpha:1, y:0, ease: Power2.easeOut});

  addListeners();
};

var addListeners =  function(){
  var image = document.getElementsByClassName('image')[0];
  var background = document.getElementsByClassName('avatar')[0];

  image.addEventListener("mouseenter", function(){
    TweenLite.to(image, 0.4, {autoAlpha:0.9, ease: Power2.easeOut});
    TweenLite.to(background, 0.4, {scaleX:1.05, scaleY:1.05, ease: Power2.easeOut});
  }.bind(this), false);

  image.addEventListener("mouseleave", function(){
    TweenLite.to(image, 0.4, {autoAlpha:1, scaleX:1, scaleY:1, ease: Power2.easeOut});
    TweenLite.to(background, 0.4, {scaleX:1, scaleY:1, ease: Power2.easeOut});
  }.bind(this), false);

  window.addEventListener('scroll', this.onScroll, true);
};

var onScroll =  function() {
  
    var scrollTop = window.scrollY;
    animateImage(scrollTop);
    animateSection(scrollTop);
    animateHeader(scrollTop);
};

var animateImage =  function(scrollTop) {
  var image = document.getElementsByClassName('image')[0];
  var background = document.getElementsByClassName('avatar')[0];

  if(imageHide && scrollTop > 150){
    imageHide = false;
    TweenLite.fromTo(image, 0.8,  {autoAlpha:0, scaleX:0.2, scaleY:0.2}, 
      {autoAlpha:1, scaleX:1, scaleY:1, ease: Power2.easeOut});

    TweenLite.fromTo(background, 0.8,  {autoAlpha:0, scaleX:0.2, scaleY:0.2}, 
      {autoAlpha:1, scaleX:1, scaleY:1, ease: Power2.easeOut});
  }else{
    if(!imageHide && scrollTop < 100){
      imageHide = true;
      TweenLite.fromTo(image, 0.8,  {autoAlpha:1, scaleX:1, scaleY:1}, 
        {autoAlpha:0, scaleX:0.2, scaleY:0.2, ease: Power2.easeOut});

      TweenLite.fromTo(background, 0.8,  {autoAlpha:1, scaleX:1, scaleY:1}, 
        {autoAlpha:0, scaleX:0.2, scaleY:0.2, ease: Power2.easeOut});
    }
  }
};

var animateHeader =  function(scrollTop) {
  var name = document.getElementById('name');
  var job = document.getElementsByClassName('job')[0];

  if(headerHide  && scrollTop < 200){
    headerHide = false;
    TweenMax.fromTo(name, 0.4, {autoAlpha:0, y: 50}, {autoAlpha:1, y:0, ease: Power2.easeOut});
    TweenMax.fromTo(job, 0.4, {autoAlpha:0, y: 50}, {delay:0.2, autoAlpha:1, y:0, ease: Power2.easeOut});
    
  }else{
    if(!headerHide && scrollTop > 300){
      headerHide = true;
      TweenMax.fromTo(name, 0.4, {autoAlpha:1, y: 0}, {delay:0.2, autoAlpha:0, y:50, ease: Power2.easeOut});
      TweenMax.fromTo(job, 0.4, {autoAlpha:1, y: 0}, {autoAlpha:0, y:50, ease: Power2.easeOut});
    }
  }
};
var animateSection =  function(scrollTop) {
  if(!isAnimating){
    for (var i = 0; i < sections.length; i++) {
      var element = sections[i];
      var section = element.section;
      var timeToShow = (section.offsetTop - 400 < scrollTop);
      var timeToHide = ((section.offsetTop + section.clientHeight < scrollTop) || (section.offsetTop - 500 > scrollTop));
      if( timeToShow && !timeToHide && element.hide){
        element.hide = false;
        isAnimating = true;
        TweenMax.fromTo(section, 0.4, {y:100},{autoAlpha:1, y:0, ease: Power2.easeOut, 
          onComplete: function(){
            isAnimating = false;
          }.bind(this)
        });
      }else{
        if(!element.hide){
          if(timeToHide){
            element.hide = true;
            TweenMax.fromTo(section, 0.4, {y:0},{autoAlpha:0, y:100, ease: Power2.easeOut,
              onComplete: function(){
                isAnimating = false;
              }.bind(this)
            });
          }
        }
      }
    }
  }
};
