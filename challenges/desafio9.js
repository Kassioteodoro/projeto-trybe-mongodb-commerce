db.produtos.findMany(
  { valoresNutricionais: 
    { $elemMatch: 
      { $and: [
        { tipo: { $eq: "calorias" } },
        { quantidade: { $lt: 500 } },
        ],
      },
    }, 
  },
  { nome: 1 },
);