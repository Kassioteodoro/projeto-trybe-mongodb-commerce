db.produtos.findMany({
  $and: [
      { vendidos: { $gt: 50 } },
      { vendidos: { $lt: 100 } },
  ],
},
{ nome: 1, vendidos: 1 });