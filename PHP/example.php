#!/usr/bin/env php
<?php

require __DIR__ . '/vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;

$API_KEY = base64_encode('Insert Here' . ':');
$WEBSITE_ID = 'Insert Here';

$client = new Client(['verify' => FALSE]);
$url = 'https://my.firespring.com/api/v1/websites/' . $WEBSITE_ID . '/messages'; // Springboard api endpoint can be set here
$options = [
	'headers' => [
		'Authorization' => 'Basic ' . $API_KEY,
		'Content-Type'  => 'application/json'
	]
];

try {
	$response = $client->get($url, $options);
	$data = json_decode($response->getBody()->getContents(), TRUE);
	$dataArray = $data['data'][0];
	echo 'Called To: ' . $dataArray['object'] . "\n";
	echo 'Title: ' . $dataArray['title'] . "\n";
	echo 'From: ' . $dataArray['fromName'] . "\n";

} catch (ClientException $e) {
	var_dump($e->getResponse()->getBody()->getContents());
	die;
}

