import React from "react";
import { phoneNumber } from "../../Utils/Messages";
import "./Button.css";

interface ButtonProps {
  content: string;
  type?: "button" | "submit" | "reset";
  message?: string;
}

export function Button({ content, type = "button", message }: ButtonProps) {
  const handleButtonClick = () => {
    if (type === 'submit') {
      console.log('aaa')
    } else {
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message || '')}`;
      window.open(url, '_blank');
    }
  };

  return (
    <div className="button">
      <div className="button-container">
        <button type={type} onClick={handleButtonClick}>
          {content}
        </button>
      </div>
    </div>
  );
}
