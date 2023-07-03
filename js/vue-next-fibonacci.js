// Nächst höhere Fibonacci-Zahl von einer anderen Fibonacci-Zahl her ausgeben
new Vue({
  el: '#fibo',
  data: { f: 0}, 
  methods: {
      c: 
      function () {
      if (this.f == 0) {
      return 1;
    } else {
      return (Math.round(this.f * (1 + Math.sqrt(5)) / 2.0)); }}}})