"use client";
import React from "react";
import { HoverBorderGradient } from "./hover-border-gradient";
import { Search as IconSearch } from "lucide-react";

export function Search() {
  return (
    <div className=" flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className=" dark:text-white flex items-center space-x-2"
      >
        <IconSearch size={32} />
        <span>Wanna Search</span>
      </HoverBorderGradient>
    </div>
  );
}
