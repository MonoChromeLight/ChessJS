var Tile = function(constructorObject) {

    this.row    =   constructorObject.row;
    this.col    =   constructorObject.col;
    this.isWhite=   constructorObject.isWhite;
    this.side   =   BoardConfig.TILE_SIZE;
    this.isEmpty=   constructorObject.isEmpty;
    this.drawFigure= constructorObject.drawFigure;
};

Tile.prototype.render = function(context) {
    
    var x      = (this.col * BoardConfig.TILE_SIZE);
    var y      = (this.row * BoardConfig.TILE_SIZE);

 if (this.isWhite) {
    context.beginPath();
    context.rect(x, y, BoardConfig.TILE_SIZE, BoardConfig.TILE_SIZE);
    context.fillStyle = "#f3e8e8"; 
    context.fill();  
    context.closePath();
} else {
      context.beginPath();
    context.rect(x, y, BoardConfig.TILE_SIZE, BoardConfig.TILE_SIZE);
    context.fillStyle = "#737373";
    context.fill();
    context.closePath();
}

Tile.MarkTile = function(k,x,y){
    if(!k.isEmpty){
        context.beginPath();
        context.rect(x*BoardConfig.TILE_SIZE, y*BoardConfig.TILE_SIZE, BoardConfig.TILE_SIZE, BoardConfig.TILE_SIZE);     
        context.strokeStyle = 'red';     
        context.stroke();
        context.closePath();
    }
}

Tile.MakeGreen = function(k,x,y){
        context.beginPath();
        context.rect(x*BoardConfig.TILE_SIZE, y*BoardConfig.TILE_SIZE, BoardConfig.TILE_SIZE, BoardConfig.TILE_SIZE);     
        context.strokeStyle = '#00FF00';     
        context.stroke();
        context.closePath();
}

};