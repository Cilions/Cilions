'use client'

import { useState } from 'react'

interface NavProps {
  className?: string;
  text: string;
  hoverText?: string;
}

const Nav: React.FC<NavProps> = ({ className = "", text, hoverText = "soon!" }) => {
  const [currentText, setCurrentText] = useState(text)

  return (
    <button
      className={className}
      onMouseEnter={() => setCurrentText(hoverText)}
      onMouseLeave={() => setCurrentText(text)}
    >
      {currentText}
    </button>
  );
};

export default Nav;
