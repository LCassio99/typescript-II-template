/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum CoresArcoIris{
  VERMELHO = 'vermelho',
  LARANJA = 'laranja',
  AMARELO = 'amarelo',
  VERDE = 'verde',
  AZUL = 'azul',
  ANIL = 'anil',
  VIOLETA = 'violeta'
}

type Pessoa = {
  nome: string,
  idade: number,
  corFavorita: CoresArcoIris
}

const pessoa1: Pessoa = {
  nome: 'Luciano',
  idade: 22,
  corFavorita: CoresArcoIris.ANIL
}

const pessoa2: Pessoa = {
  nome: 'Lucas',
  idade: 26,
  corFavorita: CoresArcoIris.VIOLETA
}

const pessoa3: Pessoa = {
  nome: 'Levi',
  idade: 20,
  corFavorita: CoresArcoIris.VERDE
}  

const pessoa4: Pessoa = {
  nome: 'Zezinho',
  idade: 90,
  corFavorita: CoresArcoIris.LARANJA
}
