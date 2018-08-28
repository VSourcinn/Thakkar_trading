

// Begin non-ISI animation code

//function ArmFade(waitTime){
//  var time = waitTime;
//  console.log(time);
//
//  tl = new TimelineMax(delay: time});
//  tl
//  .to(mainBanner, 35, {opacity:0})
//}
//function ArmFade1(waitTime){
//  var time = waitTime;
//  console.log(time);
//
//  tl = new TimelineMax({delay: time});
//  tl
//  .to(mainBanner1, 20, {opacity:1})
//}
//function ArmAppear(waitTime){
//  var time = waitTime;
//  console.log(time);
//
//  tl = new TimelineMax({delay: time});
//  tl
//   .from(mainBanner, 18, {opacity:1,scale:2.3,top:440,left:550})
//}
//function ArmAppear1(waitTime){
//  var time = waitTime;
//  console.log(time);
//
//  tl = new TimelineMax({delay: time});
//  tl
//  .from(mainBanner1, 18, {opacity:0,scale:2.3,top:440,left:550})  
//      
//}
//function headline1Appear(waitTime){
//  var time = waitTime;
//  console.log(time);
//
//  tl = new TimelineMax({delay: time});
//  tl
//    .from(headline1, 1, {opacity:0}, '-=0.5')
//}
//function headline2Appear(waitTime){
//  var time = waitTime;
//  console.log(time);
//
//  tl = new TimelineMax({delay: time});
//  tl
//  
//   .to(headline1, 1, {opacity:0}, '-=0.5')
//    .from(headline2, 1, {opacity:0}, '-=0.5')
//}
//function headline3Appear(waitTime){
//  var time = waitTime;
//  console.log(time);
//
//  tl = new TimelineMax({delay: time});
//  tl
//    .to(headline2, 1, {opacity:0}, '-=0.5')
//    .from(headline3, 1, {opacity:0}, '-=0.5')
//}
//
//function headline4Appear(waitTime){
//  var time = waitTime;
//  console.log(time);
//
//  tl = new TimelineMax({delay: time});
//  tl 
//      .to(headline3, 1, {opacity:0}, '-=0.5')
//    .from(isi_image, 1, {opacity:0})
//        .from(isi, 1, {opacity:0}, '-=1')
//     .from(BottomBar, 1, {opacity:0}, '-=1')
//     .from(BottomBar1, 1, {opacity:0}, '-=1')
//     .from(offer, 1, {opacity:0}, '-=1')
//    .from(headline4, 1, {opacity:0}, '+=0.5')
//}
//
//function headline5Appear(waitTime){
//  var time = waitTime;
//  console.log(time);
//
//  tl = new TimelineMax({delay: time});
//  tl
//   .to(headline4, 1, {opacity:0}, '-=0.5')  
//    .from(headline5, 1, {opacity:0})
//     .from(cta, 2, {opacity:0}, '+=0.5')
//}

function imageAppear(waitTime){
  var time = waitTime;
  console.log(time);

  tl = new TimelineMax({delay: time});
  tl
    .from(text2, 1, {right:1680, opacity:0}, '-=1')
}

  function animate(){
      imageAppear(1);


//function animate(){
//   startScrolling(13000);
//    ArmAppear(0);
//    ArmAppear1(0);
//    ArmFade(4);
//    ArmFade1(2);
//    headline1Appear(2);
//    headline2Appear(4);
//    headline3Appear(7);
//    headline4Appear(11);
//    headline5Appear(17);
////  isiAppear(10);
//   
////    ArmZoom(0);
}
// End non-ISI animation code



animate();
