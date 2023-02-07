db.produtos.findMany(
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
  { nome: 1 },
);