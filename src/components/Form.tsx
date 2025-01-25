import { useState, FormEvent } from "react";
import { type ItemWithoudID, type ItemCategory } from "../utils";

const Form = ({ onSubmit }: { onSubmit: (item: ItemWithoudID) => void }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<ItemCategory | "">("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description || !category) return;

    onSubmit({
      title,
      description,
      category,
    });

    setTitle("");
    setDescription("");
    setCategory("");
  };

  const labelStyles = "text-sm font-medium leading-none block mb-2";
  const inputStyles = "flex h-10 w-full rounded-md border px-3 py-2 text-sm";

  return (
    <div className="max-w-xl">
      <h2 className="text-xl font-semibold mb-2">Add New Task</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className={labelStyles}>
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
            className={inputStyles}
          />
        </div>
        {/* description input */}
        <div>
          <label htmlFor="description" className={labelStyles}>
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
            className={inputStyles}
          />
        </div>
        {/* category input */}
        <div>
          <label htmlFor="category" className={labelStyles}>
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value as ItemCategory);
            }}
            required
            className={inputStyles}
          >
            <option value="">Select Category</option>
            <option value="urgent">Urgent</option>
            <option value="important">Important</option>
            <option value="normal">Normal</option>
            <option value="low">Low Priority</option>
          </select>
        </div>
        {/* submit button */}
        <button
          type="submit"
          className="rounded text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Form;
