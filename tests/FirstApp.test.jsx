import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas First app', () => {
    // test('debe hacer match con el snapshot', () => {
    //     const title = 'Hola, Soy Goku';
    //     const { container } = render(<FirstApp title = { title } />);
    //     expect( container ).toMatchSnapshot();
    // });

    test('debe mostrar el titulo en un H1', () => {
        const title = 'Hola, Soy Gokuff';
        const { container, getByText, getByTestId } = render(<FirstApp title = { title } />);
        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title)
        expect( getByTestId('test-title').innerHTML).toContain(title)
    });

    test('debe mostrar el Subtitulo enviado por props', () => {
        const title = 'Hola, Soy Gokuff';
        const subtitle = 'Hay un subtitle';

        const { getAllByText } = render(
            <FirstApp 
                subtitle = { subtitle }    
                title = { title } 
            />
        );

        expect( getAllByText(subtitle).length).toBe(2)
    });
});