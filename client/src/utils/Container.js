import styled, { css } from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: "Work Sans", sans-serif, "Nanum Gothic Coding", monospace;
    color: #0d0d0d;

    ${(props) =>
        props.isLoginPage &&
        css`
            justify-content: center;
            background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);
        `}

    ${(props) =>
        props.isRegisterPage &&
        css`
            justify-content: center;
            background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);
        `}
`;

export default Container;
