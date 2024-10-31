<?php
$n = 5; // Number of rows

for ($i = 1; $i <= $n; $i++) {
    // Print spaces
    for ($j = $i; $j < $n; $j++) {
        echo " ";
    }
    // Print stars
    for ($k = 1; $k <= (2 * $i - 1); $k++) {
        echo "*";
    }
    echo "\n";
}
?>