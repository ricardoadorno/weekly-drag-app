import { Droppable } from "@hello-pangea/dnd";
import { TableBox, TableTitle } from "./styles/components";

import { Table } from "./styles/layout";

export default function WeekTable({ daySlots, setDaySlots }) {
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

  const handleColor = (color) => {
    switch (color) {
      case "Work":
        return "red";
      case "Personal":
        return "blue";
      default:
        return "gray";
    }
  };

  const handleClearSlot = (slot) => {
    console.log(slot);
    console.log(daySlots);
    setDaySlots((prev) => {
      return prev.map((daySlot) => {
        if (daySlot.slot === slot) {
          daySlot.content = "X";
          daySlot.color = "gray";
        }
        return daySlot;
      });
    });
  };

  return (
    <div>
      <TableTitle>Week Table</TableTitle>
      <Table>
        <thead>
          <tr>
            <th>Time</th>

            {daysOfTheWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hours.map((hour) => (
            <tr key={hour}>
              <td>{hour}</td>
              {daysOfTheWeek.map((day) => (
                <td key={day}>
                  <Droppable droppableId={`${day}${hour}`}>
                    {(provided) => (
                      <div ref={provided.innerRef} {...provided.droppableProps}>
                        {daySlots.map((daySlot) => {
                          if (daySlot.slot === `${day}${hour}`) {
                            return (
                              <TableBox
                                onClick={() => handleClearSlot(daySlot.slot)}
                                key={`${day}${hour}`}
                                style={{
                                  backgroundColor: `${handleColor(
                                    daySlot.color
                                  )}`,
                                }}
                              >
                                {daySlot.content}
                              </TableBox>
                            );
                          }
                        })}

                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
