import * as React from "react";
import { classNames } from "components/className";
import { InputComponentProp } from "./types";
import { useForm } from "react-hook-form";

const TextInput = React.forwardRef(
  (
    {
      placeholder,
      value,
      onChange,
      errors,
      id,
      type,
      name,
      defaultValue,
      minimum,
      disabled,
      step,
      lowerCase,
      label,
      required,
    }: InputComponentProp,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    const { register } = useForm<InputComponentProp>();
    return (
      <>
        <div className="flex flex-col">
          <div className="flex text-xs mb-1">
            <p>{label}</p>
            {required ? <p className="text-red-500 ml-[2px]"> *</p> : ""}
          </div>
          <input
            id={id}
            name={name}
            ref={ref}
            autoComplete="off"
            value={value}
            defaultValue={defaultValue}
            min={minimum}
            className={classNames(
              errors
                ? "focus:ring-red-500 focus:border-red-500"
                : "focus:ring-secondary focus:border-secondary ",
              lowerCase ? "lowercase" : "",
              "appearance-none block font-lato bg-white w-full px-3 py-2 border border-tailwindGray-300 rounded-md shadow-none placeholder-tailwindGray-400  focus:outline-none focus:ring-0 lg:text-sm text-xs sm:text-xs"
            )}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            disabled={disabled}
            step={step}
          />
        </div>
      </>
    );
  }
);

TextInput.defaultProps = {
  disabled: false,
  lowerCase: false,
};

export { TextInput };
