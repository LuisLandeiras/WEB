<?php

$xml= simplexml_load_file('pauta.xml');

$nota = 0;

for($i = 0; $i<=3; $i++){
    echo "Número: " .$xml->aluno[$i]."\n";
    echo "Nome: " .$xml->aluno[$i]->nome."\n";
    echo "Exame 1: " .$xml->aluno[$i]->exam1."\n";
    echo "Exame 2: " .$xml->aluno[$i]->exam2."\n";
    $nota = ($xml->aluno[$i]->exam1 + $xml->aluno[$i]->exam2)/2;
    echo "Nota Final: " .$nota."\n";
    echo "\n";
    if($nota < 9.5){
        echo "Aluno/a reprovado/a\n";
    }else{
        echo "Aluno/a reprovado/a\n";
    }
    echo "\n";
}
?>