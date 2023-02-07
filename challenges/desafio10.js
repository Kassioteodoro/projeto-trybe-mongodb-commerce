db.produtos.find(
  { valoresNutricionais: 
    { $elemMatch: 
      { $and: [
        { tipo: { $eq: "proteínas" } },
        { quantidade: { $gte: 30 } },
        { quantidade: { $lte: 40 } },
        ],
      },
    }, 
  },
  { _id: 0, nome: 1 },
);