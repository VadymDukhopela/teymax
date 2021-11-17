let namalna = 1;

do{

    const fname = prompt("Имя: ", "");
    const yearsOld = prompt("Возраст: ", "");
    const occupation = prompt("Професия: ", "");
    const food = prompt("Любимое блюдо: ", "");

    let result = confirm("Имя: " + fname + "    " +  
                         "Возраст: " + yearsOld + "    " +
                         "Професия: " + occupation + "    " +
                         "Любимое блюдо: " + food + "    "
                         );

    result == true? namalna = 0: namalna = 1;
}while(namalna);
