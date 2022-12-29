import React from "react";
import { useState } from "react";

import WeekTable from "./components/WeekTable";
import Sidebar from "./components/Sidebar";
import { DragDropContext } from "@hello-pangea/dnd";

import { Content, Navbar, Page } from "./components/styles/layout";

// TODO redux it & type's

function App() {
  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const hours = [
    "6:00",
    "7:00",
    "8:00",
    "9:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  // for each day of the week, create an object with the day and the hour
  const appointments = daysOfTheWeek.map((day) => {
    return hours.map((hour) => {
      return {
        slot: `${day}${hour}`,
        content: "X",
        color: "gray",
      };
    });
  });

  const [taskList, setTaskList] = useState([]);
  const [daySlots, setDaySlots] = useState(appointments.flat());

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // * Order items in the same list
    if (destination.droppableId === source.droppableId) {
      if (destination.droppableId === "taskList") {
        // chance the order of the taskList
        const newTaskList = Array.from(taskList);
        newTaskList.splice(source.index, 1);
        newTaskList.splice(destination.index, 0, taskList[source.index]);

        setTaskList(newTaskList);
      }

      return;
    }

    // Change daySlots specific object
    const newDaySlots = Array.from(daySlots);
    const newTaskList = Array.from(taskList);

    const task = newTaskList.find((task) => task.id === draggableId);
    const daySlot = newDaySlots.find(
      (daySlot) => daySlot.slot === destination.droppableId
    );

    daySlot.content = taskList[source.index].task;
    daySlot.color = taskList[source.index].selectTaskNature;
    newTaskList.splice(source.index, 1);

    setDaySlots(newDaySlots);
  };

  return (
    <Page>
      <Navbar>Weekly Drag</Navbar>
      <Content>
        <DragDropContext onDragEnd={onDragEnd}>
          <Sidebar taskList={taskList} setTaskList={setTaskList} />
          <WeekTable daySlots={daySlots} setDaySlots={setDaySlots} />
        </DragDropContext>
      </Content>{" "}
    </Page>
  );
}

export default App;
