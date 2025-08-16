import { MetricCard } from "./MetricCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Package,
  ShoppingCart,
  TrendingUp,
  AlertTriangle,
  Plus,
  Download
} from "lucide-react";
import { InventoryChart } from "./InventoryChart";
import { RecentOrders } from "./RecentOrders";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your inventory.
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button size="sm" className="bg-gradient-primary hover:bg-primary-hover">
            <Plus className="mr-2 h-4 w-4" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Products"
          value="2,847"
          change="+12% from last month"
          changeType="increase"
          icon={Package}
        />
        <MetricCard
          title="Active Orders"
          value="156"
          change="+8% from last week"
          changeType="increase"
          icon={ShoppingCart}
        />
        <MetricCard
          title="Revenue"
          value="$48,965"
          change="+23% from last month"
          changeType="increase"
          icon={TrendingUp}
        />
        <MetricCard
          title="Low Stock Items"
          value="23"
          change="Requires attention"
          changeType="decrease"
          icon={AlertTriangle}
        />
      </div>

      {/* Charts and Tables Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-foreground">Inventory Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <InventoryChart />
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentOrders />
          </CardContent>
        </Card>
      </div>

      {/* Stock Alerts */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-foreground flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-warning" />
            Stock Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "MacBook Pro 16", sku: "MBP-16-001", stock: 2, threshold: 10 },
              { name: "iPhone 15 Pro", sku: "IP15P-128", stock: 5, threshold: 15 },
              { name: "Samsung Galaxy S24", sku: "SGS24-256", stock: 1, threshold: 8 },
            ].map((item) => (
              <div key={item.sku} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{item.name}</p>
                  <p className="text-sm text-muted-foreground">SKU: {item.sku}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-warning font-medium">
                    {item.stock} units left
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Reorder at {item.threshold}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}