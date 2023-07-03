<!DOCTYPE html>
<html lang="de">
<head>
<title>Auswertung Spiel</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="css/stylesheet.css">
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
</head>

<body>
<div class="w3-container w3-content w3-padding-64" style="max-width:810px" id="spiel"> 
        
        <h1 class="w3-center">Dein Ergebnis</h1> 

<?php
// Cookie setzen und bei weiteren Spielrunden "Welcome Back" ausgeben
if (isset($_COOKIE['besucht?']) && $_COOKIE['besucht?'] == "true"){
        echo 'Wilkommen zurück! ';
} else { setcookie("besucht?", "true", time()+1800);
}

// Prüfen, ob der Spielname angegeben wurde, Variable definieren 
if(!isset($_GET['gamename'])) {
    echo "Bitte gib noch einen Spielnamen ein."; return;
} else { $gamename = $_GET['gamename'];
}

// Prüfen, ob Zahl angegeben wurde 
if(!isset($_GET['zahl'])) {
        echo "Bitte gib noch einen Zahl ein."; return;
}

// Prüfen, ob Zahl zwischen 0 und 100 liegt, Variable definieren
if(($_GET['zahl'] < 0) || ($_GET['zahl'] > 100)) {
        echo "Deine Zahl muss zwischen 0 und 100 liegen."; return; 
} else { $zahl = $_GET['zahl']; 
}

// Prüfen, ob angegeben wurde, ob die gewählte Zahl eine Fibonacci Zahl ist
if(!isset($_GET['fibonacci'])) {
        echo "Bitte wähle bei 'Fibonacci-Zahl' an, ob deine Zahl eine Fibonacci-Zahl ist oder nicht."; return;
        }

// Prüfen, ob eine valide Auswahl getroffen wurde, bei der Option "Fibonacci Zahl?", Varialbe definieren
if(($_GET['fibonacci'] != 1) && ($_GET['fibonacci'] != 2)) {
        echo "Bitte wähle bei 'Fibonacci-Zahl' an, ob deine Zahl eine Fibonacci-Zahl ist oder nicht."; return;
} else {$fibonacci = $_GET['fibonacci']; }
       
// Prüfen, ob die nächsthöere Fibonacci Zahl angegeben wurde, Variable setzen
if(!isset($_GET['reihe_fibonacci'])) {
        echo "Gib unter Fibonacci-Reihe die nächst höhere Fibonacci Zahl an."; return;
} else { $reihe = $_GET['reihe_fibonacci'];
}
                
//Prüfen, ob das Geschlecht angegeben wurde
if(!isset($_GET['identity'])) {
        echo "Gib bitte noch an, ob du weiblich, männlich oder etwas anderes bist."; return;
        }

// Prüfen, ob beim Geschlecht eine valide Eingabe getätigt wurde, Variablen definieren
if(($_GET['identity'] != "m") && ($_GET['identity'] != "w") && ($_GET['identity'] != "a")) {
        echo "Bitte wähle aus, ob du männlich, weiblich, oder etwas anderes bist."; return;
} else {$identity = $_GET['identity'];
        if ($identity == "m") {
                $anschrift = "Lieber";
            } elseif ($identity == "w") {
                $anschrift = "Liebe";
            } elseif ($identity == "a") {
                $anschrift = "";
            }
        }
        
//Array mit Fibonacci Zahlen
$checkVars = array(1, 2, 3, 5, 8, 13, 21, 34, 55, 89);

// Prüfung, ob die gewählte Zahl eine Fibonacci-Zahl ist oder nicht und ob richitg angegeben wurde, ob die Zahl eine Fibonacci Zahl ist oder nicht
if(in_array($zahl, $checkVars) && ($fibonacci == 1)) {
echo nl2br (" " . $anschrift  . " " . $gamename . ", die Zahl " . $zahl . " ist tatsächlich eine Zahl aus der Fibonacci Reihe, wie du auch richtig angegebene hast. Gut gemacht!\n" ); 
echo ("Die nächst höhere Fibonacci-Zahl nach " . $zahl .  " ist " . $reihe . ".");
} elseif (in_array($zahl, $checkVars) && ($fibonacci == 2)) {
echo nl2br ($anschrift  . " " . $gamename . ", die Zahl " . $zahl . " ist eine Zahl aus der Fibonacci Reihe, du hast jedoch angegeben, dass es keine Zahl aus der Fibonacci Reihe ist - versuch es noch mal!\n");
echo (" Die nächst höhere Fibonacci-Zahl nach " . $zahl .  " ist " . $reihe . ".");
} elseif (!in_array($zahl, $checkVars) &&  ($fibonacci == 1)) {
echo nl2br ($anschrift  . " " . $gamename . ", du hast vermutet, dass die " . $zahl . " eine Zahl aus der Fibonacci Reihe ist - dass ist jedoch nicht korrekt! Versuchs doch nochmal.\n"); 
echo ("Die nächst höhere Fibonacci-Zahl nach " . $zahl .  " ist " . $reihe . ".");
} elseif (!in_array($zahl, $checkVars) &&  ($fibonacci == 2)) {
echo nl2br ($anschrift  . " " . $gamename . ", die Zahl " . $zahl . " ist keine Zahl aus der Fibonacci Reihe - was du auch so angegeben hast! Gut gemacht.\n");
echo ("Die nächst höhere Fibonacci-Zahl nach " . $zahl .  " ist " . $reihe . ".");
}
?>
</br>
</br>

<a href="Fibonacci.html#spiel" id="button">Zurück zum Spiel</a>
</div>
</body>
</html>