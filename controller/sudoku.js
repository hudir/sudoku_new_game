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
            const target = this.shortestArr()
            const num = this.randomNum(this.puzzle[target])
            this.puzzle[target] = num
            this.updateRow(target, num)
            this.updateColumn(target, num)

        }

        return this.puzzle
    }

    updateRow(index, num){
        const rowStart = Math.floor(index / 9) * 9
        const rowEnd = rowStart + 8 
        // console.log(rowStart, ' ', rowEnd)
        for(let i = rowStart; i <= rowEnd; i++) {
            if(i != index && Array.isArray(this.puzzle[i])){
                this.puzzle[i] = this.puzzle[i].filter(x=> x != num)
            }
        }
    }

    updateColumn(index, num){
        const firEleInCol = index % 9
        for(let i = firEleInCol; i < 81; i+=9){
            if(i != index && Array.isArray(this.puzzle[i])){
                this.puzzle[i] = this.puzzle[i].filter(x=> x != num)
            }
        }
    }

    updateregion(index, num){}

    shortestArr(arr = this.puzzle){
        let index = -1
        arr.reduce((acc ,ele, i)=>{
            if(Array.isArray(ele) && ele.length <= acc) {
                acc = ele.length
                index = i
            }
            return acc
        }, 10)
        return index
    }



}

const test = new Sudoku()
console.log(test.puzzle.length) //==> 81
console.log(test.updateRow(80)) 
console.log(test.updateColumn(17))
console.log(test.createNewFulfilledPuzzle())


