import { Item, ItemWithoutID } from "../utils";

export type FlowContextType = {
  items: Item[];
  handleAddItem: (item: ItemWithoutID) => void;
  handleDeleteItem: (id: string) => void;
};