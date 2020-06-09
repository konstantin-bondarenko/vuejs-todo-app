<template>
    <div class='item' v-bind:class='{done: td.completed}'>
        <div class='flex'>
            <div class='content'>
                <button class="checkbox"
                    v-bind:class='{checked: td.completed}'
                    v-if='checkbox'
                    @click='td.completed = !td.completed'></button>
                <div>
                    <span
                        v-if='checkbox' 
                        class="title" 
                        contenteditable="true"
                        @keydown.enter="updateTask($event, td)"
                        @blur="updateTask($event, td)"
                        >{{td.content}}</span>
                    <span v-else>{{td.content}}</span>
                </div>
            </div>
            <button 
                class='remove-btn'
                v-if='checkbox'
                @click="$emit('remove-todo',td.id)">&times;</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['td', 'checkbox'],

    data(){
        return {
            beforeChange: ''
        }
    },

    created(){
        this.beforeChange = this.td.content || ''
    },

    methods: {

        // Update Todo task value
        updateTask(e, td){
            e.preventDefault();
            if(e.target.innerText.length === 0){
                e.target.innerText = this.beforeChange
            }
            td.content = e.target.innerText;

            e.target.blur();
        }
    }
}
</script>

<style scoped>
    .item{
        padding: 18px;
        margin: 6px auto;
        background: rgba(255, 255, 255, .5);
        border-radius: 10px;
        width: 90%;
        overflow: hidden;
    }    
    .done{
        background: rgba(0,0,0,.5);
        color: #fff;
    } 
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .content{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .checkbox{
        background: none;
        border: 2px solid rgba(0,0,0,.5);
        border-radius: 3px;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        cursor: pointer;
        outline: none;
    }
    .checked{
        background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIC00NiA0MTcuODEzMzMgNDE3IiB3aWR0aD0iNTEycHgiPjxwYXRoIGQ9Im0xNTkuOTg4MjgxIDMxOC41ODIwMzFjLTMuOTg4MjgxIDQuMDExNzE5LTkuNDI5Njg3IDYuMjUtMTUuMDgyMDMxIDYuMjVzLTExLjA5Mzc1LTIuMjM4MjgxLTE1LjA4MjAzMS02LjI1bC0xMjAuNDQ5MjE5LTEyMC40Njg3NWMtMTIuNS0xMi41LTEyLjUtMzIuNzY5NTMxIDAtNDUuMjQ2MDkzbDE1LjA4MjAzMS0xNS4wODU5MzhjMTIuNTAzOTA3LTEyLjUgMzIuNzUtMTIuNSA0NS4yNSAwbDc1LjE5OTIxOSA3NS4yMDMxMjUgMjAzLjE5OTIxOS0yMDMuMjAzMTI1YzEyLjUwMzkwNi0xMi41IDMyLjc2OTUzMS0xMi41IDQ1LjI1IDBsMTUuMDgyMDMxIDE1LjA4NTkzOGMxMi41IDEyLjUgMTIuNSAzMi43NjU2MjQgMCA0NS4yNDYwOTN6bTAgMCIgZmlsbD0iIzAwMDAwMCIvPjwvc3ZnPgo=);
        width: 20px;
        height: 20px;
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .title:focus{
        width: 230px;
        border: none;
        border-bottom: 2px solid #000;
        background: none;
        padding: 10px;
        outline: none;
        font-size: 16px;
    }
    .remove-btn{
        border: none;
        background: none;
        outline: none;
        cursor: pointer;
        font-size: 30px;
        color: rgba(0,0,0,.5);
    }
</style>
