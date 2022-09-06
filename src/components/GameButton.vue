<template>
    <div>
        <p>You win if you roll 50 or higher</p>
        <button @click="lucky_roll()">Roll a number</button>
    </div>
</template>

<script>
import axios from "axios";
import Cookies from "vue-cookies";

    export default {
      mounted () {
        // to set the initial wins after loading to 0, if there's a value for it, it should leave it alone
        this.check_cookie_exist();
        this.check_lost_exist();
      },
        data() {
            return {
                game_data: {
                current_roll: [],
                updated_win: "",
                }
            }
        },
        methods: {
            // to set the initial scoreboard if there's none
            check_lost_exist(){
                if((Cookies.get(`loss`) === null)) {
                    Cookies.set(`loss`, 0)
                } else {
                    Cookies
                }
            }
            ,
            check_cookie_exist() {
                if((Cookies.get(`wins`) === null)) {
                    Cookies.set(`wins`, 0)
                } else {
                    this.game_data.updated_win = Cookies.get(`wins`)
                }
            },
            lucky_roll() {
                axios.request({
                    url: `http://www.randomnumberapi.com/api/v1.0/randomnumber`
                }).then((success)=>{
                    this.game_data.current_roll.splice(0, 1);
                    this.game_data.current_roll.push(success.data[0]);
                    document.querySelector(`button`).insertAdjacentHTML(`afterend`, `<p>the roll is: ${success.data[0]}</p>`)
                    if (success.data[0] > 49) {
                        let current_cookie = Cookies.get(`wins`);
                       Cookies.set(`wins`, parseFloat(current_cookie) +1);
                    this.$root.$emit(`win_scoreboard`, Cookies.get(`wins`))
                       
                        
                   
                    document.querySelector(`button`).insertAdjacentHTML(`afterend`, `you've won this round`) }
                    else {
                        let current_cookie = Cookies.get(`loss`);
                       Cookies.set(`loss`, parseFloat(current_cookie) +1);
                       this.$root.$emit(`loss_scoreboard`, Cookies.get(`loss`))
                    document.querySelector(`button`).insertAdjacentHTML(`afterend`, `you lost this round`)
                    }
                }).catch((error)=>{
                    error
                })
            }
        },
        name: 'game-button'
    }
</script>

<style scoped>

</style>