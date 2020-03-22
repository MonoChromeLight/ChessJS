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
 
 
  _this.characterCollection  =   [];
  _this.boardCollection      =   [];
  _this.boardReference       =   null;

  blackKingImage.onload = function(){
      _this.loadLevel();
      _this.render();
      console.log("begin");
    }


}

BoardManager.loadLevel  = function(){

  var moved=false;
  var occupiedTile;
  var possibleMoves=[];
  var selectedFigure=0;
  var moved = false;
  var moves  =  [];
  var currentFigure;
  Board.loadBoard(BoardConfig.TOTAL_ROWS,BoardConfig.TOTAL_COLUMNS);
///////////////////////////////////////////////////////////////////////
   var loadFigures = function() {
        var figureMap = [
            // {type:"Pawn",row:8, col:0, isWhite:true},
            // {type:"Pawn",row:7, col:1, isWhite:true},
            // {type:"Pawn",row:8, col:2, isWhite:true},
            // {type:"Pawn",row:7, col:3, isWhite:true},
            // {type:"Pawn",row:8, col:4, isWhite:true},
            //     /////////////////////////////
             //{type:"Pawn",row:1, col:5, isWhite:false},
            // {type:"Pawn",row:1, col:6, isWhite:false},
            // {type:"Pawn",row:1, col:7, isWhite:false},
            // {type:"Pawn",row:1, col:8, isWhite:false},
            // {type:"Pawn",row:1, col:9, isWhite:false},
            // /////////////////////////////////////////
            // {type:"King",row:9, col:3, isWhite:true},
            // {type:"King",row:0, col:6, isWhite:false},
            // //////////////////////////////////////////
            // {type:"Queen",row:9, col:4, isWhite:true},
            // {type:"Queen",row:0, col:5, isWhite:false},
            // ///////////////////////////////////////////
             {type:"Bishop",row:9, col:6, isWhite:true},
            {type:"Bishop",row:9, col:2, isWhite:true},////
            // ///////////////////////////////////////////
            // {type:"Knight",row:9, col:1, isWhite:true},
            // {type:"Knight",row:0, col:8, isWhite:false},
            ///////////////////////////////////////////
          //  {type:"Rooks",row:9, col:0, isWhite:true},
          // //  {type:"Rooks",row:0, col:9, isWhite:false},
          //     {type:"Pawn",row:3, col:7, isWhite:false},
          //     {type:"Pawn",row:3, col:3, isWhite:false},
          //     {type:"Pawn",row:1, col:5, isWhite:false},
        ]

      


        for(var i = 0; i < figureMap.length; i++) {
            console.log(figureMap[i].type);
            var figureCoordinate  = figureMap[i];

            if (figureMap[i].type=="King") 
            {
              var figureReference   = new King(figureCoordinate); 
            }
            if (figureMap[i].type=="Queen") 
            {
              var figureReference   = new Queen(figureCoordinate); 
            }
            if (figureMap[i].type=="Pawn") 
            {
              var figureReference   = new Pawn(figureCoordinate); 
            }
            if (figureMap[i].type=="Bishop") 
            {
              var figureReference   = new Bishop(figureCoordinate); 
            }
            if (figureMap[i].type=="Knight") 
            {
              var figureReference   = new Knight(figureCoordinate); 
            }
            if (figureMap[i].type=="Rooks") 
            {
              var figureReference   = new Rooks(figureCoordinate); 
            }
            
            _this.characterCollection.push(figureReference);
            var figurePosition=figureMap[i].row*10+figureMap[i].col;
             _this.boardCollection[figurePosition].isEmpty=false;
                     
        }
    };

    loadFigures();

    ///////////////////////////////////////////////////////
};
BoardManager.selectTile = function(selectedX,selectedY)
{
  var x      = Math.floor(selectedX / BoardConfig.TILE_SIZE);
  var y      = Math.floor(selectedY / BoardConfig.TILE_SIZE);
 
 
 
    for (var i = 0; i < _this.characterCollection.length; i++) {

      if ((_this.characterCollection[i].row==y)&&(_this.characterCollection[i].col==x)&&isWhitesTurn==_this.characterCollection[i].isWhite) 
      {
        if (!_this.boardCollection[y*10+x].isEmpty) 
        {
           _this.render();
          Tile.MarkTile(_this.boardCollection[y*10+x],x,y);
          currentFigure=_this.characterCollection[i];
          moves = _this.characterCollection[i].availableMoves(isWhitesTurn,_this.boardCollection,x,y);
          _this.characterCollection.splice(i,1);
          _this.boardCollection[y*10+x].isEmpty=true;
        }
      }  
      else if (_this.boardCollection[y*10+x].isEmpty) 
      { 
        for (var i = 0; i < moves.length; i++) 
        {
        
          newX=moves[i]%10;
          newY=Math.floor(moves[i]/10);

          if(x==newX&&y==newY)
          {
            _this.characterCollection.push(currentFigure.move(newX,newY,currentFigure));
            _this.boardCollection[y*10+x].isEmpty=false;
            _this.render();
            break;
          }
        }
      }
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
   }

   for(var i = 0; i < _this.characterCollection.length; i++) {
       _this.characterCollection[i].render(_this.context);
   }
};
BoardManager.clear = function() {
    _this.context.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
    _this.DrawBoard(_this.context); 
};