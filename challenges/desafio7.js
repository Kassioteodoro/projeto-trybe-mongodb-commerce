db.produtos.findMany({
  $and: [
      { vendidos: { $ne: 50 } },
      { tags: { $exists: false } },
  ],
},
{ nome: 1, vendidos: 1 });
