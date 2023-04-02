import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Project } from "./Classes/Project";
import { Form } from "./Component/Organism/Form";
import { ProjectList } from "./Component/Organism/ProjectList";
import { InputTextProvider } from "./Provider/InputTextProvider";
import { ProjectProvider } from "./Provider/ProjectProvider";

export const App = () => {
  const [activeProjects, setActiveProject] = useState<Project[]>([]);
  const [unactiveProjects, setUnactiveProject] = useState<Project[]>([]);

  const onDragEnd = (result: any) => {
    console.log(result);
    const destination = result.destination;
    const source = result.source;
    const fromActive = source.droppableId === "active-list";

    if (destination.droppableId !== source.droppableId) {
      if (fromActive) {
        let movedList = [...activeProjects];
        let targetList = [...unactiveProjects];

        const movePrj = movedList.splice(source.index, 1)!;
        targetList.splice(destination.index, 0, movePrj[0]);

        setActiveProject(movedList);
        setUnactiveProject(targetList);
      } else {
        let movedList = [...unactiveProjects];
        let targetList = [...activeProjects];

        const movePrj = movedList.splice(source.index, 1)!;
        targetList.splice(destination.index, 0, movePrj[0]);

        setUnactiveProject(movedList);
        setActiveProject(targetList);
      }
    }
  };

  return (
    <>
      <ProjectProvider>
        <InputTextProvider>
          <Form projects={activeProjects} setProjects={setActiveProject} />
          <DragDropContext onDragEnd={onDragEnd}>
            <ProjectList isActive={true} prjList={activeProjects} />
            <ProjectList isActive={false} prjList={unactiveProjects} />
          </DragDropContext>
        </InputTextProvider>
      </ProjectProvider>
    </>
  );
};
