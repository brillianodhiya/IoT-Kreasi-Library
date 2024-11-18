import React from "react";
export interface ExampleComponentProps {
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset"; // Define the prop
  children?: React.ReactNode;
  className?: string; // Define the prop
}

const ExampleComponent = ({
  type = "button",
  onClick,
  style,
  children,
  className,
}: ExampleComponentProps) => {
  return (
    <button
      className={"test-component-class " + className}
      style={style}
      type={type}
      onClick={onClick}
    >
      {children || "Click me"}
      {/* // Add a default value for children */}
    </button>
  );
};

export default ExampleComponent;
