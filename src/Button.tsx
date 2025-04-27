import React, { MouseEventHandler } from 'react'

interface Props {
    onClick?: MouseEventHandler,
    text: string,
}

const Button = ({ text }: Props) => {

    const onClick = () =>
    {
        const id: any = document.getElementsByClassName('mainID')[0];

        if(id)
        {
            id['innerText'] = "Button Clicked";
        }
    }

    return (
        <>
            <button onClick={onClick}>
                {text}
            </button>

            <div className='mainID'>
                hiii
            </div>
        </>
    )
}

export default Button;
