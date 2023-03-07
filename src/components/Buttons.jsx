import React from "react";
import GlobalButton from "../global/elements/GlobalButton";
import styled from "styled-components";

const Buttons = () => {
    return (
        <>
            <h2>작은 버튼</h2>
            <Wrapper>
                <GlobalButton size="sm" word="normal" />
                <GlobalButton variant="success" size="sm" word="success" />
                <GlobalButton variant="error" size="sm" word="error" />
                <GlobalButton variant="warning" size="sm" word="warning" />
                {/* 버튼사이에 무엇을 넣든 Global Button에서 { children } 으로 받을수 있음 */}
            </Wrapper>
            <h2>중간 버튼</h2>
            <Wrapper>
                <GlobalButton size="md" word="normal" />
                <GlobalButton variant="success" size="md" word="success" />
                <GlobalButton variant="error" size="md" disabled word="error" />
                <GlobalButton variant="warning" size="md" word="warning" />
            </Wrapper>
            <h2>큰 버튼</h2>
            <Wrapper>
                <GlobalButton size="lg" word="normal" />
                <GlobalButton variant="success" size="lg" word="success" />
                <GlobalButton variant="error" size="lg" word="error" />
                <GlobalButton
                    variant="warning"
                    size="lg"
                    disabled
                    word="warning"
                />
            </Wrapper>
        </>
    );
};

const Wrapper = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 8px;
    display: flex;
    justify-content: space-around;
    // background-color: black;
`;

export default Buttons;
