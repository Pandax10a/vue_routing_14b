<template>
    <div>
        
        <h1>Wins: {{Score_count.wins}}</h1>
        <h1>Loss: {{Score_count.loss}}</h1>
        
        
    </div>
</template>

<script>

// i could not get the scoreboard to dynamically update value using cookies.get so emitted value from component instead.
    export default {
        methods: {
            update_win_scoreboard(ii) {
                this.Score_count.wins = ii
            },
            update_loss_scoreboard(iii) {
                this.Score_count.loss = iii
            }
        },
        mounted () {
            this.$root.$on(`win_scoreboard`, this.update_win_scoreboard);
            this.$root.$on(`loss_scoreboard`, this.update_loss_scoreboard);
        },
        data() {
            return {
                Score_count:{
                    wins: 0,
                    loss: 0
                } 
            }
        },
        name: 'score-board'
    }
</script>

<style scoped>

</style>