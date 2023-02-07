db.produtos.updateMany({ valoresNutricionais: 
  { $elemMatch: 
    { $and: [
      { tipo: { $eq: "sódio" } },
      { percentual: { $gt: 40 } },
      ],
    },
  }, 
},
{ $addToSet: { tags: "muito sódio" } }); 

db.produtos.find({}, { _id: 0, nome: 1, tags: 1 });
