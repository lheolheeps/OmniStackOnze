<?php

namespace App\Controller;

use App\DAO\OngDAO;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

final class OngController
{
    public function index(Request $request, Response $response, $args): Response
    {
        $ongDAO = new OngDAO();
        $list = $ongDAO->listAll();
        $response->withJson($list);
        return $response;
    }

    public function create(Request $request, Response $response, $args): Response
    {
        $ongDAO = new OngDAO();
        $id = $ongDAO->insert($request->getParsedBody());
        $response->withJson(['id' => $id]);
        return $response;
    }

    public function logon(Request $request, Response $response, $args): Response
    {
        // $ongDAO = new OngDAO();
        // $ong = $ongDAO->findById($request->getParsedBody()['id']);
        // if(!$ong){
        //     $response = $response->withStatus(400);
        //     return $response;
        // }
        $response->withJson(["nome" => "Felipe"]);
        return $response;
    }
}
