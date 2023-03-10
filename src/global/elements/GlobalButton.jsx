import React from "react";
import styled, { css } from "styled-components";

const SIZES = {
    sm: css`
        --button-font-size: 0.875rem;
        --button-padding: 8px 12px;
        --button-radius: 4px;
    `,
    md: css`
        --button-font-size: 1rem;
        --button-padding: 12px 16px;
        --button-radius: 8px;
    `,
    lg: css`
        --button-font-size: 1.25rem;
        --button-padding: 16px 20px;
        --button-radius: 12px;
    `,
};

const VARIANTS = {
    success: css`
        --button-color: #ffffff;
        --button-bg-color: #28a745;
        --button-hover-bg-color: #218838;
    `,
    error: css`
        --button-color: #ffffff;
        --button-bg-color: #dc3545;
        --button-hover-bg-color: #c82333;
    `,
    warning: css`
        --button-color: #212529;
        --button-bg-color: #ffc107;
        --button-hover-bg-color: #e0a800;
    `,
};

const WORD = {
    normal: "기본",
    success: "성공",
    error: "오류",
    warning: "경고",
};

const GlobalButton = ({ disabled, children, size, variant, word, onClick }) => {
    const sizeStyle = SIZES[size];
    const variantStyle = VARIANTS[variant];
    const words = WORD[word];

    return (
        <Button
            disabled={disabled}
            sizeStyle={sizeStyle}
            variantStyle={variantStyle}
            onClick={onClick}
        >
            {words}
            {/* {children} */}
        </Button>
    );
};

const Button = styled.button`
    ${(p) => p.sizeStyle}
    ${(p) => p.variantStyle}

    margin: 0;
    border: none;
    cursor: pointer;
    font-family: "Noto Sans KR", sans-serif;
    font-size: var(--button-font-size, 1rem);
    padding: var(--button-padding, 12px 16px);
    border-radius: var(--button-radius, 8px);
    background: var(--button-bg-color, #0d6efd);
    color: var(--button-color, #ffffff);

    &:active,
    &:hover,
    &:focus {
        background: var(--button-hover-bg-color, #025ce2);
    }

    &:disabled {
        cursor: default;
        opacity: 0.5;
        background: var(--button-bg-color, #025ce2);
    }
`;

export default GlobalButton;
