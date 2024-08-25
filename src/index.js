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


function somarVetores(a, b) {
    const tamanhoMax = Math.max(a.length, b.length);
    const resultado = new Array(tamanhoMax);

    for (let i = 0; i < tamanhoMax; i++) {
        const valorA = a[i] !== undefined ? a[i] : 0;
        const valorB = b[i] !== undefined ? b[i] : 0;

        if (Array.isArray(valorA) && Array.isArray(valorB)) {
            resultado[i] = somarVetores(valorA, valorB); 
        } else if (Array.isArray(valorA)) {
            resultado[i] = somarVetores(valorA, [valorB]); 
        } else if (Array.isArray(valorB)) {
            resultado[i] = somarVetores([valorA], valorB); 
        } else {
            resultado[i] = valorA + valorB; 
        }
    }

    return resultado;
}

function intercalarElementos(a, b) {
    const tamanhoMax = a.length + b.length;
    const resultado = new Array(tamanhoMax).fill(0);
    
    let posA = 0, posB = 0, posRes = 0;
    
    while (posA < a.length || posB < b.length) {
        if (posA < a.length) {
            resultado[posRes++] = a[posA++];
        }
        if (posB < b.length) {
            resultado[posRes++] = b[posB++];
        }
    }

    return resultado;
}

module.exports = {
    copia,
    inverso,
    somarVetores,
    intercalarElementos
}