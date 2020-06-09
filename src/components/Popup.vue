<template>
    <div class='pop-up'>
        <p>Are you sure you want to do this?</p>
        <div class='buttons'>
            <button class='cancel' @click="changePopup(id)">Cancel</button>
            <button class='confirm' @click="popupBtns(type)">Confirm</button>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
    props: ['type', 'id'],

    methods: {
        ...mapMutations(['changePopup', 'deleteTodoBox', 'initialState', 'changeBackup', 'changeTemp']),

        // Check for type of button click
        popupBtns(type){
            this.changePopup(this.id)

            // Delete exact TodoBox
            if(type === 'delete'){
                this.deleteTodoBox()
                this.changeBackup(false)
                this.changeTemp([])
                if (this.$route.path !== '/') this.$router.push('/')
            }else if (type === 'cancel'){

            // Canceling changes in editing page
                this.$emit('get-initial')
                this.changeBackup(true)
            }

            // Set previous/saved state of Todos
            // this.initialState()
        }
    }
}
</script>

<style scoped>
    .pop-up{
        position: fixed;
        text-align: center;
        left: 0;
        right: 0;
        margin: auto;
        width: 250px;
        height: 120px;
        font-weight: bold;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 10px;
        z-index: 100;
        background: rgba(255, 255, 255, .9);
        padding: 10px;
    }
    .buttons{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .buttons button{
        margin: 10px 0;
        width: 100px;
        height: 20px;
        outline: none;
        font-size: 18px;
        cursor: pointer;
        background: none;
        border: none;
    }
    .confirm{
        color: rgba(42, 211, 33, 0.7);
    }
    .cancel{
        color: rgba(211, 60, 33, 0.7);
    }
</style>