import React from "react";
import theme from "./global/css/themeColor";
import styled, { ThemeProvider } from "styled-components";
import GlobalLayout from "./global/css/GlobalLayout";
import GlobalHeader from "./global/elements/GlobalHeader";

import Buttons from "./components/Buttons";
import Modal from "./components/Modal";
import FunctionModal from "./components/FunctionModal";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalHeader></GlobalHeader>
            <GlobalLayout>
                <Home className="App">
                    <Buttons></Buttons>
                    <Modal></Modal>
                    <FunctionModal></FunctionModal>
                </Home>
            </GlobalLayout>
        </ThemeProvider>
    );
}

const Home = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 8px;
    background-color: ${(props) => props.theme.successColor};
`;

export default App;
