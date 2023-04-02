import { SubmitButton } from "../Atom/SubmitButton";
import { InputRecord } from "../Molcule/InputRecord";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import {
  InputProviderType,
  InputTextContext,
  InputTextProviderValue
} from "../../Provider/InputTextProvider";
import { Validation, ValidationConfig } from "../../Logics/Validation";
import { Project } from "../../Classes/Project";

export const Form = (props: {projects: Project[], setProjects: React.Dispatch<Project[]>}) => {
  // set conf & props
  let prjResult: boolean;
  let descriptionResult: boolean;
  let mondayResult: boolean;
  const textValidateConf: ValidationConfig = {
    require: true,
    numberOnly: false
  };
  const dayValidationConf: ValidationConfig = {
    require: true,
    numberOnly: true
  };
  const { projects, setProjects } = props;

  // call Hooks
  const {prjname, description, monday} = useContext(InputTextContext) as InputTextProviderValue;

  useEffect(() => {
    console.log("change form values");
    prjResult = new Validation(prjname.value, textValidateConf).validation();
    descriptionResult = new Validation(description.value, textValidateConf).validation();
    mondayResult = new Validation(monday.value.toString(), dayValidationConf).validation();

  }, [prjname, description, monday]);

  // action method
  const onClickAction = () => {
    if(!prjResult && !descriptionResult && !mondayResult){
      alert("wrong format!");
      return;
    }

    let id = (Math.random() * 100).toFixed(0);

    let newProject = new Project(id, prjname.value, description.value, monday.value, true);
    setProjects([...projects, newProject]);

    prjname.setMethod("");
    description.setMethod("");
    monday.setMethod(0);
  };

  // return Compornent
  return (
    <Container>
      <ul>
        <li>
          <InputRecord
            title="プロジェクト名"
            placeholder="値を入力してください"
            type={InputProviderType.prjname}
          />
        </li>
        <li className="description">
          <InputRecord
            title="内容"
            placeholder="値を入力してください"
            type={InputProviderType.description}
          />
        </li>
        <li>
          <InputRecord
            title="工数"
            placeholder="値を入力してください"
            type={InputProviderType.monday}
          />
        </li>
      </ul>
      <div className="button-wrapper">
        <SubmitButton onClickAcion={onClickAction}>登録</SubmitButton>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 8px;
  border: 1.5px solid #f9a6a6;
  border-radius: 8px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }

  li {
    padding: 0 0 10px 0;
    margin: 0;
  }

  .button-wrapper {
    padding: 5px 20px;
  }

  .description {
    flex-basis: 150px;

    p {
      margin-top: 10px;
      margin-bottom: auto;
    }

    input {
      height: 150px;
    }
  }
`;
