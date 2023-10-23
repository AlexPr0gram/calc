import './_Keyboard.css'
const KEYS = [
    {
        id: 'a',
        caption: 'AC',
        operation: 'clean'
    },
    {
        id: 'b',
        caption: 'C',
        operation: 'backspace'
    },
    {
        id: 'c',
        caption: '%',
        operation: '%'
    },
    {
        id: 'd',
        caption: '÷',
        operation: '/'
    },
    {
        id: 'e',
        caption: '7',
        operation: '7'
    },
    {
        id: 'f',
        caption: '8',
        operation: '8'
    },
    {
        id: 'g',
        caption: '9',
        operation: '9'
    },
    {
        id: 'h',
        caption: '×',
        operation: '*'
    },
    {
        id: 'i',
        caption: '4',
        operation: '4'
    },
    {
        id: 'j',
        caption: '5',
        operation: '5'
    },
    {
        id: 'k',
        caption: '6',
        operation: '6'
    },
    {
        id: 'l',
        caption: '-',
        operation: '-'
    },
    {
        id: 'm',
        caption: '1',
        operation: '1'
    },
    {
        id: 'n',
        caption: '2',
        operation: '2'
    },
    {
        id: 'o',
        caption: '3',
        operation: '3'
    },
    {
        id: 'p',
        caption: '+',
        operation: '+'
    },
    {
        id: 'q',
        caption: '0',
        operation: '0'
    },
    {
        id: 'r',
        caption: ',',
        operation: '.'
    },
    {
        id: 's',
        caption: '=',
        operation: '='
    }
]


interface IStyles {
    width?: string;
    gridArea?: string;
    backgroundColor?: string;
    ':active'?: {
        backgroundColor?: string;
        color?: string;
    };
    borderRadius?: string;
    justifyContent?: string;
    paddingLeft?: string;
    transition?: string;
}


export const Keyboard = ({pushKey}) => {
    function keyDown(e) {
        pushKey(KEYS.filter(key => key.caption === e.target.id)[0].operation)
    }

    function getStyles(key) {
        let styles: IStyles = {
            gridArea: key.id
        }
        if (key.id === 'q') {
            styles.width = '100%',
            styles.borderRadius = '100px',
            styles.justifyContent = 'flex-start',
            styles.paddingLeft = '30px';
        }
        return styles
    }
    return (
        <div className="container">
            {KEYS.map((key) => {
                return (
                    <div
                        id={key.caption}
                        key={key.caption}
                        style={getStyles(key)}
                        data-id={key.id}
                        className='button'
                        onClick={keyDown}>
                        {key.caption}
                    </div>
                )
            })}
        </div>
    )
}