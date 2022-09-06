<template>
    <div>
        <router-link to="/">Back to Log in</router-link>
        <h3> this is the game page</h3>
         <score-board></score-board>
        <game-button></game-button>
       
    </div>
</template>

<script>
import GameButton from '@/components/GameButton.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
    export default {
  components: { GameButton, ScoreBoard },
        
    }
</script>

<style scoped>

</style>

/* use one of these for log in: george.bluth@reqres.in janet.weaver@reqres.in emma.wong@reqres.in and any password */