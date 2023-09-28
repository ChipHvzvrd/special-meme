import React from "react";
import About from "../About";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';



afterEach(cleanup);

describe('About component', () => {
    //FirstTest
    test('renders', () => {
        render(<About />);
    });
    //SecondTest
})



