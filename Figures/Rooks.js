var rooksImageName;
var Rooks = function(constructorObject) {
    this.type           = constructorObject.type;
    this.row            = constructorObject.row;
    this.col            = constructorObject.col;
    this.isWhite		    = constructorObject.isWhite;
    this.image		      = constructorObject.image;

    if (this.isWhite) {
      rooksImageName=whiteRooksImage;
    } else {
      rooksImageName=blackRooksImage;
    }
    	
    	this.figureReferance = new Figure({
        type    : this.type,
        row     : this.row,
        col     : this.col,
        isWhite : this.isWhite,
       	image 	: rooksImageName
   		});
   
};

Rooks.prototype.render = function(context) {
 
      this.figureReferance.render(context);
};
