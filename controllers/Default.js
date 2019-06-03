'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.autoresGET = function autoresGET (req, res, next) {
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Default.autoresGET(skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.autoresIdDELETE = function autoresIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.autoresIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.autoresIdGET = function autoresIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.autoresIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.autoresPOST = function autoresPOST (req, res, next) {
  var inventoryItem = req.swagger.params['inventoryItem'].value;
  Default.autoresPOST(inventoryItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.generosGET = function generosGET (req, res, next) {
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Default.generosGET(skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.generosIdDELETE = function generosIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.generosIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.generosIdGET = function generosIdGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.generosIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.generosPOST = function generosPOST (req, res, next) {
  var inventoryItem = req.swagger.params['inventoryItem'].value;
  Default.generosPOST(inventoryItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.livrosGET = function livrosGET (req, res, next) {
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Default.livrosGET(skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.livrosGenerosIdGeneroGET = function livrosGenerosIdGeneroGET (req, res, next) {
  var idGenero = req.swagger.params['idGenero'].value;
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Default.livrosGenerosIdGeneroGET(idGenero,skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.livrosIdiomasIdIdiomaGET = function livrosIdiomasIdIdiomaGET (req, res, next) {
  var idIdioma = req.swagger.params['idIdioma'].value;
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Default.livrosIdiomasIdIdiomaGET(idIdioma,skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.livrosIsbnDELETE = function livrosIsbnDELETE (req, res, next) {
  var isbn = req.swagger.params['isbn'].value;
  Default.livrosIsbnDELETE(isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.livrosIsbnGET = function livrosIsbnGET (req, res, next) {
  var isbn = req.swagger.params['isbn'].value;
  Default.livrosIsbnGET(isbn)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.livrosPOST = function livrosPOST (req, res, next) {
  var inventoryItem = req.swagger.params['inventoryItem'].value;
  Default.livrosPOST(inventoryItem)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.livrosPromocoesGET = function livrosPromocoesGET (req, res, next) {
  var skip = req.swagger.params['skip'].value;
  var limit = req.swagger.params['limit'].value;
  Default.livrosPromocoesGET(skip,limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
