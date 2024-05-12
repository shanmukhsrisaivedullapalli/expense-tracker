"use client";

import React from "react";
import { Icons } from "../../../../components/Icons";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../../../lib/utils";

const SideNav = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      id: 1,
      label: "Dashboard",
      path: "/dashboard",
      icon: <LayoutGrid className="size-5" />,
    },
    {
      id: 2,
      label: "Budgets",
      path: "/budgets",
      icon: <PiggyBank className="size-5" />,
    },
    {
      id: 3,
      label: "Expenses",
      path: "/expenses",
      icon: <ReceiptText className="size-5" />,
    },
  ];
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-72 border-r">
      <div className="flex flex-col space-y-12 px-8 py-10">
        <div className="flex items-center">
          <Icons.logo className="mr-2.5 size-6" />
          <span className="text-2xl font-medium">Coinit</span>
        </div>

        <div>
          {navLinks.map((links) => (
            <ul key={links.id}>
              <Link
                href={links.path}
                className={cn(
                  "my-4 flex items-center rounded-lg px-2.5 py-2 text-sm font-medium",
                  pathname === links.path && "bg-gray-100"
                )}
              >
                <span className="mr-3">{links.icon}</span>
                <li>{links.label}</li>
              </Link>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
