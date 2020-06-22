//Método 1
//Fazer com process.argv

// const readline = require('readline');

// //CLI question
// console.log('Type ZIP Code, separate them with commas:  ');

// let userAnswerArray = [];

// const userInfos = () => {

//   const rl = readline.createInterface({
//     input: process.stdin,
//   });

//   rl.question('ZIP Codes', (answer) => {
//     // console.log(`ZIP Codes: ${answer}`);
//     userAnswerArray = answer;

//     rl.close();

//     return userAnswerArray;

//   });
// }

// module.exports = userInfos;

//---------------------------------------------------------------------------------------------

//Método 2
const inquirer = require('inquirer');

//Função que define a interface de linha de comando
const cliArgs = () => {

  let question = {
    type: 'input',
    name: 'zip',
    message: 'Type ZIP Codes (just numbers) and separate them with commas:  ',
    filter: input => {
      return input;
    }
  }

  return inquirer.prompt(question).then(inputs => {

    return inputs.zip;

  });
}

//Função que retorna a lista de CEPs escolhido pelo usuário
const zipCodeList = async () => {
  const zipCodes = await cliArgs();

  try {

    if (zipCodes == undefined) {
      throw Error;

    } else {
      return zipCodes;
    }

  } catch {
    throw Error;
  }
}

module.exports = { zipCodeList };