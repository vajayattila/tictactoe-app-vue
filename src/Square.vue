<script>
import { defineComponent } from "vue"

export default defineComponent ({
    props:{
        index:{
            type: Number
        },
        value:{
            type: String
        }
    },
    methods:{
        cellClick(idx){
            this.emitter.emit('cellClick', {index: idx})
        }
    }
})
</script>

<template>
    <button className="square" v-on:click="cellClick(index)">
        {{value}}
    </button>  
</template>

<style>
.square {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
}

.square:focus {
    outline: none;
}  

.kbd-navigation .square:focus {
    background: #ddd;
}  
</style>