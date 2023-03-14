class Sudoku{
    constructor(level){
        this.level = level
        this.oneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        this.puzzle = this.createInitPuzzle()
    };

    createInitPuzzle(){
        let arr = []
        for(let i = 0; i < 81; i++)  arr.push(this.oneToNine)
        return arr
    }

    randomNum(arr){
        return arr[Math.floor(Math.random() * arr.length)]
    }

    createNewFulfilledPuzzle(){
        for(let i = 0; i < 81; i++){
            const num = this.randomNum(this.puzzle[i])
            this.puzzle[i] = num
            this.updateRow(i, num)

        }

        return this.puzzle
    }

    updateRow(index, num){
        const rowStart = Math.floor(index / 9) * 9
        const rowEnd = rowStart + 8 
        // console.log(rowStart, ' ', rowEnd)
        for(let i = rowStart; i <= rowEnd; i++) {
            if(Array.isArray(this.puzzle[i])){
                this.puzzle[i] = this.puzzle[i].filter(x=> x != num)
            }
        }
    }



}

const test = new Sudoku()
console.log(test.puzzle.length) //==> 81
console.log(test.updateRow(80)) 
console.log(test.createNewFulfilledPuzzle())

