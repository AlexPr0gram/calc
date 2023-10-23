import { useState } from 'react'
import { Input } from '../ui/Input/Input'
import { Keyboard } from '../ui/Keyboard/Keyboard'
import './_Calc.css'

export const Calc = () => {
    const [input, setInput] = useState<string>('0');
    const [result, setResult] = useState<string>('');
    function keyDownHandler(value) {
        switch (value) {
            case 'clean':
                setInput('0');
                setResult('');
                break;
            case 'backspace':
                const results = input.toString().slice(0, -1);
                if (results.length) {
                    setInput(results);
                    if (!['/', '+', '-', '*', '%'].includes(results[results.length - 1])) {
                        setResult(String(eval(results)));
                    } else {
                        setResult(String(eval(results.slice(0, -1))));
                    }
                } else {
                    setInput('0');
                    setResult('');
                }
                break;
            case '*':
                setInput(String(input + value))
                if (!['/', '+', '-', '*', '%'].includes(value)) {
                    setResult(String(eval(input + value)));
                }
                break;
            case '=':
                setInput(String(result));
                setResult('');
                break;
            default:
                if (input === '0') {
                    setInput(String(value));
                    if (!['/', '+', '-', '*', '%'].includes(value)) {
                        setResult(String(eval(value)));
                    };
                } else {
                    setInput(String(input + value))
                    if (!['/', '+', '-', '*', '%'].includes(value)) {
                        setResult(String(eval(input + value)));
                    }
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