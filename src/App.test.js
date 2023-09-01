import React from 'react';
import {render} from "@testing-library/react";
import App from './App';

describe("App component", ()=>{
    it("Should render app with Error Message ",()=>{
        const{asFragment}=render(<App/>);
        expect(asFragment()).toMatchSnapshot();
    });
});