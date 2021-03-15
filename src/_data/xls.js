const xlsx = require('async-xlsx');

module.exports = function() {
  let xlsxJson = xlsx.parse(__dirname + '/Listagem_entidades_autorizadas_a_beneficiar_da_consignacao_2020.xlsx')
  let parsedData = xlsxJson[0]['data']
  parsedData.splice(0, 4);  // strip title lines AND header line
  return {
    data: parsedData,
  };
}
