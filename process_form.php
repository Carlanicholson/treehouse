<?php

require_once('./vendor/autoload.php');
use Postmark\PostmarkClient;

$data = $_POST;

$client = new PostmarkClient("871beadd-594b-4de2-ae9c-0433afd922c0");

$msg = 'Thanks for filling in our form. We also like ' . $data['favourite_biscuit'] ;

$sendResult = $client->sendEmail(
    "labs@codepotato.co.uk",
    $data['contact_email'],
    "This is a test email",
    $msg,
    $msg,
    null,
    null,
    'gareth@codepotato.co.uk',
    'carla@codepotato.co.uk'
);

echo 'Check your inbox';
