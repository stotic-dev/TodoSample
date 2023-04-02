import styled from "styled-components";
import {
  Draggable,
  Droppable,
} from "react-beautiful-dnd";
import { Project } from "../../Classes/Project";
import { ProjectItem } from "../Molcule/ProjectItem";

export const ProjectList = (props: {
  isActive: boolean;
  prjList: Project[];
}) => {

  // parameter configuration
  const { isActive, prjList } = props;

  return (
    <Container>
      <div className="prj-title-wrapper">
        <h2 className={`${isActive ? "active" : "unactive"}-list-title`}>{`${
          isActive ? "実行中" : "完了済み"
        }のプロジェクト`}</h2>
      </div>
      <Droppable droppableId={`${isActive ? "active" : "unactive"}-list`}>
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {prjList.map((prj, index) => {
              return (
                <Draggable key={prj.id} draggableId={prj.id} index={index}>
                  {(provided) => (
                    <div className="project-list"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ProjectItem key={prj.id} project={prj} />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 5px;
  border: 1px solid #9c7e7e;
  background-color: #fff;
  padding: 8px;

  .droping {
    background-color: #e09797;
  }

  .prj-title-wrapper {
    border-bottom: 1px solid #6b6b6b;
    margin-bottom: 10px;

    h2 {
      margin: 5px 0;
    }

    .active-list-title {
      color: red;
    }

    .unactive-list-title {
      color: blue;
    }
  }

  .project-list:not(:last-child){
    margin-bottom: 10px;
  }
`;
