import { render, fireEvent, screen } from "@testing-library/react";
import BugListTable from "./BugListTable";
import { BugPriority, IBug } from "./IBug";

test("The bugs table should display a list of bugs", () => {
  const bugList: IBug[] = [
    { id: "1234", description: "A test bug", priority: BugPriority.LOW },
    {
      id: "2345",
      description: "Another test bug",
      priority: BugPriority.MEDIUM,
    },
    {
      id: "3456",
      description: "One more test bug",
      priority: BugPriority.HIGHT,
    },
  ];
  render(<BugListTable bugs={bugList} onDeleteBug={() => {}} />);
  const rows = screen.getAllByRole("row");
  for (let index = 1; index < rows.length; index += 1) {
    expect(rows[index]).toHaveTextContent(bugList[index - 1].description);
  }
});
