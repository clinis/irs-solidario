const xlsx = require('async-xlsx');

module.exports = function() {
  xlsxJson = xlsx.parse(__dirname + '/Listagem_entidades_autorizadas_a_beneficiar_da_consignacao_2019.xlsx');
  parsedData = xlsxJson[0]["data"];
  parsedData.splice(0, 2);
  return {
    data: parsedData
  };
}
