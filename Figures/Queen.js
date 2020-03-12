var queenImageName;
var Queen = function(constructorObject) {
    this.type           = constructorObject.type;
    this.row            = constructorObject.row;
    this.col            = constructorObject.col;
    this.isWhite		    = constructorObject.isWhite;
    this.image		      = constructorObject.image;

    if (this.isWhite) {
      queenImageName=whiteQueenImage;
    } else {
      queenImageName=blackQueenImage;
    }
    	
    	this.figureReferance = new Figure({
        type    : this.type,
        row     : this.row,
        col     : this.col,
        isWhite : this.isWhite,
       	image 	: queenImageName
   		});
   
};

Queen.prototype.isMovable = function(isWhitesTurn,board,x,y) {

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


Queen.prototype.render = function(context) {
 
      this.figureReferance.render(context);
};
