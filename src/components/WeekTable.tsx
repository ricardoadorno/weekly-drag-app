import { Droppable } from "@hello-pangea/dnd";
import styled from "@emotion/styled";

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

// * TABLE STYLES

const Table = styled.table`
  background: lightgray;
  table-layout: fixed;
  width: 100%;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-top: 0 none;
  padding: 1rem;

  thead {
    background: #ff7361;
    text-align: center;

    th: {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
    }

    th:first-of-type {
      background-color: lightgray;
      border: 1px solid black;
      font-weight: normal;
    }
  }

  tbody {
    tr {
      cursor: pointer;
    }

    tr > td:first-of-type {
      border-bottom: 1px solid black;
      cursor: text;
      &:hover {
        background-color: #ff7361;
      }
    }

    tr:last-child > td:first-child {
      border-bottom: 0 none;
    }

    td {
      padding: 0.2rem;
    }
  }
`;

const TableTitle = styled.h2`
  color: black;
  font-weight: bold;
`;

const TableBox = styled.div`
  border: 1px solid black;
  text-align: center;
  padding: 0 0.5rem;
`;
