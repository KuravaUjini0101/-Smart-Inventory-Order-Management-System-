import { Badge } from "@/components/ui/badge";

const orders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    amount: "$1,234.56",
    status: "pending",
    date: "2024-01-15",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    amount: "$892.34",
    status: "shipped",
    date: "2024-01-14",
  },
  {
    id: "ORD-003",
    customer: "Mike Johnson",
    amount: "$2,456.78",
    status: "delivered",
    date: "2024-01-13",
  },
  {
    id: "ORD-004",
    customer: "Sarah Wilson",
    amount: "$654.32",
    status: "pending",
    date: "2024-01-12",
  },
];

const statusColors = {
  pending: "bg-warning text-warning-foreground",
  shipped: "bg-primary text-primary-foreground",
  delivered: "bg-success text-success-foreground",
};

export function RecentOrders() {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
          <div>
            <p className="font-medium text-foreground">{order.id}</p>
            <p className="text-sm text-muted-foreground">{order.customer}</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-foreground">{order.amount}</p>
            <Badge className={statusColors[order.status as keyof typeof statusColors]}>
              {order.status}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  );
}