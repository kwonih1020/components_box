import React, { useState, useCallback } from "react";
import theme from "./global/theme";
import styled, { ThemeProvider } from "styled-components";

import GlobalButton from "./global_elements/GlobalButton";
import GlobalModal from "./global_elements/GlobalModal";
import NewGlobalModal from "./global_elements/NewGlobalModal";
import useModal from "./hooks/useModal";

// For Second Global Modal Start
const Form = () => {
    return (
        <form>
            <input placeholder="입력바람" />
        </form>
    );
};
// ends

function App() {
    // For First Global Modal Start
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    // ends

    // For Second Global Modal Start
    const [modalOption, showModal] = useModal();
    const onClick = useCallback(() => {
        showModal(true, "밑 form도 변경 가능함", () => {}, null, <Form />);
    }, [modalOption]);
    // ends

    return (
        <ThemeProvider theme={theme}>
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

                {/* 첫번째 모달 */}
                <h2>모달 창</h2>
                <button onClick={openModal}>모달팝업</button>
                <GlobalModal
                    open={modalOpen}
                    close={closeModal}
                    header="Header 제목"
                    width="100"
                    height="50"
                >
                    {/* 여기에 내용이 들어가면 됨 */}
                    <Form />
                    {/* 함수를 하나 만들어서 여기에 자유롭게 넣어도됨 */}
                </GlobalModal>

                {/* 두번째 모달 */}
                <h2>두번째 모달 창</h2>
                <button onClick={onClick}>모달버튼</button>
                <NewGlobalModal modalOption={modalOption} width={500} />
            </div>
        </ThemeProvider>
    );
}

const Wrapper = styled.form`
    max-width: 800px;
    margin: 0 auto;
    padding: 8px;
    display: flex;
    justify-content: space-around;
    background-color: ${(props) => props.theme.successColor};
`;

export default App;
