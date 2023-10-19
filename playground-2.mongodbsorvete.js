use("db_sorveteria");

db.createCollection("sorvete");

db.sorvete.insertMany([
    {
        sabor:"Abacaxi",
        preco_kg: 10
    },
    {
        sabor:"Nutella",
        preco_kg: 40
    },
    {
        sabor:"Morango",
        preco_kg: 20
    },
    {
        sabor:"Chocolate",
        preco_kg: 25
    },
    {
        sabor:"Flocos",
        preco_kg: 20
    },
    {
        sabor:"Nutella e Morango",
        preco_kg: 50
    }
]);

//1) listar todos os sorvetes
use ("db_sorveteria")
db.sorvete.find({});

//2) listar os sorvetes com preco_kg < 40
use ("db_sorveteria")
db.sorvete.find({preco_kg: {$lte: 40}});

//