var DrawFigure = function(x,y,image){
	context.beginPath();
    context.rect(x+10, y+10, BoardConfig.TILE_SIZE-20, BoardConfig.TILE_SIZE-20);
    context.drawImage(image, x, y,BoardConfig.TILE_SIZE,BoardConfig.TILE_SIZE);
    context.closePath();
} 
