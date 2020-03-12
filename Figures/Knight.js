var knightImageName;
var Knight = function(constructorObject) {
    this.type           = constructorObject.type;
    this.row            = constructorObject.row;
    this.col            = constructorObject.col;
    this.isWhite		    = constructorObject.isWhite;
    this.image		      = constructorObject.image;

    if (this.isWhite) {
      knightImageName=whiteKnightImage;
    } else {
      knightImageName=blackKnightImage;
    }
    	
    	this.figureReferance = new Figure({
        type    : this.type,
        row     : this.row,
        col     : this.col,
        isWhite : this.isWhite,
       	image 	: knightImageName
   		});
   
};

Knight.prototype.isMovable = function(isWhitesTurn,board,x,y) {
var direction=0;
  if(isWhitesTurn){
    direction=y-1;
  }
  else{
    direction=y+1;
  }
 
 if(board[direction*10+x].isEmpty)
  {
    console.log("yes");
  }
  else
  {
    console.log("no");
  }
  
};


Knight.prototype.render = function(context) {
 
      this.figureReferance.render(context);
};
