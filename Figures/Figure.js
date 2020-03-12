var Figure = function(constructorObject) {
	this.type	=	constructorObject.type;
    this.row    =   constructorObject.row;
    this.col    =   constructorObject.col;
    this.isWhite=   constructorObject.isWhite;
    this.image  =   constructorObject.image;
    this.side   =   BoardConfig.TILE_SIZE;


};
Figure.prototype.render = function(context) {

    var x      = (this.col * BoardConfig.TILE_SIZE);
    var y      = (this.row * BoardConfig.TILE_SIZE);
	DrawFigure(x,y,this.image);

};



Figure.prototype.calculateMovement = function(figureRef) {
	this.figure = figureRef;
var possibleMoves = [];
var x=this.figure.figureReferance.col;
var y =this.figure.figureReferance.row;

if (this.figure.figureReferance.type=="Pawn") {
 	if (this.figure.figureReferance.isWhite) 
 	{
 		// Tile.MakeGreen(_this.boardCollection[y*10+x],x,y-1);
        y--;
 		
 	} 
 	else 
 	{
 		// Tile.MakeGreen(_this.boardCollection[y*10+x],x,y+1);
 		y++;
 	}
if (this.figure.figureReferance.type=="Knight") {
    if (this.figure.figureReferance.isWhite) 
     {
         // Tile.MakeGreen(_this.boardCollection[y*10+x],x,y-1);
         y-=2;
         x-=1;
     } 
     else 
     {
         // Tile.MakeGreen(_this.boardCollection[y*10+x],x,y+1);
         y+=2;
         x+=1;
     }
}

possibleMoves.push(y,x);

 	return possibleMoves;
 }
}
