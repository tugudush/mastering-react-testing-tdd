import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import List from "../components/List";
import { type Item } from "../utils";

vi.mock("../components/ItemCard", () => {
  return {
    default: () => <article>item card</article>,
  };
});

describe("List Component", () => {
  const mockItems: Item[] = [
    {
      id: "1",
      title: "Test Item 1",
      description: "Content 1",
      category: "urgent",
    },
    {
      id: "2",
      title: "Test Item 2",
      description: "Content 2",
      category: "normal",
    },
  ];

  const mockOnDelete = vi.fn();

  test("renders the flow board heading", () => {
    render(<List items={mockItems} onDelete={mockOnDelete} />);
    expect(
      screen.getByRole("heading", { level: 2, name: /flow board/i })
    ).toBeInTheDocument();
  });

  test("renders correct number of ItemCards", () => {
    render(<List items={mockItems} onDelete={mockOnDelete} />);

    const cards = screen.getAllByRole("article");
    expect(cards).toHaveLength(2);
  });

  test("ALTERNATIVE: renders correct number of ItemCards", () => {
    const { getAllByRole } = render(
      <List items={mockItems} onDelete={mockOnDelete} />
    );

    const cards = getAllByRole("article");
    expect(cards).toHaveLength(2);
  });

  test("renders empty grid when items not provided", () => {
    render(<List items={[]} onDelete={mockOnDelete} />);
    expect(screen.queryAllByRole("article")).toHaveLength(0);
  });

  test("ALTERNATIVE: renders empty grid when items not provided", () => {
    const { queryAllByRole } = render(
      <List items={[]} onDelete={mockOnDelete} />
    );
    expect(queryAllByRole("article")).toHaveLength(0);
  });
});
