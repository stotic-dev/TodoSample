import { createContext, FC, useState } from "react";

export enum InputProviderType {
  prjname = "prjname",
  description = "description",
  monday = "monday",
}

export type InputTextType<T> = {
  type: InputProviderType;
  value: T;
  setMethod: React.Dispatch<T>;
};

export type InputTextProviderValue = {
  prjname: InputTextType<string>;
  description: InputTextType<string>;
  monday: InputTextType<number>;
};

export type ProviderProp = {
  children: React.ReactNode;
};

export const InputTextContext = createContext<InputTextProviderValue | {}>({});

export const InputTextProvider: FC<ProviderProp> = ({ children }) => {
  const [nameText, setNameText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [monday, setMonday] = useState(0);

  const valueObj: InputTextProviderValue = {
    prjname: {
      type: InputProviderType.prjname,
      value: nameText,
      setMethod: setNameText,
    },
    description: {
      type: InputProviderType.description,
      value: descriptionText,
      setMethod: setDescriptionText,
    },
    monday: {
      type: InputProviderType.monday,
      value: monday,
      setMethod: setMonday,
    },
  };

  return (
    <InputTextContext.Provider value={valueObj}>
      {children}
    </InputTextContext.Provider>
  );
};
