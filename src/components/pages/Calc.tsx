import { useState } from 'react'
import { Input } from '../ui/Input/Input'
import { Keyboard } from '../ui/Keyboard/Keyboard'
import './_Calc.css'

export const Calc = () => {
    const [input, setInput] = useState<string>('0');
    const [result, setResult] = useState<string>('');
    function keyDownHandler(value) {
        switch (value) {
            case 'AC':
                setInput('0');
                setResult('');
                break;
            case 'C':
                setInput(input.toString().slice(0, -1));
                break;
            case '×':
                setInput(String(input + value))
                setResult(String(eval(input + value)));
                break;
            case '=':
                setInput(String(result));
                setResult('');
                break;
            default:
                if (input === '0') {
                    setInput(String(value));
                    setResult(String(eval(value)));
                } else {
                    setInput(String(input + value))
                    setResult(String(eval(input + value)));
                }
                break;
        }
    }
    return (
        <div className="body">
            <Input result={result} input={input} />
            <Keyboard pushKey={keyDownHandler} />
        </div>
    )
}