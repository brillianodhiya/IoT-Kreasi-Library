import React from "react";
type Props = {
    onClick?: () => void;
    style?: React.CSSProperties;
    type?: "button" | "submit" | "reset";
    children?: React.ReactNode;
};
declare const ExampleComponent: ({ type, onClick, style, children, }: Props) => React.JSX.Element;
export default ExampleComponent;
