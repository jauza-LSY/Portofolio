<?php
$n = 5; // Number of rows

for ($i = $n; $i >= 1; $i--) {
    // Print spaces
    for ($j = $n; $j > $i; $j--) {
        echo " ";
    }
    // Print stars
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    echo "\n";
}
?>