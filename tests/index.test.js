const {copia} = require('../src/index')

describe('funciton copia', () =>{

    test('Retorna a=[null, 2, 3] b-[null, 2, 3]', () =>{
        const result = copia([null, 2, 3]);
        expect(result).toStrictEqual([null, 2, 3])
    });

})