db.produtos.find(
  { valoresNutricionais: 
    { $elemMatch: 
      { $and: [
        { tipo: { $eq: "calorias" } },
        { quantidade: { $lt: 500 } },
        ],
      },
    }, 
  },
  { _id: 0, nome: 1 },
);