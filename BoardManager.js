var BoardManager  = {};
var isWhitesTurn=true;

BoardManager.init    =  function(canvas){
  _this          =   this;
  _this.canvas   =   canvas;
  _this.context  =   _this.canvas.getContext('2d');
  var location = {
   x: this.x,
   y: this.y
  };
  var selectedFigure;
 
  _this.characterCollection  =   [];
  _this.boardCollection      =   [];
  _this.boardReference       =   null;

  blackKingImage.onload = function(){
      _this.loadLevel();
      _this.render();
    }


}

BoardManager.loadLevel  = function(){

 var moved=false;
  Board.loadBoard(BoardConfig.TOTAL_ROWS,BoardConfig.TOTAL_COLUMNS);
///////////////////////////////////////////////////////////////////////
   var loadPawn = function() {
        var pawnMap = [
            {type:"Pawn",row:8, col:0, isWhite:true},
            {type:"Pawn",row:8, col:1, isWhite:true},
            {type:"Pawn",row:8, col:2, isWhite:true},
            {type:"Pawn",row:8, col:3, isWhite:true},
            {type:"Pawn",row:8, col:4, isWhite:true},
                /////////////////////////////
            {type:"Pawn",row:1, col:5, isWhite:false},
            {type:"Pawn",row:1, col:6, isWhite:false},
            {type:"Pawn",row:1, col:7, isWhite:false},
            {type:"Pawn",row:1, col:8, isWhite:false},
            {type:"Pawn",row:1, col:9, isWhite:false},
            /////////////////////////////////////////
            {type:"King",row:9, col:3, isWhite:true},
            {type:"King",row:0, col:6, isWhite:false}
        ]

      


        for(var i = 0; i < pawnMap.length; i++) {
            console.log(pawnMap[i].type);
            var figureCoordinate  = pawnMap[i];

             if (pawnMap[i].type=="King") 
            {
              var figureReference   = new King(figureCoordinate); 
            }
            if (pawnMap[i].type=="Pawn") 
            {
              var figureReference   = new Pawn(figureCoordinate); 
            }


            
            _this.characterCollection.push(figureReference);
              if (pawnMap[i].row==0) 
              {
                 var pawnPosition=pawnMap[i].col;
                 _this.boardCollection[pawnPosition].isEmpty=false;
              } 
              else
              {
                var pawnPosition=''+pawnMap[i].row+pawnMap[i].col;
                 _this.boardCollection[pawnPosition].isEmpty=false;
               }

          
        }
    };

    loadPawn();

    ///////////////////////////////////////////////////////
};
BoardManager.selectTile = function(selectedX,selectedY){
  var x      = Math.floor(selectedX / BoardConfig.TILE_SIZE);
  var y      = Math.floor(selectedY / BoardConfig.TILE_SIZE);

 

  for (var i = 0; i < _this.characterCollection.length; i++) {  

    if ((_this.characterCollection[i].row==y)&&(_this.characterCollection[i].col==x&&!_this.boardCollection[y*10+x].isEmpty)&&isWhitesTurn==_this.characterCollection[i].isWhite) {
          Tile.MarkTile(_this.boardCollection[y*10+x],x,y);
           // Pawn.prototype.move( _this.characterCollection[_this.characterCollection[i].col]);
           // _this.render();
           // console.log(selectedX+" = "+_this.characterCollection[i].col);
          location.y=Figure.prototype.calculateMovement( _this.characterCollection[_this.characterCollection[i].col]);
          selectedFigure=i;			
           var moved=false;
           
           //Figure.flipBoard(_this.characterCollection);
    }
  }
   console.log(selectedFigure); 

    if (_this.boardCollection[y*10+x].isEmpty){
        
        Tile.MakeGreen(_this.boardCollection[y*10+x],x,y);
      	Pawn.prototype.move(_this.characterCollection[selectedFigure],x,y);
        // _this.render();
        console.log(_this.characterCollection[selectedFigure]); 
        isWhitesTurn=!isWhitesTurn;
        moved=true;
      }

      if (moved){
      		_this.render();
      }
    

}

BoardManager.selectFigure= function() {
var x= _this.x;
var y= _this.y;
console.log(this.x);
console.log(_this.col);
console.log(x+'  '+y);
};

BoardManager.render = function() {
    for(var i = 0; i < _this.boardCollection.length; i++) {
       _this.boardCollection[i].render(_this.context);
       // console.log(_this.boardCollection[i]);
   }

   for(var i = 0; i < _this.characterCollection.length; i++) {
       _this.characterCollection[i].render(_this.context);
   }
};
BoardManager.clear = function() {
    _this.context.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
    _this.DrawBoard(_this.context); 
};