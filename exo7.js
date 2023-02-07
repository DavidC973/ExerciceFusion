
let array1= ['10','20','30'];
let array2= ['15','25', '35'];
let array3 = array1.concat(array2);//La fonction concat est utilisée pour fusionner deux ou plusieurs tableaux.

function sorted_fusion(array1,array2){
    console.log(array3); 
    console.log(array3.sort())//Trier un tableau d’entiers en JavaScript à l’aide de la méthode .sort
}

sorted_fusion(array1,array2)

/*function trierTableau(tableau) {
    for(let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau.length -i - 1; j++) {
            if (tableau[j]> tableau[j + 1]) {
                let temp = tableau [j];
                tableau[j] = tableau[j + 1];
                tableau[j + 1]=temp;
            }
        }
    }
    return tableau;
}
*/
//sorted_fusion(array1,array2);
//print(array3);



/*function trierTableau(tableau) {
    for(let i = 0; i < tableau.length; i++) {
        for (let j = 0; j < tableau.length -i - 1; j++) {
            if (tableau[j]> tableau[j + 1]) {
                let temp = tableau [j];
                tableau[j] = tableau[j + 1];
                tableau[j + 1]=temp;
            }
        }
    }
    return tableau;
}


console.log(trierTableau(tableauNonTrié)); //Affiche [1, 2, 3, 4, 5];*/