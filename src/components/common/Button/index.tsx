import React, { FC } from "react";
import "./Button.scss";

type ButtonProps = {
  label: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ label, onClick }) => (
  <button className="button" type="submit" onClick={onClick}>{label}</button>
);

export { Button };
