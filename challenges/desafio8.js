db.produtos.deleteMany({ curtidas: { $lt: 50 } });
db.produtos.findMany({}, { nome: 1 });
