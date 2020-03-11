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

Knight.prototype.render = function(context) {
 
      this.figureReferance.render(context);
};
