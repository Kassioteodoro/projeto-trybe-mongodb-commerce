db.produtos.find({ nome: 
  { $and: [
    { nome: { $ne: "Big Mac" } },
    { nome: { $ne: "Big McChicken" } },
  ] } },
 { _id: 0, nome: 1, curtidas: 1, vendidos: 1 }); 