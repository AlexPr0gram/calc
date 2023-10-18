import { useEffect, useState } from 'react'
import { Input } from '../ui/Input/Input'
import { Keyboard } from '../ui/Keyboard/Keyboard'
import './_Calc.css'

export const Calc = () => {
    const [input, setInput] = useState<string>('0');
    const [lastOper, setLastOper] = useState<string>('');
    const [lastValue, setLastValue] = useState<string>('');
    const [result, setResult] = useState<number>(0);
    function keyDownHandler(value) {
        switch (value) {
            case 'AC':
                setInput('0');
                setLastOper('');
                setResult(0);
                break;
            case '+':
            case '-':
            case '÷':
            case '×':
                if (input === '0') {
                    setInput('0')
                } else {
                    setInput(input + value)
                    if (lastOper === '') {
                        setLastOper(value);
                    }
                }
                setLastValue('');
                break;
            case '=':
                setInput(String(result));
                setLastOper('');
                setLastValue('');
                break;
            case '%':
                const res = Number(result) / 100;
                setResult(res);
                setInput(String(res));
                setLastValue('');
                break;
            default:
                if (input === '0') {
                    setInput(value);
                    setLastValue(value);
                    setResult(value);
                } else {
                    setInput(input + value)
                    setLastValue(String(lastValue + value));
                    setResult(lastValue + value);
                    calculate(String(lastValue + value));
                }
                break;
        }
    }

    function calculate(value) {
        switch (lastOper) {
            case '+':
                setResult(Number(result) + Number(value));
                break;
            case '-':
                setResult(Number(result) - Number(value));
                break;
            case '×':
                setResult(Number(result) * Number(value));
                break;
            case '÷':
                setResult(Number(result) / Number(value));
                break;
            default:
                break;
        }
    }
    return (
        <div className="body">
            <Input string={input} />
            <Keyboard pushKey={keyDownHandler} />
        </div>
    )
}