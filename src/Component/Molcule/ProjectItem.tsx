import { Project } from "../../Classes/Project";
import styled from "styled-components";

export type ProjectItemProp = {
  project: Project;
};

export const ProjectItem = (props: ProjectItemProp) => {
  const {
    project: { prjName, description, date },
  } = props;

  return (
    <Container className="list" draggable={true}>
      <div className="areaContainer">
        <h4>プロジェクト名</h4>
        <p className="name">{prjName}</p>
      </div>
      <div className="areaContainer">
        <h4>概要</h4>
        <p className="desc">{description}</p>
      </div>
      <p className="date">{`${date}人日`}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 8px 15px;
  align-items: flex-start;
  border: 1px solid #000;
  border-radius: 8px;

  .areaContainer{
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    align-items: flex-start;
    width: fit-content;
    padding-right: 20px;
    min-height: 80px;

    &:has(.desc){
        flex: 1;
    }

    h4{
        height: fit-content;
        margin: 0;
        padding: 0;
    }

    p{
        height: auto;
        margin-top: 0;
        margin-bottom: auto;
        padding-left: 15px;
    }

    .name {
      word-break: break-all;
    }
  
  }

  .date {
    width: fit-content;
    margin-bottom: 5px;
    margin-top: auto;
    padding: 8px 20px;
    vertical-align: bottom;
  }
`;
