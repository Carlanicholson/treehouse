<?php

$day_coffees =$_POST['day_coffees'];
$days_per_week = $_POST['days_per_week'];
$name = $_POST['first_name'] . ' ' . $_POST['last_name'];

$total = ($days_per_week * $day_coffees);
if ($total >1){
    echo $name . ',  you have drunk ' . $total . ' cups of coffee this week';
}
else {
    echo $name . ',  you have drunk ' . $total . ' cup of coffee this week';
}

