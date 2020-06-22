const { gettingZipInfos } = require('./apiIntegration/integrationViaCepApi');

const processZipList = async () => {

    let repeatedZipList = await gettingZipInfos();

    filteredList = repeatedZipList.filter(element => {
        return !this[element.cep] && (this[element.cep] = true);
    }, Object.create(null));
}

processZipList();