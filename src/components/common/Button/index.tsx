import React, { FC } from "react";
import "./Button.scss";

type ButtonProps = {
  label: string;
};

const Button: FC<ButtonProps> = ({ label }) => (
  <button type="submit">{label}</button>
);

export default Button;
