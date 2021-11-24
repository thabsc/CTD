// const funcMedia = require('./Aula14-modulos/Aula14');


// console.log(funcMedia(6,6,6));

// import {soma} from './Aula14-modulos/ModuloImportado';

// const soma = require('./Aula14-modulos/ModuloImportado');

// // console.log(soma(1,2));


const cep = require('cep-promise');

cep('04611002')
  .then(console.log)

  // {
  //   "cep":  "05010000",
  //   "state":  "SP",
  //   "city":  "São Paulo",
  //   "street":  "Rua Caiubí",
  //   "neighborhood":  "Perdizes",
  // }

  