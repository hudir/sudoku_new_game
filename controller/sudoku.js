class Sudoku {
    constructor(level){
        this.level = level
        this.oneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        this.puzzle = this.createInitPuzzle()
        this.roundToCreateFulfilledPuzzle = 0
        this.timesToMakePuzzle = 0
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
            const rowRes = this.updateRow(target, num)
            const colRes = this.updateColumn(target, num)
            const regRes = this.updateregion(target, num)
            if(rowRes && colRes && regRes) {
                this.puzzle[target] = num
                this.roundToCreateFulfilledPuzzle++
            } else {
                this.puzzle = this.createInitPuzzle()
                i = -1
                this.timesToMakePuzzle++
            }
            
        }
        return this.puzzle
    }

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

    updateRow(index, num){
        const rowStart = Math.floor(index / 9) * 9
        const rowEnd = rowStart + 8 
        for(let i = rowStart; i <= rowEnd; i++) {
            const res = this.updateArr(i, index, num)
            if(!res) return false
        }
        return true
    }

    updateColumn(index, num){
        const firEleInCol = index % 9
        for(let i = firEleInCol; i < 81; i += 9){
            const res = this.updateArr(i, index, num)
            if(!res) return false
        }
        return true
    }

    updateregion(index, num){
        const xRegion = Math.floor(index / 27)
        const yRegion = Math.floor((index % 9) / 3)
        const regionStartPoint = xRegion * 27 + yRegion * 3
        
        for(let i = regionStartPoint; i < (regionStartPoint + 3); i++) {
            for(let j = i; j <= (i + 18); j += 9) {
                const res = this.updateArr(j, index, num)
                if(!res) return false
            }
        }
        return true
    }

    updateArr(currentIndex, targetIndex,num){
        if(currentIndex != targetIndex && Array.isArray(this.puzzle[currentIndex])) {
            this.puzzle[currentIndex] = this.puzzle[currentIndex].filter(x=> x != num)
            return this.puzzle[currentIndex].length > 0
        } 
        return true
    }

    

}

const test = new Sudoku()
console.log(test.puzzle.length) //==> 81
console.log(test.updateRow(80)) 
console.log(test.updateColumn(17))
console.log(test.updateregion(6))

console.log(test.createNewFulfilledPuzzle())
console.log(test.roundToCreateFulfilledPuzzle)
console.log(test.timesToMakePuzzle)



