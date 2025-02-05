import path from 'path';
import { fileURLToPath } from 'url';
import xlsx from 'node-xlsx';

export default function () {
  // Parse XLSX into JSON
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  let xlsxJson = xlsx.parse(__dirname + '/Listagem_entidades_autorizadas_a_beneficiar_da_consignacao_2022.xlsx')

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
