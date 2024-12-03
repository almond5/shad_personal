'use client';
import { FaChevronDown } from "react-icons/fa6";

interface ChevronProps {
  targetId: string;
}

export default function Chevron({ targetId }: ChevronProps) {
  const scrollToSection = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '4vh' }}>
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={scrollToSection}
        >
          <FaChevronDown size={25} />
        </button>
      </div>
    </div>
  );
}