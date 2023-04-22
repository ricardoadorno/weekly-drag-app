import { create } from "zustand";

type itemListType = {
  id: string;
  name: string;
  type: string;
};

interface IState {
  itemList: itemListType[];
  setItems: (items: itemListType[]) => void;
  addItem: (item: itemListType) => void;
  removeItem: (id: string) => void;
}

export const useStore = create<IState>((set) => ({
  itemList: [
    {
      id: "1",
      name: "test",
      type: "Work",
    },
    {
      id: "2",
      name: "test2",
      type: "Family",
    },
    {
      id: "3",
      name: "test3",
      type: "Gym",
    },
  ],
  setItems: (items) => set(() => ({ itemList: items })),
  addItem: (item) => set((state) => ({ itemList: [...state.itemList, item] })),
  removeItem: (id) =>
    set((state) => ({ itemList: state.itemList.filter((i) => i.id !== id) })),
}));

export const useStoreWeekTable = create((set) => ({
  weekTable: [
    { day: "Monday", tasks: ["task1", "task2", "task3"] },
    { day: "Tuesday", tasks: ["task1", "task2", "task3"] },
  ],
}));
