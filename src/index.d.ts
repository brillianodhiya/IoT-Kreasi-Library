// index.d.ts
declare module "iotkreasi-ui-library" {
  import * as React from "react";

  export interface ButtonProps {
    onClick?: () => void;
    style?: React.CSSProperties;
    type?: "button" | "submit" | "reset";
    children?: React.ReactNode;
  }

  export const Button: React.FC<ButtonProps>;
}
