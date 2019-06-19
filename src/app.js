import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el:"#app",
      data:{
          rates: [],
          selectCurrencyRate: 0,
          amount: 0,
          convertedToEuros: 0,
          convertedFromEuros: 0
      },

      mounted(){
        this.fetchRates();
      },

      computed: {

        filterRate: function(){
          const result = this.rates.filter( (rate) => {
          return rate.value === this.selectCurrencyRate;
          })
          return result
        },
      },

      methods: {
        fetchRates: function(){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response=> response.json())
        .then(data=> this.rates = data)
        }
      }
  })
})
