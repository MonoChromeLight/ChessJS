var Board = function(constructorObject) {

    // this.row        =   constructorObject.row;
    // this.col        =   constructorObject.col;
    // this.isWhite    =   constructorObject.isWhite;
    // this.hasFigure      = false;
    // this.FigureName     ="none";
    // this.tileCollection = new Tile({
    //     row     : this.row,
    //     col     : this.col,
    //     isWhite : this.isWhite
   	// });
}

Board.loadBoard = function(rows,columns){
            _this.boardCollection=[];
            var boardRow    =   [];
            var color='';
                for(let i = 0; i < rows; i++) {
                    for(let j = 0; j < columns; j++) {
                        color=((i+j)%2==0)?true:false;
                        boardRow[j]=new Tile({
                         row:i,
                         col:j,
                         isWhite    : color,
                         isEmpty:   true
                    });
                  
                  _this.boardCollection.push(boardRow[j]);
                }
        
        }
            //console.log(_this.boardCollection);
 }



Board.prototype.render = function(context) {

        test.render(context);
        this.tileCollection.render(context);
    
};