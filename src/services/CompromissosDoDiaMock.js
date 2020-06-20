import moment from "moment";
import TypesCompromissos from '../lib/TiposDeCompromissos';

export default [
  //segunda
  {
    id: '3',
    type: TypesCompromissos.VISIT,
    at: moment().day(1).hour({hour:10, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Mario",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  {
    id: '1',
    type: TypesCompromissos.MEETING,
    at: moment().day(1).hour({hour:16, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Ronaldo",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  {
    id: '2',
    type: TypesCompromissos.VISIT,
    at: moment().day(1).hour({hour:17, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Rodrigo",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  {
    id: '20',
    type: TypesCompromissos.MEETING,
    at: moment().day(1).hour({hour:19, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Banco Luso",
    nomeResponsavel: "Carlos",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  //terça
  {
    id: '4',
    type: TypesCompromissos.VISIT,
    at: moment().day(2).hour({hour:10, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Marcela",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  {
    id: '5',
    type: TypesCompromissos.MEETING,
    at: moment().day(2).hour({hour:13, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Cristiano",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  {
    id: '6',
    type: TypesCompromissos.MEETING,
    at: moment().day(2).hour({hour:15, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Carla",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  //quarta
  {
    id: '7',
    type: TypesCompromissos.VISIT,
    at: moment().day(3).hour({hour:13, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Renato",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  {
    id: '8',
    type: TypesCompromissos.VISIT,
    at: moment().day(3).hour({hour:14, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Renato",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  {
    id: '9',
    type: TypesCompromissos.VISIT,
    at: moment().day(3).hour({hour:20, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Renato",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  // quinta
  {
    id: '10',
    type: TypesCompromissos.MEETING,
    at: moment().day(4).hour({hour:10, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Renato",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  {
    id: '11',
    type: TypesCompromissos.MEETING,
    at: moment().day(4).hour({hour:16, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Renato",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  {
    id: '12',
    type: TypesCompromissos.VISIT,
    at: moment().day(4).hour({hour:17, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Renato",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  // sexta
  {
    id: '13',
    type: TypesCompromissos.MEETING,
    at: moment().day(5).hour({hour:9, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Renato",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  {
    id: '14',
    type: TypesCompromissos.MEETING,
    at: moment().day(5).hour({hour:11, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Renato",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
  {
    id: '15',
    type: TypesCompromissos.VISIT,
    at: moment().day(5).hour({hour:14, minute:0, second:0, millisecond:0}),
    nomeEmpresa: "Impacta",
    nomeResponsavel: "Renato",
    address: {
      cep: "09990730",
      street: "Av. Paulista",
      number: "1234",
      city: "São Paulo",
      uf: "SP",
    },
  },
];
