"use client";
import React from "react";
import { HoverBorderGradient } from "./hover-border-gradient";
import { Search as IconSearch } from "lucide-react";
import { motion } from "framer-motion";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "./ui/input";

export function Search() {
  return (
    <Drawer>
      <DrawerTrigger>
        <SearchButton />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            <Input className="font-normal" placeholder="Search" />
          </DrawerTitle>
        </DrawerHeader>

        <div className="p-4">sdfdsf</div>
        <DrawerFooter>
          <DrawerClose>
            <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <span className="relative z-20">Close</span>
            </button>
          </DrawerClose>
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
        className=" dark:text-white flex items-center space-x-2"
      >
        <IconSearch size={32} />
        <span>Wanna Search</span>
      </HoverBorderGradient>
    </motion.div>
  );
};
