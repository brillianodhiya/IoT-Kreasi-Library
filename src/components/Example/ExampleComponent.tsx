import React from "react";
import styles from "./example.module.css";

type Props = {};

const ExampleComponent = (props: Props) => {
  return <div className={styles.container}>ExampleComponent</div>;
};

export default ExampleComponent;
