var allCells;
var currentRow;
var currentCol;

var currentCell;

window.onload=function() {
    var grid = clickableGrid(10,10,function(el,row,col,i) {
        document.getElementById("col").value = col;
        document.getElementById("row").value = row;

        if (currentCell) {
            currentCell.className='';
        }
        el.className='clicked';

        currentCell = el;
    });

    document.getElementById("mainBoard").appendChild(grid);
};

function clickableGrid( rows, cols, callback ) {
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';
    for (var r=0;r<rows;r++){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;c++){
            var cell = tr.appendChild(document.createElement('td'));
            
            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}

function testCanMove() {
    col = document.getElementById("col").value;
    row = document.getElementById("row").value;
    dir = document.getElementById("dir").value;
    if (Mobility.canMove({col: col, row: row}, dir)) {
        currentCell.className = 'successCell';
    } else {
        currentCell.className = 'failCell';
    }
}