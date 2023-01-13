import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('getSalutdo debe retornar "Hola Fernando', () => {
        const name = 'Ana';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${name}`)
        })
})