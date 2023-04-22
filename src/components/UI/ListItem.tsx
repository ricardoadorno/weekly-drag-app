import { FaTrash } from "react-icons/fa";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useStore } from "../../utils/store";

const selectTypeStyle = (type: string) => {
  switch (type) {
    case "Work":
      return "lightblue";
    case "Family":
      return "lightcoral";
    case "Gym":
      return "lightgreen";
    default:
      return "lightslategray";
  }
};

export default function ListItem(props: any) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const removeItem = useStore((state) => state.removeItem);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    backgroundColor: selectTypeStyle(props.type),
  };

  function handleDeleteTask(id: string) {
    removeItem(id);
  }

  return (
    <li ref={setNodeRef} style={style} className="asideMenu__list-item">
      <div {...attributes} {...listeners} className="text">
        {props.name}
      </div>
      <FaTrash className="delete" onClick={() => handleDeleteTask(props.id)} />
    </li>
  );
}
