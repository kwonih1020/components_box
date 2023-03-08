import React from "react";
import styled from "styled-components";

const GlobalLayout = ({ children }) => {
    return <Layout>{children}</Layout>;
};

const Layout = styled.div`
    background-color: #fbfbfd;
`;

export default GlobalLayout;
