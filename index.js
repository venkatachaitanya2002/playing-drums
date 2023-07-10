var leen=document.querySelectorAll('.drum').length
var i=0
var sounds=['crash','kick-bass','snare','tom-1','tom-2','tom-3','tom-4']
while(i<leen){
  document.querySelectorAll('.drum')[i].addEventListener('click', function(){
    var ht=this.innerHTML;
    makesound(ht)
  
  })

  i++
}
document.addEventListener('keypress', function(eeevent){
  makesound(eeevent.key)

})
function makesound(key){
  switch (key) {
    case 'w':
      var aud=new Audio('sounds/crash.mp3')
      aud.play()

      break;
    case 'a':
    var aud=new Audio('sounds/kick-bass.mp3')
    aud.play()
      break;
    case 's':
    var aud=new Audio('sounds/snare.mp3')
    aud.play()
        break;
    case 'd':
    var aud=new Audio('sounds/tom-1.mp3')
    aud.play()
      break;
    case 'j':
    var aud=new Audio('sounds/tom-2.mp3')
    aud.play()

      break;
    case 'k':
    var aud=new Audio('sounds/tom-3.mp3')
    aud.play()
      break;
    case 'l':
    var aud=new Audio('sounds/tom-4.mp3')
    aud.play()

      break;
    default:console.log(ht);

  }
}
