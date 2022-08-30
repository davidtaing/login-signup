interface LabeledCheckboxProps {
  label: string;
  inputId: string;
}

export const LabeledCheckbox = ({ label, inputId }: LabeledCheckboxProps) => {
  return (
    <div className="flex">
      <input
        id={inputId}
        className="border border-stone-300 my-auto h-3.5 w-3.5 "
        type="checkbox"
      />
      <label
        className="ml-2 inline-block text-sm leading-none"
        htmlFor={inputId}
      >
        {label}
      </label>
    </div>
  );
};
