<?php

require __DIR__ . '/vendor/autoload.php';

use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;

const API_KEY;
const WEBSITE_ID;

$client = new Client();
$url = 'https://my.firespring.dev/api/v1/websites/' . self::WEBSITE_ID . '/messages'; // Springboard api endpoint can be set here
$options = [
    'headers' => [
        'Authorization' => 'Basic ' . self::API_KEY,
        'Content-Type' => 'application/json'
    ]
]

try {
    $response = $client->get($url, $options);
    // handle a response
} catch (ClientException $e) {
    // handle an error
}
