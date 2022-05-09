import React from "react";

interface Props {
  border: string;
  bgColor: string;
  color: string;
  children?: React.ReactNode;
  padding: string;
  radius: string;
  width: string;
  maxWidth: string;
  text: string;
  onClick: () => never;
}

const Button: React.FC<Props> = ({
  border,
  bgColor,
  color,
  children,
  padding,
  radius,
  width,
  maxWidth,
  text,
  onClick
}) => {
  const value = text || children;
  return (
    <button onClick = {onClick} style={{
      backgroundColor: bgColor,
      border,
      borderRadius: radius,
      color,
      padding
    }}>
      {value}
    </button>
  );
}

export default Button;
