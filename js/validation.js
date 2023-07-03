// Validierung, ob die Eingabe (bei name="fibonacci", id="fib") der nächst höheren Fibonacci-Zahl von der ausgewählten Zahl aus korrekt ist
  function Validate() {
    var zahl = document.getElementById("zahl");
    var fib = document.getElementById("fib");
    
    if ((zahl.value > 100)) {
        alert("Ihre Zahl überschreitet den Wert 100!");
        return false;	
    } else if ((zahl.value >= 88) && (fib.value != 144)) {
            alert("Die Antwort unter 'Nächst höhere Fibonacci-Zahl' ist falsch! Korrekte Antwort: 144.");
            return false;
    } else if ((zahl.value >= 55) && (zahl.value < 88) && (fib.value != 89)) {
            alert("Die Antwort unter 'Nächst höhere Fibonacci-Zahl' ist falsch! Korrekte Antwort: 89.");
            return false;
    } else if ((zahl.value >= 34) && (zahl.value < 55) && (fib.value != 55)) {
            alert("Die Antwort unter 'Nächst höhere Fibonacci-Zahl' ist falsch! Korrekte Antwort: 55.");
            return false;
    } else if ((zahl.value >= 21) && (zahl.value < 34) &&  (fib.value != 34)) {
            alert("Die Antwort unter 'Nächst höhere Fibonacci-Zahl' ist falsch! Korrekte Antwort: 34.");
            return false;
    } else if ((zahl.value >= 13) && (zahl.value < 21) && (fib.value != 21)) {
            alert("Die Antwort unter 'Nächst höhere Fibonacci-Zahl' ist falsch! Korrekte Antwort: 21.");
            return false;
    } else if ((zahl.value >= 8) && (zahl.value < 13) && (fib.value != 13)) {
            alert("Die Antwort unter 'Nächst höhere Fibonacci-Zahl' ist falsch! Korrekte Antwort: 13.");
            return false;
    } else if ((zahl.value >= 5) && (zahl.value < 8) && (fib.value != 8)) { 
            alert("Die Antwort unter 'Nächst höhere Fibonacci-Zahl' ist falsch! Korrekte Antwort: 8.");
            return false;
    } else if ((zahl.value >= 3) && (zahl.value < 5) && (fib.value != 5)) {
            alert("Die Antwort unter 'Nächst höhere Fibonacci-Zahl' ist falsch! Korrekte Antwort: 5.");
            return false;
    } else if ((zahl.value >= 2) && (zahl.value < 3) && (fib.value != 3)) {
            alert("Die Antwort unter 'Nächst höhere Fibonacci-Zahl' ist falsch! Korrekte Antwort: 3.");
            return false;
    } else if ((zahl.value >= 1) && (zahl.value < 2) && (fib.value != 2)) {
            alert("Die Antwort unter 'Nächst höhere Fibonacci-Zahl' ist falsch! Korrekte Antwort: 2.");
            return false;
    } else if ((zahl.value >= 0) && (zahl.value < 1) && (fib.value != 1)) {
            alert("Die Antwort unter 'Nächst höhere Fibonacci-Zahl' ist falsch! Korrekte Antwort: 1.");
            return false;
    }
        return true;
      }
