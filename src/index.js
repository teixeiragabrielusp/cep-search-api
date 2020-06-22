const { gettingZipInfos } = require('./apiIntegration/integrationViaCepApi');

const processZipList = async () => {

    let repeatedZipList = await gettingZipInfos();

    filteredList = repeatedZipList.filter(element => {
        return !this[element.cep] && (this[element.cep] = true);
    }, Object.create(null));

    return filteredList;
}

const orderZipList = async () => {
    let messyList = await processZipList();

    let orderedList = messyList.sort((a, b) => a.logradouro.length - b.logradouro.length);

    return console.log(orderedList);
}

orderZipList();