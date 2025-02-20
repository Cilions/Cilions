"use client"

import { useState } from "react";
import type { Nav } from "@/utils/interfaces";

export default function Nav({ className = "", text, hoverText = "soon!" }: Nav) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? hoverText : text}
    </button>
  );
}
