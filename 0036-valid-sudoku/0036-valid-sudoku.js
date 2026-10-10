/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    //row
    for(let i=0;i<9;i++){
        const set = new Set();
        for(let j=0;j<9;j++){
            const val = board[i][j];
            if(val === ".") continue;
            if(set.has(val)) return false;
            set.add(val);
        }
    }

    //column
    for(let i=0;i<9;i++){
        const set = new Set();
        for(let j=0;j<9;j++){
            const val = board[j][i];
            if(val === ".") continue;
            if(set.has(val)) return false;
            set.add(val);
        }
    }

    //grid
    for(let box=0;box<9;box++){
        const set = new Set();
        const startRow = 3 * Math.floor(box/3);
        const startCol = 3 * (box%3);

        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                const val = board[startRow + i][startCol + j];
                if(val === ".") continue;
                if(set.has(val)) return false;
                set.add(val);
            }
        }
    }

    return true;
};