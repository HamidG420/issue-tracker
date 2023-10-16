import { Skeleton } from "@/app/components";
import { Table, TableCell, TableRow } from "@radix-ui/themes";

const LoadingIssuesPage = () => {
  const issues = [1, 2, 3, 4, 5];
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            Status
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className="hidden md:table-cell">
            Created
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {issues.map((issue) => (
          <TableRow key={issue}>
            <TableCell>
              <Skeleton />

              <div className="block md:hidden">
                <Skeleton />
              </div>
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <Skeleton />
            </TableCell>
            <TableCell className="hidden md:table-cell">
              <Skeleton />
            </TableCell>
          </TableRow>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
export default LoadingIssuesPage;
