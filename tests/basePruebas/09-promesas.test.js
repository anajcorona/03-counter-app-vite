import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas 09-promesas', () => {
    test('getHeroeByIdAsync debe de retornar un Heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
                expect( hero ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                
                done();
            });
    });

    test('getHeroeByIdAsync debe de Obtener un errror si un Heroe no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync( id )
            .catch( error => {
                console.log(error);
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            })
    })
})