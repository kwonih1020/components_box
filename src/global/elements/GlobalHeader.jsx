import React, { useState } from "react";
import styled from "styled-components";

const GlobalHeader = () => {
    const menuTitle = ["홈", "케어플랜", "메시지", "리포트"];
    const [menuActive, setMenuActive] = useState("");

    const toggleActive = (e) => {
        setMenuActive((prev) => {
            return e.target.value;
        });
    };

    return (
        <Header>
            <Navbar>
                {menuTitle?.map((title, i) => {
                    return (
                        <button
                            value={title}
                            key={i}
                            className={
                                "title" +
                                (title === menuActive ? " active" : "")
                            }
                            onClick={toggleActive}
                        >
                            {title}
                        </button>
                    );
                })}
            </Navbar>
        </Header>
    );
};

const Header = styled.div`
    width: 100%;
    background-color: white;
    height: 120px;
`;

const Navbar = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: space-between;
    padding-top: 72px;
    width: 568px;
    margin: 0 auto;
    .title {
        width: 84px;
        height: 26px;
        text-align: center;
        font-weight: 700;
        font-size: 18px;
        line-height: 26px;
        cursor: pointer;
        background: none;
        border: none;
        padding-bottom: 41px;
        &.active {
            border-bottom: 6px #5ed270 solid;
        }
    }
`;

export default GlobalHeader;
