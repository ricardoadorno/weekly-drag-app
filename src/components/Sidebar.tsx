import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import styled from "@emotion/styled";

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

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.5rem;
  background-color: darkgray;
  border-radius: 1rem;
`;

// * ASIDE STYLES

const AsideTitle = styled.h2`
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`;

const Button = styled.button`
  border: none;
  border-left: 1px solid black;
  background-color: beige;
  cursor: pointer;
  color: black;
  font-weight: bold;
  border-radius: 0 0.4rem 0.4rem 0;
`;

const TrashButton = styled.button`
  border: none;
  margin-left: 1rem;
  background-color: beige;
  cursor: pointer;
  color: black;
  font-weight: bold;
  font-size: 0.8rem;
`;

const Input = styled.input`
  background-color: white;
  color: black;
  font-weight: bold;
  outline: none;
  padding: 0.1rem;
  border: none;
  border-radius: 0.4rem 0 0 0.4rem;

  &:hover {
  }
`;

const Select = styled.select`
  background-color: white;
  color: black;
  font-weight: bold;
  outline: none;
  padding: 0.1rem;
  margin-top: 1rem;
  border: none;
  border-radius: 0.2rem;
  text-align: center;
`;

const InputForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const List = styled.div`
  width: 100%;
  padding-top: 1rem;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  li {
    display: flex;
    justify-content: center;
    margin: 0.5rem 0;
    padding: 0.5rem;
    background-color: #f5f5f5;
    border: 1px solid black;
  }
`;
