import { useState } from "react";

export type ItemCategory = "urgent" | "important" | "normal" | "low";

export type Item = {
  id: string;
  title: string;
  description: string;
  category: ItemCategory;
};

export type ItemWithoudID = Omit<Item, "id">;

export const useFlowManager = () => {
  const [items, setItems] = useState<Item[]>([]);

  const handleAddItem = (newItem: ItemWithoudID) => {
    // setItems([...items, { ...newItem, id: Date.now().toString() }]);
    setItems((prev: Item[]) => [
      ...prev,
      { ...newItem, id: Date.now().toString() },
    ]);
  };

  const handleDeleteItem = (id: string) => {
    setItems((prev: Item[]) => prev.filter((item: Item) => item.id !== id));
  };

  return { items, handleAddItem, handleDeleteItem };
};
