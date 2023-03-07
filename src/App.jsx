import React from "react";
import theme from "./global/css/themeColor";
import styled, { ThemeProvider } from "styled-components";

import Buttons from "./components/Buttons";
import Modal from "./components/Modal";
import FunctionModal from "./components/FunctionModal";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Home className="App">
                <Buttons></Buttons>
                <Modal></Modal>
                <FunctionModal></FunctionModal>
            </Home>
        </ThemeProvider>
    );
}

const Home = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 8px;
    // display: flex;
    background-color: ${(props) => props.theme.successColor};
`;

export default App;
