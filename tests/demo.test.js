/*
La parte de las pruebas tiene la inicializacion, despues el estimulo y al final las asersiones (observar el omportamiento esperado)
*/

describe('Pruebas en Democomponent />', () => {
    test('Esta prueba no debe de fallar', () => {

        //1.- Inicialización
      const message1 = 'Hola Mundo';
    
        //2.- Estimulo
      const mesage2 = message1.trim();
    
        //3.- Asersiones: Observar el comportamiento esperado
      expect( message1 ).toBe( mesage2 );
    })
})