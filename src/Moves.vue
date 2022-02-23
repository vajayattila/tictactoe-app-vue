<script>
import { defineComponent } from "vue"

export default defineComponent ({
    props: {
        history: {
            type: Array
        }
    },
    methods:{
        jumpTo(step){
            this.emitter.emit('jumpTo', {step: step})
        }
    }
})
</script>

<template>
    <ol>
        <li v-for="(item, index) in history" v-bind:key="index">          
            <button v-on:click="jumpTo(index)">{{index?"Go to, step#"+index:"Go to game start"}}</button>
        </li> 
    </ol> 
</template>

<style>
</style>
