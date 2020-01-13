<?php
// Your code here!
function countInArray(array, integer) {
  $count = 0;
  $i = 0;
  $currentElement;
  while ($i < $array.length) {
    $currentElement = $array[$i]
    if ($integer == $currentElement) {
      $count = $count + 1;
    }
    $i++
  }
  return $count;
}

$arraytest = [1, 1, 1, 1, 1, 2];
$countMemory = countInArray($arraytest, 1);
console.log($countMemory);
?>
