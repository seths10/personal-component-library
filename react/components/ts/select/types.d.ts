import * as React from "react";

export type SelectOption<T> = {
  value: T;
  label: string;
};

type ChangeHandler = (value: string) => void;

export type SelectComponentProp = {
  options: SelectOption[];
  value: string;
  onChange: ChangeHandler;
};
