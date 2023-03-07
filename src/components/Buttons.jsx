import React from "react";
import GlobalButton from "../global/elements/GlobalButton";
import styled from "styled-components";

const Buttons = () => {
    return (
        <>
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
        </>
    );
};

const Wrapper = styled.form`
    max-width: 800px;
    margin: 0 auto;
    padding: 8px;
    display: flex;
    justify-content: space-around;
    // background-color: black;
`;

export default Buttons;
