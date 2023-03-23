const { createApp } = Vue
createApp({
    data() {
        return {
            numeriMail: [],
        }
    },

    //ciclo che crea 10 email random e le pusha dentro l'array vuoto
    mounted: function () {
        for (let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((result)  => {
                this.numeriMail.push(result.data.response);
            });
        }
        console.log(this.numeriMail);
    }
}).mount('#app')
