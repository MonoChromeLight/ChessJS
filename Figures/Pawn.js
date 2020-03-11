var imageName;
var Pawn = function(constructorObject) {
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
        type    : "Pawn",
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



Pawn.prototype.render = function(context) {
 
      this.figureReferance.render(context);
};

