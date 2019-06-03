'use strict';


/**
 * Retorna uma lista de autores
 *
 * skip Integer número de autores iniciais para serem ignorados no resultado (optional)
 * limit Integer máximo de autores para retornar (optional)
 * returns List
 **/
exports.autoresGET = function(skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "birthday" : "1892-01-03T00:00:00.000Z",
  "nationality" : "British",
  "name" : "J. R. R. Tolkien",
  "id" : 1
}, {
  "birthday" : "1892-01-03T00:00:00.000Z",
  "nationality" : "British",
  "name" : "J. R. R. Tolkien",
  "id" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deleta um autor pelo id
 *
 * id String 
 * returns inline_response_400
 **/
exports.autoresIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna um autor pelo id
 *
 * id String 
 * returns Autor
 **/
exports.autoresIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "birthday" : "1892-01-03T00:00:00.000Z",
  "nationality" : "British",
  "name" : "J. R. R. Tolkien",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adiciona um autor no sistema
 *
 * inventoryItem Autor Inventory item to add (optional)
 * no response value expected for this operation
 **/
exports.autoresPOST = function(inventoryItem) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retorna uma lista de generos
 *
 * skip Integer número de generos iniciais para serem ignorados no resultado (optional)
 * limit Integer máximo de generos para retornar (optional)
 * returns List
 **/
exports.generosGET = function(skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Fantasia",
  "description" : "Fantasia é um gênero da ficção em que se usa geralmente fenômenos sobrenaturais, mágicos e outros como um elemento primário do enredo, tema ou configuração.",
  "id" : 1
}, {
  "name" : "Fantasia",
  "description" : "Fantasia é um gênero da ficção em que se usa geralmente fenômenos sobrenaturais, mágicos e outros como um elemento primário do enredo, tema ou configuração.",
  "id" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deleta um genero pelo id
 *
 * id String 
 * returns inline_response_400
 **/
exports.generosIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna um genero pelo id
 *
 * id String 
 * returns Genero
 **/
exports.generosIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "Fantasia",
  "description" : "Fantasia é um gênero da ficção em que se usa geralmente fenômenos sobrenaturais, mágicos e outros como um elemento primário do enredo, tema ou configuração.",
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adiciona um genero no sistema
 *
 * inventoryItem Genero Inventory item to add (optional)
 * no response value expected for this operation
 **/
exports.generosPOST = function(inventoryItem) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retorna uma lista de livros avaliados
 *
 * skip Integer número de livros iniciais para serem ignorados no resultado (optional)
 * limit Integer máximo de livros para retornar (optional)
 * returns List
 **/
exports.livrosGET = function(skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "releaseDate" : "2017-04-17T00:00:00.000Z",
  "price" : 99.9,
  "author" : {
    "birthday" : "1892-01-03T00:00:00.000Z",
    "nationality" : "British",
    "name" : "J. R. R. Tolkien",
    "id" : 1
  },
  "isbn" : "9780261103252",
  "name" : "The Lord of the Rings",
  "genre" : {
    "name" : "Fantasia",
    "description" : "Fantasia é um gênero da ficção em que se usa geralmente fenômenos sobrenaturais, mágicos e outros como um elemento primário do enredo, tema ou configuração.",
    "id" : 1
  },
  "description" : "Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro."
}, {
  "releaseDate" : "2017-04-17T00:00:00.000Z",
  "price" : 99.9,
  "author" : {
    "birthday" : "1892-01-03T00:00:00.000Z",
    "nationality" : "British",
    "name" : "J. R. R. Tolkien",
    "id" : 1
  },
  "isbn" : "9780261103252",
  "name" : "The Lord of the Rings",
  "genre" : {
    "name" : "Fantasia",
    "description" : "Fantasia é um gênero da ficção em que se usa geralmente fenômenos sobrenaturais, mágicos e outros como um elemento primário do enredo, tema ou configuração.",
    "id" : 1
  },
  "description" : "Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro."
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna os livro de um genero
 *
 * idGenero String 
 * skip Integer número de livros iniciais para serem ignorados no resultado (optional)
 * limit Integer máximo de livros para retornar (optional)
 * returns List
 **/
exports.livrosGenerosIdGeneroGET = function(idGenero,skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "releaseDate" : "2017-04-17T00:00:00.000Z",
  "price" : 99.9,
  "author" : {
    "birthday" : "1892-01-03T00:00:00.000Z",
    "nationality" : "British",
    "name" : "J. R. R. Tolkien",
    "id" : 1
  },
  "isbn" : "9780261103252",
  "name" : "The Lord of the Rings",
  "genre" : {
    "name" : "Fantasia",
    "description" : "Fantasia é um gênero da ficção em que se usa geralmente fenômenos sobrenaturais, mágicos e outros como um elemento primário do enredo, tema ou configuração.",
    "id" : 1
  },
  "description" : "Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro."
}, {
  "releaseDate" : "2017-04-17T00:00:00.000Z",
  "price" : 99.9,
  "author" : {
    "birthday" : "1892-01-03T00:00:00.000Z",
    "nationality" : "British",
    "name" : "J. R. R. Tolkien",
    "id" : 1
  },
  "isbn" : "9780261103252",
  "name" : "The Lord of the Rings",
  "genre" : {
    "name" : "Fantasia",
    "description" : "Fantasia é um gênero da ficção em que se usa geralmente fenômenos sobrenaturais, mágicos e outros como um elemento primário do enredo, tema ou configuração.",
    "id" : 1
  },
  "description" : "Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro."
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna os livro de um idioma
 *
 * idIdioma String 
 * skip Integer número de livros iniciais para serem ignorados no resultado (optional)
 * limit Integer máximo de livros para retornar (optional)
 * returns List
 **/
exports.livrosIdiomasIdIdiomaGET = function(idIdioma,skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "releaseDate" : "2017-04-17T00:00:00.000Z",
  "price" : 99.9,
  "author" : {
    "birthday" : "1892-01-03T00:00:00.000Z",
    "nationality" : "British",
    "name" : "J. R. R. Tolkien",
    "id" : 1
  },
  "isbn" : "9780261103252",
  "name" : "The Lord of the Rings",
  "genre" : {
    "name" : "Fantasia",
    "description" : "Fantasia é um gênero da ficção em que se usa geralmente fenômenos sobrenaturais, mágicos e outros como um elemento primário do enredo, tema ou configuração.",
    "id" : 1
  },
  "description" : "Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro."
}, {
  "releaseDate" : "2017-04-17T00:00:00.000Z",
  "price" : 99.9,
  "author" : {
    "birthday" : "1892-01-03T00:00:00.000Z",
    "nationality" : "British",
    "name" : "J. R. R. Tolkien",
    "id" : 1
  },
  "isbn" : "9780261103252",
  "name" : "The Lord of the Rings",
  "genre" : {
    "name" : "Fantasia",
    "description" : "Fantasia é um gênero da ficção em que se usa geralmente fenômenos sobrenaturais, mágicos e outros como um elemento primário do enredo, tema ou configuração.",
    "id" : 1
  },
  "description" : "Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro."
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deleta um livro pelo isbn
 *
 * isbn String 
 * returns inline_response_400
 **/
exports.livrosIsbnDELETE = function(isbn) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retorna um livro pelo isbn
 *
 * isbn String 
 * returns Livro
 **/
exports.livrosIsbnGET = function(isbn) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "releaseDate" : "2017-04-17T00:00:00.000Z",
  "price" : 99.9,
  "author" : {
    "birthday" : "1892-01-03T00:00:00.000Z",
    "nationality" : "British",
    "name" : "J. R. R. Tolkien",
    "id" : 1
  },
  "isbn" : "9780261103252",
  "name" : "The Lord of the Rings",
  "genre" : {
    "name" : "Fantasia",
    "description" : "Fantasia é um gênero da ficção em que se usa geralmente fenômenos sobrenaturais, mágicos e outros como um elemento primário do enredo, tema ou configuração.",
    "id" : 1
  },
  "description" : "Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Adiciona um livro no sistema
 *
 * inventoryItem Livro Inventory item to add (optional)
 * no response value expected for this operation
 **/
exports.livrosPOST = function(inventoryItem) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retorna os livro com preços de promoção
 *
 * skip Integer número de livros iniciais para serem ignorados no resultado (optional)
 * limit Integer máximo de livros para retornar (optional)
 * returns List
 **/
exports.livrosPromocoesGET = function(skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "releaseDate" : "2017-04-17T00:00:00.000Z",
  "price" : 99.9,
  "author" : {
    "birthday" : "1892-01-03T00:00:00.000Z",
    "nationality" : "British",
    "name" : "J. R. R. Tolkien",
    "id" : 1
  },
  "isbn" : "9780261103252",
  "name" : "The Lord of the Rings",
  "genre" : {
    "name" : "Fantasia",
    "description" : "Fantasia é um gênero da ficção em que se usa geralmente fenômenos sobrenaturais, mágicos e outros como um elemento primário do enredo, tema ou configuração.",
    "id" : 1
  },
  "description" : "Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro."
}, {
  "releaseDate" : "2017-04-17T00:00:00.000Z",
  "price" : 99.9,
  "author" : {
    "birthday" : "1892-01-03T00:00:00.000Z",
    "nationality" : "British",
    "name" : "J. R. R. Tolkien",
    "id" : 1
  },
  "isbn" : "9780261103252",
  "name" : "The Lord of the Rings",
  "genre" : {
    "name" : "Fantasia",
    "description" : "Fantasia é um gênero da ficção em que se usa geralmente fenômenos sobrenaturais, mágicos e outros como um elemento primário do enredo, tema ou configuração.",
    "id" : 1
  },
  "description" : "Numa cidadezinha indolente do Condado, um jovem hobbit é encarregado de uma imensa tarefa. Deve empreender uma perigosa viagem através da Terra-média até as Fendas da Perdição, e lá destruir o Anel do Poder - a única coisa que impede o domínio maléfico do Senhor do Escuro."
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

