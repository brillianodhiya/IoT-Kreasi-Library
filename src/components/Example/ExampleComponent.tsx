import React from "react";
import styles from "./example.module.css";

type Props = {
  onClick?: () => void;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset"; // Define the prop
  children?: React.ReactNode;
};

const ExampleComponent = ({
  type = "button",
  onClick,
  style,
  children,
}: Props) => {
  return (
    <button
      className={styles.button}
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
