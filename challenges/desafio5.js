db.produtos.findMany({
  $or: [
      { curtidas: { $eq: 36 } },
      { vendidos: { $eq: 85 } },
  ],
},
{ nome: 1, curtidas: 1, vendidos: 1 });