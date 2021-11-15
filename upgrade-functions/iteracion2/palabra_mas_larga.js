const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    let aux=0;
    let palabra="";

    for (let index = 0; index < param.length; index++) {
        if(aux < param[index].length){
            aux=param[index].length;
            palabra=param[index];
        }else if(aux == param[index].length){
            palabra+=" , " +param[index];
        }
    }
    console.log(palabra);
}
findLongestWord(avengers);