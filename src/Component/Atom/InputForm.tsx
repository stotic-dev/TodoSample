import { useContext } from "react";
import styled from "styled-components";
import { InputProviderType, InputTextContext, InputTextType } from "../../Provider/InputTextProvider";

export type InputForm = {
  placeholder: string;
  type: InputProviderType;
};

export const InputFormElement = (prop: InputForm) => {
  const { placeholder, type } = prop;
  const context = useContext(InputTextContext);

  const state = type === InputProviderType.monday ? Reflect.get(context, type.valueOf()) as InputTextType<number> : Reflect.get(context, type.valueOf()) as InputTextType<string>;

  const value = state.value.toString();

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let text = event.target.value;
    if(type === InputProviderType.monday){
      let method = state as InputTextType<number>;
        if(parseFloat(text)){
          method.setMethod(parseFloat(text));
        }else{
          method.setMethod(parseFloat("0"));
        }
        return
    }

    let method = state as InputTextType<string>;
    method.setMethod(text);
  };

  return (
    <SInput value={value} onChange={onChangeText} type="text" placeholder={placeholder}/>
  );
};

const SInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #000;
  background-color: #fff;

  &:focus {
    background-color: #d5ababb7;
    outline: none;
  }
`;
