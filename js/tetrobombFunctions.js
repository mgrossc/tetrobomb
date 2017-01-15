class Tetrobombino {
   constructor(design) {
      this.shape = design;
      this.cssClass = 'tetrobombino-' + this.shape;
   }
}

const design = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];

var nextForm = Math.floor(Math.random() * design.length);

let newTetrobombino = new Tetrobombino(design[nextForm]);

console.log(newTetrobombino);

$(document).ready(function() {
   $(".tetrobombino").on("click", function() {
  $this = $(this);

  $this.hasClass("r0") ? 
  $this.removeClass("r0").addClass("r1") : $this.hasClass("r1") ? 
  $this.removeClass("r1").addClass("r2") : $this.hasClass("r2") ? 
  $this.removeClass("r2").addClass("r3") : $this.hasClass("r3") && 
  $this.removeClass("r3").addClass("r0");
});
});


/* Shake's Pier */

// var tube = "e";
// function iffy(a) {
//   return "e" === a ? !0 : !1;
// }
// var question = iffy(tube);
// question ? console.log(tube) : console.log(!tube);