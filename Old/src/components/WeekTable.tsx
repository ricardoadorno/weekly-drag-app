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
  ];

  const handleColorByNature = (nature: string) => {
    switch (nature) {
      case "Work":
        return "#1e40af";
      case "Health":
        return "#065f46";
      case "Food Break":
        return "#991b1b";
      case "Entertainment":
        return "#6b21a8";
      default:
        return "white";
    }
  };

  const handleClearSlot = (slot) => {
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
            <th> </th>

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
                                  backgroundColor: `${handleColorByNature(
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

const TableTitle = styled.h2`
  color: #f9fafb;
  font-weight: bold;
  text-shadow: 0.5rem 1rem 1rem rgba(0, 0, 0, 0.2);
  margin: 0.5rem;
`;

const Table = styled.table`
  background: lightgray;
  table-layout: fixed;
  width: 100%;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-top: 0 none;
  padding: 1rem;

  thead {
    background: #f97316;
    text-align: center;

    th: {
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
    }

    th:first-of-type {
      background-color: lightgray;
    }
  }

  tbody {
    tr {
      cursor: pointer;
    }

    tr > td:first-of-type {
      border-bottom: 1px solid black;
      text-align: center;
      cursor: text;
      &:hover {
        background-color: #f97316;
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

const TableBox = styled.div`
  border: 1px solid black;
  text-align: center;
  color: white;
  padding: 0 1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
