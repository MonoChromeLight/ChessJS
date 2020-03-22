var bishopImageName;
var Bishop = function(constructorObject) {
    this.type           = constructorObject.type;
    this.row            = constructorObject.row;
    this.col            = constructorObject.col;
    this.isWhite		    = constructorObject.isWhite;
    this.image		      = constructorObject.image;

    if (this.isWhite) {
      bishopImageName=whiteBishopImage;
    } else {
      bishopImageName=blackBishopImage;
    }
    	
    	this.figureReferance = new Figure({
        type    : this.type,
        row     : this.row,
        col     : this.col,
        isWhite : this.isWhite,
       	image 	: bishopImageName
   		});
   
};
 
Bishop.prototype.availableMoves = function(isWhitesTurn,board,x,y) {
        console.log(y,x);
        
        var topLeftEndY = y;
        var topLeftEndX = x;

        var topRightEndY = y;
        var topRightEndX = x;

        var bottomLeftEndY = y;
        var bottomLeftEndX = x;

        var bottomRightEndY = y;
        var bottomRightEndX = x;

        var diagonals=[];

        var topLeftMin=(x<y)?x:y;
          console.log(topLeftMin);
          for (var j= 1; j<=topLeftMin; j++) {

            topLeftEndX--;
            topLeftEndY--;
            if(Figure.areInBoard(topLeftEndX,topLeftEndY))
            {
              if (board[(topLeftEndY)*10+(topLeftEndX)].isEmpty) 
              {
                Figure.calculateDiagonal(x,y,topLeftEndX,topLeftEndY,diagonals);   
              }
              else{
                Figure.calculateDiagonal(x,y,topLeftEndX,topLeftEndY,diagonals);
                break;
              }
            }
          }
        //top right end
        var topRightMin=Figure.columnsAfter(x)+1<y?Figure.columnsAfter(x)+1:y;
          for (var j = 1; j <= topRightMin ; j++) 
          {
            topRightEndX++;
            topRightEndY--;
            if (Figure.areInBoard(topRightEndX,topRightEndY)) 
            {
              if (board[(topRightEndY)*10+(topRightEndX)].isEmpty) 
              {
               Figure.calculateDiagonal(x,y,topRightEndX,topRightEndY,diagonals); 
              }
              else
              {
                Figure.calculateDiagonal(x,y,topRightEndX,topRightEndY,diagonals); 
                break
              }
            }
          }
        //bottom left
        var bottomLeftMin=x+1<Figure.rowsAfter(y)+1?x+1:Figure.rowsAfter(y)+1;
          for (var j = 1; j <= bottomLeftMin ; j++) {
            bottomLeftEndX--;
            bottomLeftEndY++;
            if (Figure.areInBoard(bottomLeftEndX,bottomLeftEndY)) 
            {
              if (board[(bottomLeftEndY)*10+(bottomLeftEndX)].isEmpty) 
              {
                Figure.calculateDiagonal(x,y,bottomLeftEndX,bottomLeftEndY,diagonals);
              }
              else
              {
                Figure.calculateDiagonal(x,y,bottomLeftEndX,bottomLeftEndY,diagonals);
                break;
              }
            }
          }

        

        var bottomLeftMin=Figure.rowsAfter(y)+1<Figure.columnsAfter(x)+1?Figure.rowsAfter(y)+1:Figure.columnsAfter(x)+1;
          for (var j = 1; j <= bottomLeftMin ; j++) {
            bottomRightEndX++;
            bottomRightEndY++;
            if(Figure.areInBoard(bottomRightEndX,bottomRightEndY))
            {
              if (board[(bottomRightEndY)*10+(bottomRightEndX)].isEmpty) 
              {
                Figure.calculateDiagonal(x,y,bottomRightEndX,bottomRightEndY,diagonals);
               
              }
              else{
                Figure.calculateDiagonal(x,y,bottomRightEndX,bottomRightEndY,diagonals);
                break;
              }
            }
          }
          

 //////////////////////////////////////////////       
       Figure.drawDiagonals(diagonals,board);
       return diagonals;
 }

  Bishop.prototype.move=function(x,y,figureRef){
    //this = figureRef;
    console.log("1: "+figureRef.col);
    console.log(x);
    this.figureReferance.col=x;
    figureRef.col=x;
    this.figureReferance.row=y;
    figureRef.row=y;
    return figureRef;
  }

Bishop.prototype.render = function(context) {
      this.figureReferance.render(context);
};
