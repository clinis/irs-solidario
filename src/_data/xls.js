const xlsx = require('node-xlsx').default;;

module.exports = function() {
  // Parse XLSX into JSON
  let xlsxJson = xlsx.parse(__dirname + '/Listagem_entidades_autorizadas_a_beneficiar_da_consignacao_2021.xlsx')

  // Trim irrelevant data
  let parsedData = xlsxJson[0]['data']
  parsedData.splice(0, 6);  // strip title lines AND header line

  // Return data as an array of ojects
  return {
    data: parsedData.map(function(line) {
      return {
        "nome": line[1],
        "nif": line[0],
        "localidade": line[2]
      }
    })
  };
}
