import classNames from "classnames";
import React, { FC } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import "./Select.scss";

type SelectProps = {
  label: string;
  options: Array<string>;
  register: UseFormRegister<FieldValues>;
  error: boolean;
  onChange?: () => void;
  defaultOption: string;
  name: string;
};

const Select: FC<SelectProps> = ({ label, options, register, error, defaultOption, onChange, name }) => (
  <div className="selectContainer">
    <label className={`input-label input-label__${label}`}>{label}</label>
    <select id={name} className={classNames('select-field', {error: error})} defaultValue={defaultOption} {...register(name, { onChange })}>
      <option value="" hidden>
        {defaultOption}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export { Select };
