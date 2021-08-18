
type InputProps = {
    text: string;
  };

export const CalculatorInput = ({text}: InputProps) => {
    return (
        <div  className="display" >
            <span>{text}</span>
        </div>
    )
}
