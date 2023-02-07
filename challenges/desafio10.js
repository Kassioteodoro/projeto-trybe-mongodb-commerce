db.produtos.find(
  { valoresNutricionais: 
    { $elemMatch: 
      { $and: [
        { tipo: { $eq: "proteínas" } },
        { percentual: { $gte: 30 } },
        { percentual: { $lte: 40 } },
        ],
      },
    }, 
  },
  { _id: 0, nome: 1 },
);