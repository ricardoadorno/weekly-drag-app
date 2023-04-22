import { useStoreWeekTable } from "../utils/store";

const headerTable = [
  "",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const firstColumn = ["7:00", "8:00", "9:00", "10:00", "11:00", "12:00"];

export default function WeekContainer() {
  const weekTable = useStoreWeekTable((state) => state.useStoreWeekTable);

  return (
    <section className="weekDisplay">
      <h2>Your Week</h2>

      <table className="weekDisplay__table">
        <thead className="weekDisplay__table-header">
          <tr>
            {headerTable.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {firstColumn.map((hour) => (
            <tr key={hour}>
              <td className="weekDisplay__table-cell--time">{hour}</td>

              {/* {weekTable.map((day) => (
                <td key={day} className="weekDisplay__table-cell"></td>
              ))} */}

              <td className="weekDisplay__table-cell"></td>
              <td className="weekDisplay__table-cell"></td>
              <td className="weekDisplay__table-cell"></td>
              <td className="weekDisplay__table-cell"></td>
              <td className="weekDisplay__table-cell"></td>
              <td className="weekDisplay__table-cell"></td>
              <td className="weekDisplay__table-cell"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
