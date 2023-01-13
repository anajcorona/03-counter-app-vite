import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CouterApp";


describe('Pruebas en el <counterApp/>', () => {
    const initialValue = 10;
    test('Debe hacer math con snapshot', () => { 
        const { container } = render(<CounterApp value={ initialValue }/>);
        expect( container ).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 100 <CounterApp/>', () => { 
        render(<CounterApp value={ 100 }/>);
        expect( screen.getByText(100) ).toBeTruthy();
        //expect( screen.getByRole('heading', {level:2}).innerHTML ).toContain('100');
    });

    test('Debe incrementar con el boton +1', () => { 
        render(<CounterApp value={ initialValue }/>);
        fireEvent.click( screen.getByText('+1'));
        expect( screen.getByText('11') ).toBeTruthy();
    });

    test('Debe incrementar con el boton -1', () => { 
        render(<CounterApp value={ initialValue }/>);
        fireEvent.click( screen.getByText('-1'));
        //screen.debug()
        expect( screen.getByText('9') ).toBeTruthy();
    });

    test('Debe funcionar el boton reset', () => { 
        render(<CounterApp value={ 300 }/>);
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));
        fireEvent.click( screen.getByText('+1'));

        //fireEvent.click( screen.getByText('Reset') );
        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}) );

        expect( screen.getByText(300) ).toBeTruthy();
    });
})