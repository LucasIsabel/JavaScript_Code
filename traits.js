function firstLetterNameUpperCase(variable) {
    var arrayNames = variable.trim().split(" ");

    var i = 0;

    while (i < arrayNames.length) {
        arrayNames[i] = arrayNames[i].slice(0, 1).toUpperCase() + arrayNames[i].slice(1).toLowerCase();
        i++;
    }

    return arrayNames.join(" ");
}