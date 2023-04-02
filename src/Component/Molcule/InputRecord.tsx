import { FC } from "react";
import styled from "styled-components";
import { InputProviderType } from "../../Provider/InputTextProvider";

import { InputForm, InputFormElement } from "../Atom/InputForm";

export type InputRecordProp = {
    title: string,
    placeholder: string,
    type: InputProviderType
}

export const InputRecord: FC<InputRecordProp> = ({title, placeholder, type}) => {

    return (
        <Container>
            <p>{title}</p>
            <InputFormElement type={type} placeholder={placeholder} />
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px auto;

  p{
    font-weight: bold;
    padding-right:15px;
    flex-basis: 130px;
    text-align: center;
  }

  input{
    flex-basis: 300px;
  }
`;