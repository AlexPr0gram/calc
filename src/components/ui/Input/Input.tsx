import './_Input.css'

export const Input = ({input, result}) => {
    return (
        <>

            <div className="container-result">
                {result}
            </div>
            <div className="container-input">
                {input
                    .replaceAll('/', '÷')
                    .replaceAll('*', '×')
                    .replaceAll('.', ',')
                }
            </div>
        </>
    )
}