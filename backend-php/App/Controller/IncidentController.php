<?php

namespace App\Controller;

use App\DAO\IncidentDAO;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

final class IncidentController
{
    public function index(Request $request, Response $response, $args): Response
    {
        $page = $request->getQueryParams()['page'] ?? 1;
        $incidentDAO = new IncidentDAO();
        $list = $incidentDAO->listAll($page);
        $count = $incidentDAO->getCount();
        $response->withHeader('X-Total-Count', $count)->withJson($list);
        return $response;
    }

    public function create(Request $request, Response $response, $args): Response
    {
        $ong_id = $request->getHeader('Authorization');
        $incidentDAO = new IncidentDAO();
        $incidentDAO->insert($request->getParsedBody(), $ong_id);
        $response->withStatus(204);
        return $response;
    }

    public function delete(Request $request, Response $response, $args): Response
    {
        $ong_id = $request->getHeader('authorization');
        $id = $request->getAttribute('id');
        $incidentDAO = new IncidentDAO();
        if (!$incidentDAO->delete($id, $ong_id)) {
            $response = $response->withStatus(401);
        } else {
            $response = $response->withStatus(204);
        }
        return $response;
    }
}
