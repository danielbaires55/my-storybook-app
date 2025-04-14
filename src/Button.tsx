import React, { useState } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void | Promise<void>;
  disabled?: boolean | null;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, disabled }) => {
  const [isTemporarilyDisabled, setIsTemporarilyDisabled] = useState(false);

  const handleClick = async () => {
    if (disabled || isTemporarilyDisabled) return;

    if (disabled == null) {
      setIsTemporarilyDisabled(true);
      try {
        await onClick?.(); 
      } finally {

        setTimeout(() => {
          setIsTemporarilyDisabled(false);
        }, 5000);
      }
    } else {
      onClick?.();
    }
  };

  return (
    <button onClick={handleClick} disabled={disabled || isTemporarilyDisabled}>
      {label}
    </button>
  );
};
