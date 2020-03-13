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
 
Bishop.prototype.isMovable = function(isWhitesTurn,board,x,y) {
 
  
  if(y>=0&&y<BoardConfig.TOTAL_ROWS&&x>=0&&x<BoardConfig.TOTAL_COLUMNS)
  {
    console.log(y,x);
    var diagonals=[];
    if(y==0&&x==0){
      for (var i = y; i < BoardConfig.TOTAL_ROWS; i++) {
        diagonals.push((y+i)*10+x+i);
      }
    }
    if(y==9&&x==9){
       for (var i = y; i >= 0; i--) {
         diagonals.push((y-i)*10+x-i);
      }
    }


    if(y==0&&x==9){
      // for (var i = x; i >= BoardConfig.TOTAL_ROWS; i++) {
      //    diagonals.push((y-i)*10+x+i);
      //  console.log(i);
      // }

      //diagonals.push((y-1)*10+x-1);
    }
    if(y==9&&x==0){
      
      for (var i = y; i >= 0; i--) {
        console.log(board[(y-i)*10+x+i].isEmpty);
        //if (board[(y-i)*10+x+i].isEmpty) 
       // {
           diagonals.push((y-i)*10+x+i);
          
       // }else{
       //   break;
       // }

       
    }
    }

    if(y==9&&x>0&&x<9){
       for (var i = 1; i < BoardConfig.TOTAL_ROWS-x; i++) {
         
         
           diagonals.push((y-i)*10+x+i);
          console.log("f");
          console.log(((y-i)*10+x+i));
         
         
       }
        for (var i = 1; i <= (BoardConfig.TOTAL_ROWS-(BoardConfig.TOTAL_ROWS-x)); i++) {
          
            diagonals.push((y-i)*10+x-i);
            console.log("s");
          console.log(((y-i)*10+x-i));
          
          
       }
    }


    if(y==0&&x>0&&x<9){
      diagonals.push((y+1)*10+x+1);
      diagonals.push((y+1)*10+x-1);
    }


    if(y>0&&y<9&&x>0&&x<9){
     
      for (var i = 1; i < BoardConfig.TOTAL_ROWS-1; i++) {
        
          if((y-i)>-1&&(x-1)>-1) 
        {
        diagonals.push((y-i)*10+x-i);
        diagonals.push((y-i)*10+x+i);
        console.log(i);
        }
        
       // console.log(i);
      }
      j=x-1;
      for (var i = y-1; i < BoardConfig.TOTAL_ROWS; i++) {
       // diagonals.push((y-i)*10+x+j);
       // diagonals.push((y-i)*10+x-i);
        //j--;
      }


      // diagonals.push((y+1)*10+x+1);
      // diagonals.push((y+1)*10+x-1);
      // diagonals.push((y-1)*10+x+1);
      // diagonals.push((y-1)*10+x-1);
     // console.log("all sides");
    }
   
   console.log(diagonals);
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
