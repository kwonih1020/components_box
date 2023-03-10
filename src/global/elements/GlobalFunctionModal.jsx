import React from "react";
import styled from "styled-components";

const GlobalFunctionModal = ({ modalOption, width }) => {
    const { onClose, onSubmit, title, element, onClickAlert } = modalOption;

    return (
        <div>
            {modalOption?.show && (
                <Wrapper>
                    <Background onClick={() => onClose()} />

                    <Contents width={width}>
                        <Content>
                            <h2>{title}</h2>
                            {element}
                            {/* 모달 컴포넌트 스타일링은 이렇게 준비했습니다. 모달마다 폼, 이벤트 문구, 
                            사진 등등 원하는 element구조가 있을 수 있기 때문에 h2 태그 밑에 자리를 마련해놨습니다.  */}
                        </Content>

                        <ButtonBox>
                            <button onClick={() => onSubmit()}>확인</button>
                            <button onClick={() => onClose()}>닫기</button>
                            <button onClick={() => onClickAlert()}>
                                alert
                            </button>
                        </ButtonBox>
                    </Contents>
                </Wrapper>
            )}
        </div>
    );
};

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

const Background = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
`;
const Contents = styled.div`
    width: ${(props) => props.width}px;
    padding: 15px 40px;
    background-color: #fff;
`;
const Content = styled.div``;
const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export default GlobalFunctionModal;
