var imageName;
var Pawn = function(constructorObject) {
    this.type           = constructorObject.type;
    this.row            = constructorObject.row;
    this.col            = constructorObject.col;
    this.isWhite		    = constructorObject.isWhite;
    this.image		      = constructorObject.image;

    if (this.isWhite) {
      imageName=whitePawnImage;
    } else {
      imageName=blackPawnImage;
    }
    	
    	this.figureReferance = new Figure({
        type    : this.type,
        row     : this.row,
        col     : this.col,
        isWhite : this.isWhite,
       	image 	: imageName
   		});
   
};

Pawn.prototype.move = function(figureRef,x,y) {
  
  this.figureReferance = figureRef;

    if(this.figureReferance.isWhite){
      this.figureReferance.figureReferance.row--;
     this.figureReferance.row--;
    } else{
      this.figureReferance.figureReferance.row++;
      this.figureReferance.row++;
    }

};

Pawn.prototype.moveForward = function(figureRef,x,y) {

  this.figureReferance = figureRef;

    if(this.figureReferance.isWhite){
      this.figureReferance.figureReferance.row--;
     this.figureReferance.row--;
    } else{
      this.figureReferance.figureReferance.row++;
      this.figureReferance.row++;
    }
};

Pawn.prototype.attack = function(attackedPiece) {

 
};

Pawn.prototype.isMovable = function(isWhitesTurn,board,x,y) {


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


Pawn.prototype.render = function(context) {
      this.figureReferance.render(context);
};

