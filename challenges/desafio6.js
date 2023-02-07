db.produtos.findMany({
  $and: [
      { curtidas: { $gt: 10 } },
      { curtidas: { $lt: 100 } },
  ],
},
{ nome: 1, curtidas: 1 });