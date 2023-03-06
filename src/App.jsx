import React, { useState } from "react";

import GlobalButton from "./global_elements/GlobalButton";
import GlobalModal from "./global_elements/GlobalModal";
import styled from "styled-components";

function App() {
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="App">
            <h2>작은 버튼</h2>
            <Wrapper>
                <GlobalButton size="sm">기본</GlobalButton>
                <GlobalButton variant="success" size="sm" disabled>
                    성공
                </GlobalButton>
                <GlobalButton variant="error" size="sm">
                    오류
                </GlobalButton>
                <GlobalButton variant="warning" size="sm">
                    경고
                </GlobalButton>
            </Wrapper>
            <h2>중간 버튼</h2>
            <Wrapper>
                <GlobalButton size="md">기본</GlobalButton>
                <GlobalButton variant="success" size="md">
                    성공
                </GlobalButton>
                <GlobalButton variant="error" size="md" disabled>
                    오류
                </GlobalButton>
                <GlobalButton variant="warning" size="md">
                    경고
                </GlobalButton>
            </Wrapper>
            <h2>큰 버튼</h2>
            <Wrapper>
                <GlobalButton size="lg">기본</GlobalButton>
                <GlobalButton variant="success" size="lg">
                    성공
                </GlobalButton>
                <GlobalButton variant="error" size="lg">
                    오류
                </GlobalButton>
                <GlobalButton variant="warning" size="lg" disabled>
                    경고
                </GlobalButton>
            </Wrapper>

            <h2>모달 창</h2>
            <button onClick={openModal}>모달팝업</button>
            <GlobalModal
                open={modalOpen}
                close={closeModal}
                header="Modal heading"
            >
                여기에 내용이 들어가면 됨
            </GlobalModal>
        </div>
    );
}

const Wrapper = styled.form`
    max-width: 800px;
    margin: 0 auto;
    padding: 8px;
    display: flex;
    justify-content: space-around;
`;

export default App;
