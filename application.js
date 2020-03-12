var canvasElement = document.getElementById("game-board");
BoardManager.init(canvasElement);

   var canvas = document.getElementById('game-board');
   var context = canvas.getContext('2d');

 function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };

      }
 // document.addEventListener('click', function(e) {
 //        var mousePos = getMousePos(canvas, evt);
 //        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
 //        console.log(message);
 //      }

document.addEventListener('click', function(e) {
    BoardManager.selectTile(e.x-15,e.y-15);
   
});