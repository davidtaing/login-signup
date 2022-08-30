import { ErrorLabel } from "./atoms/ErrorLabel";
import { Input } from "./atoms/Input";
import { Label } from "./atoms/Label";

interface FormFieldProps {
  label: string;
  inputId: string;
  inputType: string;
  error?: string;
}

export const FormField = ({
  label,
  inputId,
  inputType,
  error,
}: FormFieldProps) => {
  return (
    <div className="mt-4">
      <Label htmlFor={inputId}>{label}</Label>
      <Input id={inputId} type={inputType} />
      <ErrorLabel className="h-3.5" htmlFor={inputId}>
        {error ?? ""}
      </ErrorLabel>
    </div>
  );
};
