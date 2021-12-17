<?php
require "Joueur.php";
require "JoueurDAO.php";

$listeJoueur = JoueurDAO::listerJoueurs();

$jsonJoueur = $listeJoueur.json_encode();

echo($jsonJoueur);
?>