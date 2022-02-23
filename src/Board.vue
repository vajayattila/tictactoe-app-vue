<script>
import { defineComponent } from "vue"
import Square from "./Square.vue"

export default defineComponent({
    components:{
        'Square': Square
    },
    props: {
        current:{
            type: Object
        },
        handleClick:{
            type: Function
        }
    }
})
</script>

<template>
    <div className="board-row">
        <Square v-bind:index="0" v-bind:value="current.squares[0]"/>
        <Square v-bind:index="1" v-bind:value="current.squares[1]"/>
        <Square v-bind:index="2" v-bind:value="current.squares[2]"/>
    </div>
    <div className="board-row">
        <Square v-bind:index="3" v-bind:value="current.squares[3]"/>
        <Square v-bind:index="4" v-bind:value="current.squares[4]"/>
        <Square v-bind:index="5" v-bind:value="current.squares[5]"/>
    </div>
    <div className="board-row">
        <Square v-bind:index="6" v-bind:value="current.squares[6]"/>            
        <Square v-bind:index="7" v-bind:value="current.squares[7]"/>            
        <Square v-bind:index="8" v-bind:value="current.squares[8]"/>            
    </div>
</template>