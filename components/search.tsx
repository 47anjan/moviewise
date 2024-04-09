"use client";
import React from "react";
import { HoverBorderGradient } from "./hover-border-gradient";
import { Search as IconSearch } from "lucide-react";
import { motion } from "framer-motion";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Search() {
  return (
    <Drawer>
      <DrawerTrigger>
        <SearchButton />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          Submit
          <DrawerClose>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

const SearchButton = () => {
  return (
    <motion.div
      whileTap={{ scale: 0.8 }}
      className=" flex justify-center text-center"
    >
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className=" dark:text-white flex items-center space-x-2"
      >
        <IconSearch size={32} />
        <span>Wanna Search</span>
      </HoverBorderGradient>
    </motion.div>
  );
};
