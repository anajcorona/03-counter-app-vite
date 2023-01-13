import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-away', () => {
    test('getImagen debe retornar un URL de la imagen', async() => {
        const url = await getImagen();
        console.log(url);
        expect( typeof url).toBe('string')
    });
});