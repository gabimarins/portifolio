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
            "nome: "Leite",
            "quantidade: "1 xícaras e meia"
        }
    ]},
    {
    "_id": ObjectId(2),
    "nome": "Bolo de cenoura",
    "peso": "500g",
    "preco": 35,
    "ingredientes":  [
        {
            "nome": "Trigo",
            "quantidade": "1 xícara e meia"
        },
        {
            "nome": "Cenoura",
            "quantidade": "2 unidades"
        },
        {
            "nome": "Óleo",
            "quantidade": "1/2 xícara"
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
