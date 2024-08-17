const {copia, inverso} = require('../src/index')

describe('função copia', () =>{

    test('Retorna a=b', () =>{
        const result = copia([1, 2, 3], []);
        expect(result).toStrictEqual([1, 2, 3]);
    });

    test('Se A tem um elemento nulo, ele copia esse elemento', ()=>{
        const result = copia([null, 2, 3], []);
        expect(result).toStrictEqual([null, 2, 3]);
    })

    test('Se A == null, B==null', ()=>{
        const result = copia([null], []);
        expect(result).toStrictEqual([null]);
    })

    test('Se A possui vários tipos de elementos, B deve retornar os mesmos tipos de elementos', ()=>{
        const result = copia([null, 'A', 23, true, 'João Carlos'], []);
        expect(result).toStrictEqual([null, 'A', 23, true, 'João Carlos']);
    })

    test('Se A é uma matriz, B deve ser uma matriz', ()=>{
        const result = copia([[1,2,33,4], ['A', 'B', 'C'],[8,9,99,4] ], []);
        expect(result).toStrictEqual([[1,2,33,4], ['A', 'B', 'C'],[8,9,99,4] ]);
    })

    test('B possui elementos prévios', () =>{
        const result = copia([1, 2, 3], [99, 88, 10]);
        expect(result).toStrictEqual([99, 88, 10, 1, 2, 3]);
    });


})

describe('função copia inverso', ()=>{
    test('Retorna a= inverso de b', () =>{
        const result = inverso([1, 2, 3], []);
        expect(result).toStrictEqual([3,2,1]);
    });

    test('Se a possui um elemento nulo, null também é copiado', () =>{
        const result = inverso([null, 2, 3], []);
        expect(result).toStrictEqual([3,2,null]);
    });

    test('Se a==null, b==null', () =>{
        const result = inverso([null], []);
        expect(result).toStrictEqual([null]);
    });
    
    test('Se a possui vários tipos de elementos, b possui esses mesmos tipos', () =>{
        const result = inverso([null, 'A', 23, true, 'João Carlos'], []);
        expect(result).toStrictEqual(['João Carlos', true, 23, 'A', null]);
    });

    test('Se a é uma matriz, b deve ser essa matriz inversa', () =>{
        const result = inverso([[1,2,33,4], ['A', 'B', 'C'],[8,9,99,4] ], []);
        expect(result).toStrictEqual([[8,9,99,4], ['A', 'B', 'C'],[1,2,33,4] ]);
    });

    test('Se b possui elementos previos, a deve ser copiado após esses elementos', () =>{
        const result = inverso([1, 2, 3], [99, 88, 10]);
        expect(result).toStrictEqual([99, 88, 10, 3, 2, 1]);
    }); 

})
