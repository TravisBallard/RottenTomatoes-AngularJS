<?php

	require_once('rotten.class.php');
	$rotten = new Rotten();

	header('Content-Type: application/json');
	echo $rotten->get_movies_in_box_office(false);
	exit();