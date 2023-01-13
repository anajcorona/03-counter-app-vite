import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
       const testUSer = {
        uid: 'ABC123',
        username: 'El_Papi1502'
       };
       const user = getUser();

       //or use toEqual
       expect( testUSer ).toStrictEqual( user );
    })

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const name = "Ana";
        const user = getUsuarioActivo(name);

        const testUser = {
            uid: 'ABC567',
            username: name
        };
 
        expect( user ).toEqual( testUser );
     })
})