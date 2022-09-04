var idnum = document.querySelector(".idnum_input")
var nomes = document.querySelector(".nomes_input")
var idade = document.querySelector(".idade_input")
var login = document.querySelector(".login_input")
var senha = document.querySelector(".senha_input")
var btn_id = document.querySelector(".btnid_input")
var btn_nome = document.querySelector(".btnome_input")
var btn_idade = document.querySelector(".btnidade_input")
var botao2 = document.querySelector(".botao2_input")
var botao3 = document.querySelector(".botao3_input")

////////////////////
//Lista de Usuarios
var usuarios = [
  {id: 1, nome: "Fred", idade: 23},
  {id: 2, nome: "Leda", idade: 27},
  {id: 3, nome: "Luiz", idade: 20},
  {id: 4, nome: "Cris", idade: 42},
  {id: 5, nome: "Fael", idade: 38},
  {id: 6, nome: "-", idade: "-"},
  {id: 7, nome: "-", idade: "-"},
]


//Procurar dados de usuario -- ID
btn_id.addEventListener('click', function(){
  var id_ = idnum.value
  var idBusca = usuarios.filter(x => x.id === parseInt(id_))
  var user_ = id_ <= usuarios.length
  
  
    if(user_ && id_ > 0 && usuarios[id_ - 1].nome === "-"){
    console.log("Nenhum usuário cadastrado nesse 'ID'")
    }
    else if(id_ > 0 && user_){
      console.log(idBusca)
    }
    else if(id_ === "" || id_ < 0){
      console.log("Campo vazio ou inválido.")
    }
    else{
      console.log("Não existe nenhum usuário com este 'ID'")
    }
 
})

//Procurar dados de usuario -- NOME
btn_nome.addEventListener('click', function(){
  var nomes_ = nomes.value
  var nomesF = nomes_.replace(/(^\w{1})/g, letra => letra.toUpperCase())
  var nomeBusca = usuarios.filter(y => y.nome === nomesF)
  
  if(nomes_ === ""){
    console.log("Campo vazio ou inválido.")
  }
  else if(nomes_ == "last"){
    console.log(usuarios.length)
  }
  else if(nomeBusca == ""){
    console.log("Não existe nenhum usuário com este 'NOME'")
  }
  else if(nomes_){
    console.log(nomeBusca)
  }
})
        
//Procurar dados de usuario -- IDADE
btn_idade.addEventListener('click', function(){
  var idade_ = idade.value
  var idadeBusca = usuarios.filter(z => z.idade === parseInt(idade_))
  
  if(idade_ === "" || idade_ < 0){
    console.log("Campo vazio ou inválido.")
  }
  else if(idadeBusca == ""){
    console.log("Não existe nenhum usuário com esta 'IDADE'")
  }
  else if(idade_ > 0){
    console.log(idadeBusca)
  }
})

/////////////////////////////
//Cadastrar dados de usuario
botao2.addEventListener('click', function(){
  var id_ = idnum.value
  var idade_ = idade.value
  var nomes_ = nomes.value
  var nomesF = nomes_.replace(/(^\w{1})/g, letra => letra.toUpperCase())
  var clear = usuarios.filter(x => x.nome === "-")
  var x = clear.length
  
  if(x > 0){
    var ids = clear[0].id
    
    if(idade_ === "" || nomes_ === ""){
    console.log("Preencha todos os campos 'NOME e IDADE")
    }
    else if(idade_ < 18 || idade_ > 60){
      console.log("Informe uma idade válida.")
    }
    else if(usuarios[ids - 2] !== undefined && nomesF === usuarios[ids - 2].nome && parseInt(idade_) === usuarios[ids - 2].idade){
      console.log("Usuário já cadastrado")
    }
    else if(clear[0].nome === "-"){
      usuarios[ids - 1].nome = nomesF
      usuarios[ids - 1].idade = parseInt(idade_)
      console.log("Usuário cadastrado com sucesso!")
      x--
    }
  }
  else if(x === 0){
    if(idade_ === "" || nomes_ === ""){
    console.log("Preencha todos os campos 'NOME e IDADE")
    }
    else if(idade_ < 18 || idade_ > 60){
      console.log("Informe uma idade válida.")
    }
    else{
     var dados = {id: usuarios.length + 1, nome: nomesF, idade: parseInt(idade_)}
     var adicionado = usuarios.push(dados)
     console.log("Usuário cadastrado com sucesso!") 
    }
  }

})

///////////////////////////
//Remover dados de usuario
botao3.addEventListener('click', function remo(){
  var id_ = idnum.value
  var idade_ = idade.value
  var nomes_ = nomes.value
  var nomesF = nomes_.replace(/(^\w{1})/g, letra => letra.toUpperCase())
  var clear_ = usuarios.filter(x => x.nome === nomesF)
  var x = 1
  var y = 0
  
  while(x === 1){
   if(idade_ === "" || nomes_ === ""){
      console.log("Preencha todos os campos 'NOME e IDADE")
      var x = 0
    }
    else if(clear_ == ""){
      console.log("Esse usuário não existe ou já foi removido")
      var x = 0
    }
    else if(clear_[y].nome !== nomesF || clear_[y].idade !== parseInt(idade_)){
      console.log("Dados inválidos")
      var x = 0
    }
    else if(clear_[y].nome === nomesF && clear_[y].idade === parseInt(idade_)){
      usuarios[clear_[y].id - 1].nome = "-"
      usuarios[clear_[y].id - 1].idade = "-"
      console.log("removido")
      var x = 0
    }
    else{
      console.log("Dados inválidos")
      y++
  
    } 
  }
})