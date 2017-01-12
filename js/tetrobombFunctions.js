class Tetrobombino {
   constructor(design) {
      this.shape = design;
      this.cssClass = 'tetrobombino-' + this.shape;
   }
}

const designs = ['I', 'O', 'T', 'S', 'Z', 'J', 'L'];

var nextRandomTetrobombino = Math.floor(Math.random() * designs.length);

let newTetrobombino = new Tetrobombino(designs[nextRandomTetrobombino]);

console.log(newTetrobombino);


$(document).ready(function() {
   $('.tetrobombino').on('click', function() {

      $this = $(this);

      if ($this.hasClass('rotate0')) {
         $this.removeClass('rotate0').addClass('rotate1');
      } else if ($this.hasClass('rotate1')) {
         $this.removeClass('rotate1').addClass('rotate2');
      } else if ($this.hasClass('rotate2')) {
         $this.removeClass('rotate2').addClass('rotate3');
      } else if ($this.hasClass('rotate3')) {
         $this.removeClass('rotate3').addClass('rotate0');
      }
   });
});