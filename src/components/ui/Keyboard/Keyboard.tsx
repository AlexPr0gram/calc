import './_Keyboard.css'
const KEYS = [
    {
        id: 'a',
        caption: 'AC',
    },
    {
        id: 'b',
        caption: 'C',
    },
    {
        id: 'c',
        caption: '%',
    },
    {
        id: 'd',
        caption: '÷',
    },
    {
        id: 'e',
        caption: '7',
    },
    {
        id: 'f',
        caption: '8',
    },
    {
        id: 'g',
        caption: '9',
    },
    {
        id: 'h',
        caption: '×',
    },
    {
        id: 'i',
        caption: '4',
    },
    {
        id: 'j',
        caption: '5',
    },
    {
        id: 'k',
        caption: '6',
    },
    {
        id: 'l',
        caption: '-',
    },
    {
        id: 'm',
        caption: '1',
    },
    {
        id: 'n',
        caption: '2',
    },
    {
        id: 'o',
        caption: '3',
    },
    {
        id: 'p',
        caption: '+',
    },
    {
        id: 'q',
        caption: '0',
    },
    {
        id: 'r',
        caption: ',',
    },
    {
        id: 's',
        caption: '=',
    }
]


export const Keyboard = ({pushKey}) => {
    function keyDown(e) {
        pushKey(KEYS.filter(key => key.caption === e.target.id)[0].caption)
    }
    return (
        <div className="container">
            {KEYS.map((key) => {
                return (
                    <div
                        id={key.caption}
                        className={'button' + ' ' + key.id}
                        onClick={keyDown}>
                        {key.caption}
                    </div>
                )
            })}
        </div>
    )
}