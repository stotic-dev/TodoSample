import React, { FC } from "react";
import styled from "styled-components";

export type SubmitButtonProp = {
    children: React.ReactNode
    onClickAcion: () => void
}

export const SubmitButton: FC<SubmitButtonProp> = ({children, onClickAcion}) => {

    return (
        <SButton onClick={onClickAcion} >{children}</SButton>
    )
}

const SButton = styled.button`
    padding:10px 20px;
    border-radius: 10px;
    border: 1px solid #8c8c8c;
    background-color: #000000;
    color: #fff;

    &:hover{
        background-color: #ffffff;
        color: #000000;
    }
`;