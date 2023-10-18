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

const greenBtns: string[] = [
    'a', 'b', 'c', 'd', 'h', 'l', 'p', 's'
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
}


export const Keyboard = ({pushKey}) => {
    function keyDown(e) {
        pushKey(KEYS.filter(key => key.caption === e.target.id)[0].caption)
    }

    function getStyles(key) {
        let styles: IStyles = {
            gridArea: key.id,
            backgroundColor: 'antiquewhite',
            ':active': {
                backgroundColor: 'white'
            }
        }
        if (key.id === 'q') {
            styles.width = '100%',
            styles.borderRadius = '100px',
            styles.justifyContent = 'flex-start',
            styles.paddingLeft = '30px';
        }
        if (greenBtns.includes(key.id)) {
            styles.backgroundColor = '#1DB954'
            styles[':active'] = {
                backgroundColor: 'white',
                color: '#1DB954'
            }
        }
        return styles
    }
    return (
        <div className="container">
            {KEYS.map((key) => {
                return (
                    <div
                        id={key.caption}
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