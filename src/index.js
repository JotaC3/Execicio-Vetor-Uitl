// copiar a para b
function copia(a, b) {
    bPosition = 0

    if (b.length > 0) {
        bPosition = b.length
    }



    for (let cont = 0; cont < a.length; cont++) {
        b[bPosition] = a[cont];
        bPosition++
    }
    console.log(b);
    return b;
}

copia([1, 2], [3, 4])

// copia b invertido
function inverso(a, b) {
    contadorA = 0
    bPosition = a.length -1

    if (b.length > 0) {
        bPosition = bPosition + b.length
    }

    for (let cont = a.length - 1; cont >= 0; cont--) {
        b[bPosition] = a[contadorA];
        contadorA++;
        bPosition--;
    }

    console.log(b);
    return b;
}
inverso([4,5,6], [1,2,3]);


module.exports = {
    copia,
    inverso
}