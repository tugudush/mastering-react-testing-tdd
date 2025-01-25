import ItemCard from "./ItemCard";
import { type Item } from "../utils";

const List = ({
  items,
  onDelete,
}: {
  items: Item[];
  onDelete: (id: string) => void;
}) => {
  console.log(items);
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-2">Flow Board</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <ItemCard key={item.id} {...item} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
};

export default List;
