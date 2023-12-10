import { Input as CNInput } from "@/components/ui/input";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  type?: string;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div>
      <CNInput
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        {...register(id, { required })}
        className={`
            ${
              errors[id]
                ? "focus-visible:ring-rose-500"
                : "focus-visible:ring-2"
            }
        `}
      />
    </div>
  );
};

export default Input;
