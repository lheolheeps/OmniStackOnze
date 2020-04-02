<?php 

namespace App\DAO;

abstract class Connection{
    /**
     * @var \PDO
     */
    protected $pdo;

    function __construct(){
        $dsn = "mysql:host=localhost;dbname=bethehero;port=3306";
        $this->pdo = new \PDO($dsn, 'root', '');
        $this->pdo->setAttribute(
            \PDO::ATTR_ERRMODE,
            \PDO::ERRMODE_EXCEPTION
        );
    }
}