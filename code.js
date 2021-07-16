var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----




function draw() {
  background("Coral")
  for (var i=50;i<400;i=i+50){
  fill("Yellow");
  ellipse(i,48,33,27);
  fill("brown");
  ellipse(i,40,17,10);
  }
 
  for (var i = 50; i < 400; i=i+50) 
{
  strokeWeight(1)
  fill("red")
  ellipse(i,99,28,28);
   fill("green")
  ellipse(i,90,17,10);
}
for (var i = 50; i < 400; i=i+50) 
{
  var under=createSprite(i,163,15,15);
under.shapeColor="Gainsboro";
fill("SaddleBrown");
noStroke();
ellipse(i,148,27,17);
}
for (var i =50; i < 400; i=i+50) {
  fill("purple")
ellipse(i,215,23,27);
}
for(var i=0;i<350;i=i+50){
fill("green")
shape((i-10)+50,208,(i+10)+50,208,(i-1)+50,195)
}
for(var i=0; i<350;i = i+50)
{
  
  fill("Orangered");
  shape((i-15)+50, 261, (i+10)+50, 261,(i-1)+50,279) 
  fill("green")
  ellipse(i+50,257,15,10);
}
for(var i=50; i<400;i = i+50)
{
  fill("ForestGreen")
  ellipse(i,310,30,20)
}
for(var i=0;i<350;i=i+50){
  strokeWeight(5)
  stroke("DarkGreen")
  line((i-15)+50,310,(i+10)+50,307);

}


 


 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
