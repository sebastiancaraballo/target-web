import React, { FC } from "react";
import "./Input.scss";
import { UseFormRegister, FieldValues, ValidationRule } from "react-hook-form";
import classNames from "classnames";

type InputProps = {
  label: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  error: boolean;
  onChange?: () => void;
  name: string;
  placeholder: string;
};

const Input: FC<InputProps> = ({ label, type, register, error, onChange, name, placeholder }) => (
  <div className="inputContainer">
    <label className={`input-label input-label__${name}`}>{label}</label>
    <input type={type} placeholder={placeholder} className={classNames('input-field', {error: error})} {...register(name, { onChange })} />
  </div>
);

export { Input };
