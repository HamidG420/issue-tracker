import { Status } from "@prisma/client";
import { Badge, Responsive } from "@radix-ui/themes";

const statusMap: Record<
  Status,
  { label: string; color: "red" | "violet" | "green" }
> = {
  OPEN: { label: "Open", color: "red" },
  IN_PROGRESS: { label: "In Progress", color: "violet" },
  CLOSED: { label: "Closed", color: "green" },
};

interface BadgeProps {
  status: Status;
  size: Responsive<"2" | "1">;
}

const IssueStatusBadge = ({ status, size }: BadgeProps) => {
  return (
    <Badge size={size} color={statusMap[status].color}>
      {statusMap[status].label}
    </Badge>
  );
};
export default IssueStatusBadge;
