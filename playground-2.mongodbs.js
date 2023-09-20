use("db_patissier")
db.createCollection("Cake");


db.Cake.insertMany([
    {
    _id: ObjectId(1),
    nome: "Bolo de chocolate",
    peso: "2kg",
    preco: 100,
    ingredientes:  [
        {
            nome: "Trigo",
            quantidade: "3 xícaras"
        },
        {
            nome: "Achocolatado",
            quantidade: "2 xícaras"
        },
        {
            nome: "Leite",
            quantidade: "1 xícara e meia"
        }
    ]},
    {
    _id: ObjectId(2),
    nome: "Bolo de cenoura",
    peso: "500g",
    preco: 35,
    ingredientes:  [
        {
            nome: "Trigo",
            quantidade: "1 xícara e meia"
        },
        {
            nome: "Cenoura",
            quantidade: "2 unidades"
        },
        {
            nome: "Óleo",
            quantidade: "1/2 xícara"
        }
    ]},
    {
    "_id": ObjectId(3),
    "nome": "Bolo de laranja",
    "peso": "500g",
    "preco": 35,
    "ingredientes":  [
        {
            "nome": "Trigo",
            "quantidade": "2 xícaras"
        },
        {
            "nome": "Laranja",
            "quantidade": "2 unidades"
        },
        {
            "nome": "Óleo",
            "quantidade": "1 xícara"
        }
    ]},
    {
    "_id": ObjectId(4),
    "nome": "Bolo dois amores",
    "peso": "3kg",
    "preco": 150,
    "ingredientes":  [
        {
            "nome": "Trigo",
            "quantidade": "6 xícaras"
        },
        {
            "nome": "Chocolate",
            "quantidade": "2 xícaras"
        },
        {
            "nome": "Ovos",
            "quantidade": "6 unidades"
        }
    ]}
]
)

//ATIVIDADE 3 - excluir document Cake com ObjectId(1)
db.Cake.deleteOne({ _id: ObjectId(1) });
//ou
use("db_patissier")
db.Cake.deleteOne({ _id: ObjectId("00000001733b43c1a4ff6e38") });

//ATIVIDADE 4 - listar nome e preco de todos os bolos
use("db_patissier")
db.Cake.find({}, { _id: 0, peso: 0, ingredientes: 0 });

//ATIVIDADE 5 - listar nome e preco de todos os bolos com preco menor a 70
use("db_patissier")
db.Cake.find({ preco: { $lte: 70 } }, { _id: 0, nome: 1, preco: 1 });

//ATIVIDADE 6 - cirar uma consulta que usando update mude o nome, peso e acrescente um ingrediente no bolo de ObjectId(2)
use("db_patissier")
db.Cake.updateOne(
    { _id: ObjectId("00000002733b43c1a4ff6e39") },
    {
      $set: {
        nome: "Bolo de Cenoura com Chocolate",
        peso: "1kg"
      },
      $push: {
        ingredientes:{
        nome: "Barra de Chocolate",
        quantidade: "1 unidade"
        }
      }
    }
  );

  //ATIVIDADE 7 - criar update que modifique 1 ingrediente de um bolo para o nome "ovo" e quantidade de "3 unidades"
  use("db_patissier")
  db.Cake.find({}, {});
  db.Cake.updateOne(
    { _id: ObjectId("00000003733b43c1a4ff6e3a"), "ingredientes.nome": "Óleo"},
    {
      $set: {
        "ingredientes.$.nome": "Ovo",
        "ingredientes.$.quantidade": "3 unidades"
      }
    }
  );
  
  
