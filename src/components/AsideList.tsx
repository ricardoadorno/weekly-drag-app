import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import ListItem from "./UI/ListItem";
import { useStore } from "../utils/store";

export default function AsideList() {
  const items = useStore((state) => state.itemList);
  const setItems = useStore((state) => state.setItems);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems(arrayMove(items, active.id - 1, over.id - 1));
    }
  }

  return (
    <ul className="asideMenu__list">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              name={item.name}
              type={item.type}
            />
          ))}
        </SortableContext>
      </DndContext>
    </ul>
  );
}
