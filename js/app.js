var app = angular.module('listaCompras', []);
/*
    a função recebe um parâmetro chamado $scope. O angular
    preenche o valor dessa variável de acordo com o seu nome (é o que
    chamamos de injeção de dependências).
*/
app.controller('ListaController', function($scope){
    //declaração de variáveis
    $scope.dados = {};
    $scope.lista = [];

    //atribuição de funções ao $scope
    $scope.inserirItem = function()
    {
      var tarefa = {
          nome: $scope.dados.nome,
          feita: false
      };

      if(tarefa.nome != ""){
        $scope.lista.push(tarefa);
        $scope.dados.nome = "";
    }
    };

    $scope.fazerItem = function(tarefa)
    {
      tarefa.feita = true;
    };

    $scope.limparLista = function()
    {
      //Remove todas as lista
      $scope.lista = [];
    };

    $scope.apagar = function(tarefa)
    {
      //pega o index da tarefa
      var index = $scope.lista.indexOf(tarefa);
       //Remove a tarefa selecionada
      $scope.lista.splice(index, 1 );
    };

});