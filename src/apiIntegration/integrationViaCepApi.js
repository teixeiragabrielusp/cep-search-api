const axios = require('axios');
const url = require('../utils/routes').urlViaCepZip;
const { zipCodeList } = require('../utils/cli');

//Função que retorna os ceps informados pelo usuário
const selectedZipCodes = async () => {

    try {
        const zipCodes = await zipCodeList();
        return [zipCodes];

    } catch (err) {
        console.log(err);
    }
}

//função que consulta os ceps na Api da Via Cep
const gettingZipInfos = async () => {
    try {

        let ziplist = await selectedZipCodes();
        let zipInfos = [];
        ziplist = ziplist[0].split(',');
        
        for (const zipCode of ziplist) {
            const response = await axios.get(`${url}/${zipCode}/json`);
            if (!response.data.erro === true) {
                zipInfos.push(response.data);
            }
        }

        console.log(zipInfos);
        return zipInfos;

    }
    catch (err) {
        console.log(error);
    }
}

gettingZipInfos();

// let exampleArr = [13444543, 13425650, 13424540, 13424540];
// let respArr = [];

// const getZipCode = async () => {
//     try {

//         for (const zipCode of exampleArr) {
//             const response = await axios.get(`${url}/${zipCode}/json`);
//             if(!response.data.erro === true) {
//                 respArr.push(response.data);
//             }
//         }

//         respArr.forEach(element => {

//         });

//         console.log(respArr);


//     } catch (error) {
//         console.log(error);
//     }
// }

// getZipCode();
// getZipArray();

