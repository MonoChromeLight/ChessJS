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

          for (; topLeftMin > 0; topLeftMin--) {
            topLeftEndX--;
            topLeftEndY--;
          }

        calculateDiagonal(x,y,topLeftEndX,topLeftEndY,diagonals);

        //top right end
        var topRightMin=(BoardConfig.TOTAL_ROWS-(x+1)<(BoardConfig.TOTAL_ROWS-(BoardConfig.TOTAL_ROWS-y)))?BoardConfig.TOTAL_COLUMNS-(x+1):(BoardConfig.TOTAL_ROWS-(BoardConfig.TOTAL_ROWS-y));
          for (var j = 1; j <= topRightMin ; j++) 
          {
            topRightEndX++;
            topRightEndY--;
          }

        calculateDiagonal(x,y,topRightEndX,topRightEndY,diagonals);

        //bottom left
        var bottomLeftMin=(BoardConfig.TOTAL_COLUMNS-(BoardConfig.TOTAL_COLUMNS-x)<BoardConfig.TOTAL_ROWS-(y+1))?BoardConfig.TOTAL_COLUMNS-(BoardConfig.TOTAL_COLUMNS-x):BoardConfig.TOTAL_ROWS-(y+1);

          for (var j = 1; j <= bottomLeftMin ; j++) {
            bottomLeftEndX--;
            bottomLeftEndY++;
            //console.log(bottomLeftEndX, bottomLeftEndY);
          }

        calculateDiagonal(x,y,bottomLeftEndX,bottomLeftEndY,diagonals);

        var bottomLeftMin=(BoardConfig.TOTAL_ROW-(y+1)<(BoardConfig.TOTAL_COLUMNS-(x+1)))?(BoardConfig.TOTAL_ROW-(y+1)):(BoardConfig.TOTAL_COLUMNS-(x+1));
          for (var j = 1; j <= bottomLeftMin ; j++) {
            bottomRightEndX++;
            bottomRightEndY++;
            console.log(bottomRightEndX, bottomRightEndY);
          }
          calculateDiagonal(x,y,bottomRightEndX,bottomRightEndY,diagonals);


        console.log("diag func"+diagonals);

 //////////////////////////////////////////////       
       drawDiagonals(diagonals,board);
 }

calculateDiagonal = function(x1,y1,x2,y2,diagonalResults) {
  
    n= Math.abs(x2-x1);
        
    Xd =  (x2-x1)/n;
    Yd =  (y2-y1)/n;
        
    for (var k = 1; k <= n; k++) {
      diagonalResults.push((y1+k*Yd)*10+(x1+k*Xd));
      //console.log(k,(y1+k*Yd)*10+(x1+k*Xd));
    }
    return diagonalResults;
}

drawDiagonals = function(diagonals,board)
{
    for (var i = 0; i < diagonals.length; i++) {
           if(board[diagonals[i]].isEmpty)
            {
            //  console.log("yes");
              Tile.MakeGreen(board[diagonals[i]],board[diagonals[i]].col,board[diagonals[i]].row);
            }
            else
            {
              //not empty
              Tile.MarkTile(board[diagonals[i]],board[diagonals[i]].col,board[diagonals[i]].row);
            }
    }
}

Bishop.prototype.test = function() {
  if(y>=0&&y<BoardConfig.TOTAL_ROWS&&x>=0&&x<BoardConfig.TOTAL_COLUMNS)
  {
    console.log(y,x);
    var diagonals=[];
    //top left
    if(y==0&&x==0)
    {
      for (var i = 1; i < BoardConfig.TOTAL_ROWS; i++) 
      {
        diagonals.push((y+i)*10+x+i);
      }
    }

    //top right
    if(y==0&&x==9)
    {
      for (var i = 1; i < BoardConfig.TOTAL_ROWS; i++) 
      {
        diagonals.push((y+i)*10+x-i);
      }
    }

    //bottom right
    if(y==9&&x==9){
      for (var i = y; i > 0; i--) 
      {
        diagonals.push((y-i)*10+x-i);
      }
    }

    //bottom left
    if(y==9&&x==0)
    {
      for (var i = y; i > 0; i--) 
      {
        diagonals.push((y-i)*10+x+i);
      }
    }

    if(y==9&&x>0&&x<9){
       for (var i = 1; i < BoardConfig.TOTAL_ROWS-x; i++) {
          diagonals.push((y-i)*10+x+i);
         // console.log("f");
         // console.log(((y-i)*10+x+i));
       }
        for (var i = 1; i <= (BoardConfig.TOTAL_ROWS-(BoardConfig.TOTAL_ROWS-x)); i++) {
          
            diagonals.push((y-i)*10+x-i);
          //  console.log("s");
         // console.log(((y-i)*10+x-i));
          
          
       }
    }


    if(y==0&&x>0&&x<9){
      diagonals.push((y+1)*10+x+1);
      diagonals.push((y+1)*10+x-1);
    }


    if(y>0&&y<9&&x>0&&x<9){
     
      // for (var i = 1; i < BoardConfig.TOTAL_ROWS-1; i++) {
        
      //     if((y-i)>-1&&(x-1)>-1) 
      //   {
      //   diagonals.push((y-i)*10+x-i);
      //   diagonals.push((y-i)*10+x+i);
      //   console.log(i);
      //   }
        
      //  // console.log(i);
      // }
      // j=x-1;
      // for (var i = y-1; i < BoardConfig.TOTAL_ROWS; i++) {
      //  // diagonals.push((y-i)*10+x+j);
      //  // diagonals.push((y-i)*10+x-i);
      //   //j--;
      // }


      // diagonals.push((y+1)*10+x+1);
      // diagonals.push((y+1)*10+x-1);
      // diagonals.push((y-1)*10+x+1);
      // diagonals.push((y-1)*10+x-1);
     // console.log("all sides");
var min=(x<y)?x:y;
console.log(min);
        if(min>BoardConfig.TOTAL_ROWS/2)
        {
          for (var i = 1; i < BoardConfig.TOTAL_ROWS-min; i++) 
              {
                diagonals.push((y+i)*10+x+i);
                console.log(i);
              }
              for (var i = 1; i < BoardConfig.TOTAL_ROWS-min; i++) 
              {
                diagonals.push((y+i)*10+x-i);
              }
              for (var i = 1; i < BoardConfig.TOTAL_ROWS-min; i++) 
              {
                diagonals.push((y-i)*10+x+i);
                
              }
              for (var i = 1; i < BoardConfig.TOTAL_ROWS-min; i++) 
              {
                diagonals.push((y-i)*10+x-i);
                console.log(i);
            }
        }
        else
        {

        }
      
    }
   
  
   for (var i = 0; i < diagonals.length; i++) {
       if(board[diagonals[i]].isEmpty)
        {
        //  console.log("yes");

          Tile.MakeGreen(board[diagonals[i]],board[diagonals[i]].col,board[diagonals[i]].row);
           // console.log(board[diagonals[i]].row);
           // console.log(board[diagonals[i]].col);
        }
        else
        {
         // console.log("no");
          Tile.MarkTile(board[diagonals[i]],board[diagonals[i]].col,board[diagonals[i]].row);
           // console.log(board[diagonals[i]].row);
           //  console.log(board[diagonals[i]].col);
        }
    }
  }
};


Bishop.prototype.render = function(context) {
 
      this.figureReferance.render(context);
};
