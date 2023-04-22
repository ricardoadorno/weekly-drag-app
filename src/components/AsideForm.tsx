import { useStore } from "../utils/store";
import { nanoid } from "nanoid";

const selectOptions = ["Work", "Family", "Gym"];

export default function AsideForm() {
  const addItem = useStore((state) => state.addItem);

  function handleNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { value: inputValue } = e.currentTarget[0] as HTMLInputElement;
    const { value: selectValue } = e.currentTarget[2] as HTMLSelectElement;

    if (inputValue) {
      addItem({
        id: nanoid(),
        name: inputValue,
        type: selectValue,
      });
    }

    e.currentTarget.reset();
  }

  return (
    <form className="asideMenu__form" onSubmit={handleNewTask}>
      <input
        className="asideMenu__form-input"
        type="text"
        placeholder="Add New"
      />
      <button className="asideMenu__form-button" type="submit">
        Add
      </button>
      <select className="asideMenu__form-select">
        {selectOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </form>
  );
}
