# IRS Solidário (ano fiscal 2021)

Este projeto é uma simples página web que lista, numa tabela, todas as entidades autorizadas a beneficiar da consignação de IRS.

## Motivo

O Ministério das Finanças disponibiliza, [no Portal das Finanças](https://info.portaldasfinancas.gov.pt/pt/apoio_contribuinte/IRS/Pages/IRS_entidades_beneficiarias_consignacao.aspx), uma listagem das entidades autorizadas a beneficiar da consignação de IRS em cada ano fiscal.

Essa listagem é disponibilizada no formato [.xlsx](https://en.wikipedia.org/wiki/Microsoft_Excel#File_formats), que não é um formato aberto, pois requer softwares específicos para poder ser lido. Tal limitação vai contra o Regulamento Nacional de Interoperabilidade Digital (incomprimento que, aliás, se [verifica bastante](https://ansol.org/normasabertas/rnid)).

Listando os dados numa simples tabela numa página web, o acesso aos dados é compatível com qualquer browser, em qualquer sistema operativo. Para além disso, também é bastante mais prático de aceder com dispositivos móveis.

## Instruções

Os ficheiros originais de dados estão arquivados na pasta `src/_data/`. O ficheiro `src/_data/xls.js` é onde é feita a extração dos dados.

Este projeto usa o gerador de sites estáticos [Eleventy](https://www.11ty.dev/) para construir o ficheiro HTML. Para reduzir o tamanho da página, o código CSS e HTML é minificado (ver ficheiro `.eleventy.js`). A página incorpora [Javascript](https://github.com/fiduswriter/Simple-DataTables) para melhorar a experiência de vizualização da tabela.

Para correr este projeto localmente, são utilizados os seguintes comandos:

Instalar as dependências:
```bash
npm install
```

Iniciar o projeto num servidor local:
```bash
npm run start
```
