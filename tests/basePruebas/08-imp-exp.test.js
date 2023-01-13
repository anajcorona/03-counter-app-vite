import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroe por id', () => {
        const id = 2;
        const hero = getHeroeById( id );
        expect( hero ).toEqual({ id: 2, name: 'Spiderman', owner: 'Marvel' })
    })
    test('getHeroeById debe de retornar undefined si no existe id', () => {
        const id = 200;
        const hero = getHeroeById( id );
        //expect( hero ).toBe(undefined);
        expect( hero ).toBeFalsy();
    })

    test('getHeroesByOwner debe de retornar un heroe por Heroes de DC', () => {
        const owner = "DC";
        const result = [{
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },
        {
            id: 3,
            name: 'Superman',
            owner: 'DC'
        },
        {
            id: 4,
            name: 'Flash',
            owner: 'DC'
        }];
        
        const heroesDC = getHeroesByOwner( owner );
        console.log(heroesDC)
        expect( heroesDC.length ).toBe( 3 );
        expect( heroesDC ).toEqual( result );
        expect( heroesDC ).toEqual( heroesDC.filter( (heroe) => heroe.owner === owner ));

    })

    test('getHeroesByOwner debe de retornar un heroe por Heroes de MARVEL', () => {
        const owner = "Marvel";
        const result = [{
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        },
        {
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        }];
        const heroesMarvel = getHeroesByOwner( owner );
        
        expect( heroesMarvel.length ).toBe( 2 );
        expect( heroesMarvel ).toEqual( result );
        expect( heroesMarvel ).toEqual( heroesMarvel.filter( (heroe) => heroe.owner === owner ));
    })

})