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

Bishop.prototype.render = function(context) {
 
      this.figureReferance.render(context);
};
