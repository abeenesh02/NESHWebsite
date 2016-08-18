

window.onload = function() {
  var pic = document.getElementById("selfie");
  
  
  
  var one = document.getElementById("lineone");
  var two = document.getElementById("linetwo");
  var three = document.getElementById("linethree");
  var four = document.getElementById("linefour");
  var five = document.getElementById("linefive");
  var six = document.getElementById("linesix");
  var seven = document.getElementById("lineseven");
  var eight = document.getElementById("lineeight");
  var nine = document.getElementById("linenine");
  var ten = document.getElementById("lineten");
  var eleven = document.getElementById("lineeleven");

  var word = document.getElementById("word")

  var icon = document.getElementById("main")

  var bar = document.getElementById("bar")

  var talkone = document.getElementById("talkone")

  var talktwo = document.getElementById("talktwo")

  var talkthree = document.getElementById("talkthree")

  var mail = document.getElementById("mail")

  var tl = new TimelineLite;
  if(innerWidth > 939) {
  	tl.to(pic, 1.5, {opacity:1})
  	.to(talkone, 1.25, {opacity:1})
  	.to(talkone, 0.25, {opacity:0})
    // .to(talktwo, 2, {opacity:1})
    // .to(talktwo, 0.25, {opacity:0})
  	.to(talkthree, 1.25, {opacity:1})
  	.to(talkthree, 0.25, {opacity:0})
  	.to(word, 1, {opacity:1, x: -100})
  	.to(mail, 0.75, {opacity:1}) 	
  	.to(icon, 1, {opacity:1, x: 25})
  	.to(bar, 1, {opacity:1});
  } else {
      tl.to(pic, 1.5, {opacity:0.3})
      	// .to(talkone, 2, {opacity:1});
      	// .to(talkone, 0.25, {opacity:0})
      	// .to(talktwo, 2, {opacity:1})
      	// .to(talktwo, 0.25, {opacity:0})
      	// .to(talkthree, 2, {opacity:1})
      	// .to(talkthree, 0.25, {opacity:0})
      	// .to(word, 1, {opacity:1, x: -100})
      	.to(mail, 0.75, {opacity:1}) 	
      	.to(icon, 1, {opacity:0.9, x: 25});
      	// .to(bar, 1, {opacity:1});
  }


  // TweenLite.to(pic,1.5, {opacity:1});

  // TweenMax.staggerTo([one, two, three, four, five, six, seven, eight, nine, ten, eleven], 2, {opacity:1, x: 10} 1);
}




