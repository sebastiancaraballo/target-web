import React, { FC } from "react";
import "./Input.scss";
import { UseFormRegister, FieldValues, ValidationRule } from "react-hook-form";

type InputProps = {
  label: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  error: boolean;
  onChange?: () => void;
};

const Input: FC<InputProps> = ({ label, type, register, error, onChange }) => (
  <div className="inputContainer">
    <label className={`label__${label}`}>{label}</label>
    <input type={type} className={`${error ? `error` : ``}`} id={label} {...register(label, { onChange })} />
  </div>
);

export default Input;
