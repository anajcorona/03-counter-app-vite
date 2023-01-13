import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas <FirstApp />', () => {

    const title = 'Hola, Soy Goku';
    const subtitle = 'Hay un subtitle';

    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<FirstApp title = { title } />);
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar ele mensaje "Hola, soy Goku"', () => {
        //screen.debug();
        render(<FirstApp title = { title } />);
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('Debe mostrar el titulo en un H1', () => {
        render(<FirstApp title = { title } />);
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain(title);
    });

    test('Debe mostrar el Subtitulo enviado por props', () => {
        render(
            <FirstApp 
                subtitle = { subtitle }    
                title = { title } 
            />
        );

        expect( screen.getAllByText(subtitle).length).toBe(2);
    });
});