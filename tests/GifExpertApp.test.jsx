import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en el componente <GifExpertApp /> ', () => {  

    test('debe de insertar una nueva categoria', () => { 


        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        
        fireEvent.input( input, {target: { value: 'Dragon Ball' }} );
        fireEvent.submit( form );


        fireEvent.input( input, {target: { value: 'One Piece' }} );
        fireEvent.submit( form );


        expect( screen.getAllByRole('heading', {level: 3}).length ). toBe(3);
        
    

    });

    test('no debe de insertar una nueva categoria existente', () => { 


        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        
        fireEvent.input( input, {target: { value: 'One Punch' }} );
        fireEvent.submit( form );


        expect( screen.getAllByRole('heading', {level: 3}).length ). toBe(1);
        
    

    });


});