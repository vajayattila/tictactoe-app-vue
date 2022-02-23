<script>
import Board from './Board.vue'
import Moves from './Moves.vue'
import { defineComponent } from "vue"


export default defineComponent({
  components: {
    'Board': Board,
    'Moves': Moves
  },
  data(){
      return {            
          history: [{
              squares: Array(9).fill(null)
          }],
          xIsNext: true,
          thereIsAWinner: false,
          stepNumber: 0
      }            
  },
  computed:{
          
  },
  methods:{
    calculateWinner(squares) {
      const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
          }
      }
      return null;
    },
    handleClick(i){
      const history = this.history.slice(0, this.stepNumber + 1)
      const curr = history[history.length - 1];
      const squares = curr.squares.slice();
      if (this.calculateWinner(squares) || squares[i]) {
          return;
      }
      squares[i] = this.xIsNext ? 'X' : 'O';
      this.history= history.concat([{
              squares: squares
      }])
      this.stepNumber=history.length
      this.xIsNext=!this.xIsNext
    },
    getCurrent(){
      if(!this.stepNumber){
        this.stepNumber=0
      }
      return this.history[this.stepNumber]
    },
    getStatus(){
        let stat=null  
        let winner = this.calculateWinner(this.getCurrent().squares)  
        if (winner) {
            stat = 'Winner: ' + winner
            this.thereIsAWinner = true
        } else {
            stat = 'Next player: ' + (this.xIsNext ? 'X' : 'O')
        }
        return stat     
    },
    jumpTo(payload) {
      let { step } = payload    
      //console.log(step)
      this.stepNumber=step
      this.xIsNext=step%2===0
    },
    cellClick(payload){
      let { index } = payload
      //console.log(index)
      this.handleClick(index)
    }
  },
  mounted() {
    this.emitter.on("cellClick", this.cellClick)       
    this.emitter.on("jumpTo", this.jumpTo)       
  },
  unmounted() {
    this.emitter.off("cellClick", this.cellClick)       
    this.emitter.off("jumpTo", this.jumpTo)       
  }  
})
</script>

<template>
  <div className="game">               
      <div className="game-board">
          <Board v-bind:current="getCurrent()"/>
      </div>
      <div className="game-info">
          <div className="status">{{getStatus()}}</div> 
          <Moves v-bind:history="history"/>
      </div>
  </div> 
</template>

<style>
body {
  font: 14px "Century Gothic", Futura, sans-serif;
  margin: 20px;
}   

ol, ul {
  padding-left: 30px;
}  
 
.status {
  margin-bottom: 10px;
} 

.board-row:after {
  clear: both;
  content: "";
  display: table;
}    

.game {
  display: flex;
  flex-direction: row;
}
  
.game-info {
  margin-left: 20px;
}
</style>
