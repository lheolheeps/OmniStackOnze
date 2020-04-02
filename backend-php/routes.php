<?php

use App\Controller\OngController;
use App\Controller\IncidentController;

use function src\slimConfiguration;

$app = new \Slim\App(slimConfiguration());

$app->post('/session', OngController::class . ':logon');

$app->get('/ongs', OngController::class . ':index');
$app->post('/ongs', OngController::class . ':create');

$app->post('/incidents', IncidentController::class . ':create');
$app->get('/incidents', IncidentController::class . ':index');
$app->delete('/incidents/{id}', IncidentController::class . ':delete');

$app->run();
