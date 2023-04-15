import * as React from "react";

const ChipSelect = ({ options, onChange }) => {
  const [selected, setSelected] = React.useState(new Set());

  const toggleSelected = (value) => {
    if (selected.has(value)) {
      selected.delete(value);
    } else {
      selected.add(value);
    }
    setSelected(new Set(selected));
  };

  React.useEffect(() => {
    onChange(Array.from(selected));
  }, [selected]);

  return (
    <div className="flex flex-wrap py-0.5 gap-2">
      {options.map((option) => (
        <div
          key={option.value}
          className={`px-2 py-1 rounded-full cursor-pointer ${
            selected.has(option.value)
              ? "bg-tailwindGray-300 text-tailwindGray-900 py-0.5 text-xs"
              : "border border-tailwindGray-300 text-tailwindGray-500 text-black text-xs"
          }`}
          onClick={() => toggleSelected(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default ChipSelect;
