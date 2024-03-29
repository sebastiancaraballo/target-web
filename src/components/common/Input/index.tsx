import React from "react";
import { FC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import classNames from "classnames";
import "./Input.scss";

type InputProps = {
  label: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  error: boolean;
  onChange?: () => void;
  name: string;
  placeholder?: string;
};

const Input: FC<InputProps> = ({
  label,
  type,
  register,
  error,
  onChange,
  name,
  placeholder = ""
}) => (
  <div className="inputContainer">
    <label className={`input-label input-label__${name}`}>{label}</label>
    <input type={type} placeholder={placeholder} className={classNames('input-field', {error: error})} {...register(name, { onChange })} />
  </div>
);

export { Input };
