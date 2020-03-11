var Piece = function(constructorObject) {

    this.row    =   constructorObject.row;
    this.col    =   constructorObject.col;
    this.isWhite=   constructorObject.isWhite;
    this.image  =   constructorObject.image;
    this.side   =   BoardConfig.TILE_SIZE;

};
Piece.prototype.render = function(context) {
    
    var x      = (this.col * BoardConfig.TILE_SIZE);
    var y      = (this.row * BoardConfig.TILE_SIZE);


    DrawFigure(this.image);

Piece.flipBoard = function(k) {
  consple.log(k);
  for (var i = 0; i < k.length/2; i++) { 
      k[i].row-=8;
      k[i].col-=5;
  }
};

};