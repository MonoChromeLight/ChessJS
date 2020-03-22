var Figure = function(constructorObject) {
	this.type	=	constructorObject.type;
    this.row    =   constructorObject.row;
    this.col    =   constructorObject.col;
    this.isWhite=   constructorObject.isWhite;
    this.image  =   constructorObject.image;
    this.side   =   BoardConfig.TILE_SIZE;


};
Figure.prototype.render = function(context) {

    var x      = (this.col * BoardConfig.TILE_SIZE);
    var y      = (this.row * BoardConfig.TILE_SIZE);
	DrawFigure(x,y,this.image);

};


Figure.rowsAfter = function(y)
{
  return BoardConfig.TOTAL_ROWS-y;
}

Figure.columnsAfter = function(x)
{
  return BoardConfig.TOTAL_COLUMNS-x;
}

Figure.calculateDiagonal = function(x1,y1,x2,y2,diagonalResults) {
  
    n= Math.abs(x2-x1);
        
    Xd =  (x2-x1)/n;
    Yd =  (y2-y1)/n;
        
    for (var k = 1; k <= n; k++) {
      diagonalResults.push((y1+k*Yd)*10+(x1+k*Xd));
    }
    return diagonalResults;
}

Figure.drawDiagonals = function(diagonals,board)
{
    for (var i = 0; i < diagonals.length; i++) {
           if(board[diagonals[i]].isEmpty)
            {
            // empty
              Tile.MakeGreen(board[diagonals[i]],board[diagonals[i]].col,board[diagonals[i]].row);
            }
            else
            {
              //not empty
              Tile.MarkTile(board[diagonals[i]],board[diagonals[i]].col,board[diagonals[i]].row);
            }
    }
}

Figure.areInBoard= function(x,y)
{
  if(x>=0&&x<=9&&y>=0&&y<=9)
  {
    //console.log(x);
    return true;
    
  }
  else
  {
    return false;
  }
}


Figure.prototype.calculateMovement = function(figureRef) {
	this.figure = figureRef;
var possibleMoves = [];
var x=this.figure.figureReferance.col;
var y =this.figure.figureReferance.row;

if (this.figure.figureReferance.type=="Pawn") {
 	if (this.figure.figureReferance.isWhite) 
 	{
 		// Tile.MakeGreen(_this.boardCollection[y*10+x],x,y-1);
        y--;
 		
 	} 
 	else 
 	{
 		// Tile.MakeGreen(_this.boardCollection[y*10+x],x,y+1);
 		y++;
 	}
if (this.figure.figureReferance.type=="Knight") {
    if (this.figure.figureReferance.isWhite) 
     {
         // Tile.MakeGreen(_this.boardCollection[y*10+x],x,y-1);
         y-=2;
         x-=1;
     } 
     else 
     {
         // Tile.MakeGreen(_this.boardCollection[y*10+x],x,y+1);
         y+=2;
         x+=1;
     }
}

possibleMoves.push(y,x);

 	return possibleMoves;
 }
}
