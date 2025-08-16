import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Package,
  ShoppingCart,
  Users,
  FileText,
  Menu,
  Home
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigation = [
  { name: "Dashboard", icon: Home, href: "#dashboard" },
  { name: "Inventory", icon: Package, href: "#inventory" },
  { name: "Orders", icon: ShoppingCart, href: "#orders" },
  { name: "Suppliers", icon: Users, href: "#suppliers" },
  { name: "Reports", icon: FileText, href: "#reports" },
  { name: "Analytics", icon: BarChart3, href: "#analytics" },
];

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 bg-card border-r border-border transition-all duration-300",
        isOpen ? "w-64" : "w-16"
      )}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-border">
        <div className={cn("flex items-center space-x-2", !isOpen && "justify-center")}>
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Package className="w-5 h-5 text-primary-foreground" />
          </div>
          {isOpen && (
            <span className="font-bold text-lg text-foreground">InvenFlow</span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="h-8 w-8"
        >
          <Menu className="h-4 w-4" />
        </Button>
      </div>

      <nav className="mt-8 px-3">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.name}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start hover:bg-accent",
                    !isOpen && "justify-center px-2"
                  )}
                >
                  <Icon className="h-5 w-5 text-muted-foreground" />
                  {isOpen && (
                    <span className="ml-3 text-sm font-medium text-foreground">
                      {item.name}
                    </span>
                  )}
                </Button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}