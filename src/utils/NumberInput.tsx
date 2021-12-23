import { FC, memo, useCallback } from "react";
import "./Loading.css";


interface NumberInputProps {
  htmlId: string;
  label: string;
  onChange: (newValue: number | null) => any;
}


const NumberInput: FC<NumberInputProps> = memo(({ htmlId, label, onChange }) => {
  const onInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const v = isNaN(e.target.valueAsNumber) ? null : e.target.valueAsNumber;
    return onChange(v);
  }, [onChange]);
  return (
    <div>
      <label htmlFor={htmlId}>{label}</label>
      <input id={htmlId} type="number" onChange={onInputChange}></input>
    </div>
  )
})


export default NumberInput;
