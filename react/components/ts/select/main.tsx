import * as React from "react";
import { SelectComponentProp } from "./types";

const Select: React.FC<SelectComponentProp> = ({
  options,
  value,
  onChange,
}) => (
  <select
    className="block w-full px-3 py-2 text-xs bg-white border rounded-md shadow-none appearance-none cursor-pointer focus:border-secondary font-lato border-tailwindGray-300 placeholder-tailwindGray-400 focus:outline-none focus:ring-0 lg:text-sm sm:text-xs"
    value={value}
    onChange={(event) => onChange(event.target.value)}
  >
    {options.map((option, index) => (
      <option key={option.value} disabled={index === 0} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
