import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";

import {
  AsideTitle,
  Button,
  Input,
  InputForm,
  List,
  Select,
  TrashButton,
} from "./styles/components";

import { Sidebar } from "./styles/layout";

function TaskInput({ setTaskList }) {
  const [task, setTask] = React.useState("");
  const [selectTaskNature, setSelectTaskNature] = React.useState("Work");

  const createKey = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList((prevTaskList) => [
      ...prevTaskList,
      { task, selectTaskNature, id: createKey() },
    ]);
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <Button type="submit">+</Button>
      <Select
        value={selectTaskNature}
        onChange={(e) => setSelectTaskNature(e.target.value)}
      >
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </Select>
    </InputForm>
  );
}

export default ({ taskList, setTaskList }) => {
  const handleColorByNature = (nature: string) => {
    switch (nature) {
      case "Work":
        return "red";
      case "Personal":
        return "blue";
      default:
        return "white";
    }
  };

  return (
    <Sidebar>
      <AsideTitle>All Tasks</AsideTitle>
      <TaskInput setTaskList={setTaskList} />
      <Droppable droppableId="taskList">
        {(provided) => (
          <List ref={provided.innerRef} {...provided.droppableProps}>
            {taskList.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <ul
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <li
                      style={{
                        color: `${handleColorByNature(task.selectTaskNature)}`,
                      }}
                    >
                      {task.task}
                      <TrashButton
                        onClick={() => {
                          setTaskList((prevTaskList) =>
                            prevTaskList.filter((item) => item.id !== task.id)
                          );
                        }}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </TrashButton>
                    </li>
                  </ul>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </Sidebar>
  );
};
