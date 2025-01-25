import { createContext, type ReactNode, useState } from "react";
import { type Item, type ItemWithoutID } from "./utils";
import { FlowContextType } from "./types/flow";

export const FlowContext = createContext<FlowContextType | undefined>(
  undefined
);

export function FlowProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (newItem: ItemWithoutID) => {
    // setItems([...items, { ...newItem, id: Date.now().toString() }]);
    setItems((prev: Item[]) => [
      ...prev,
      { ...newItem, id: Date.now().toString() },
    ]);
  };

  const handleDeleteItem = (id: string) => {
    setItems((prev: Item[]) => prev.filter((item: Item) => item.id !== id));
  };

  return (
    <FlowContext.Provider value={{ items, handleAddItem, handleDeleteItem }}>
      {children}
    </FlowContext.Provider>
  );
}
