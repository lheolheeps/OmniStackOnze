<?php

namespace App\DAO;

class IncidentDAO extends Connection{
    public function __construct()
    {
        parent::__construct();
    }

    public function listAll($page)
    {
        $page--;
        $list = $this->pdo
                 ->query("SELECT incident.*, ong.nome, ong.email, ong.whatsapp, ong.city, ong.uf
                          FROM incident
                          JOIN ong
                          ON ong.id = incident.ong_id
                          LIMIT 10 
                        OFFSET {$page}")
                 ->fetchAll(\PDO::FETCH_ASSOC);
        return $list;
    }

    public function getCount()
    {
        $list = $this->pdo
                 ->query("SELECT count(*) FROM incident")
                 ->fetchAll(\PDO::FETCH_ASSOC);
        return $list;
    }

    public function findById($id)
    {
        $incident = $this->pdo
                 ->query("SELECT * FROM incident WHERE id = '{$id}'")
                 ->fetch(\PDO::FETCH_ASSOC);
        return $incident;
    }

    public function insert($data, $ong_id)
    {
        extract($data);
        $insert = $this->pdo
                 ->prepare("INSERT INTO incident (title, description, value, ong_id) VALUES (:title, :description, :value, :ong_id)");
        $insert->execute(array(
            ':title' => $title,
            ':description' => $description,
            ':value' => $value,
            ':ong_id' => $ong_id,
        ));
        return true;
    }

    public function delete($id, $ong_id)
    {
        $ong = $this->findById($id);
        if($ong['id'] != $ong_id){
            return false;
        }
        $delete = $this->pdo
                ->prepare("DELETE FROM incident WHERE id = :id");
        $delete->execute(array(
            ':id' => $id
        ));
        return true;
    }
}