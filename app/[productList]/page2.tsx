"use client";
import React, { useState } from "react"
import Link from "next/link"; 
import Image from "next/image";

// Define the props type
interface BreadcrumbItem {
  label: string;
  href?: string; // Optional for the current page
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="text-sm pt-[10px] gap-[15px] w-[119px]">
      <ol className="flex">
        {items.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <Link href={item.href} className="text-blue-500 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className="mx-2"> /</span> // Separator
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb ; 

