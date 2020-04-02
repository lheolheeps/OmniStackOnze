<?php

namespace App\DAO;

class OngDAO extends Connection
{
    public function __construct()
    {
        parent::__construct();
    }

    public function listAll()
    {
        $list = $this->pdo
                 ->query("SELECT * FROM ong")
                 ->fetchAll(\PDO::FETCH_ASSOC);
        return $list;
    }

    public function findById($id)
    {
        $ong = $this->pdo
                 ->query("SELECT * FROM ong WHERE id = '{$id}'")
                 ->fetch(\PDO::FETCH_ASSOC);
        return $ong;
    }

    public function insert($data)
    {
        extract($data);
        // $id = strtoupper(bin2hex(random_bytes(4)));
        $id = rand(10000000, 99999999);
        $insert = $this->pdo
                 ->prepare("INSERT INTO ong (id, nome, email, whatsapp, city, uf) VALUES (:id, :nome, :email, :whatsapp, :city, :uf)");
        $insert->execute(array(
            ':id' => $id,
            ':nome' => $nome,
            ':email' => $email,
            ':whatsapp' => $whatsapp,
            ':city' => $city,
            ':uf' => $uf
        ));
        return $id;
    }
}
