import React, {FunctionComponent, ReactChild, ReactNode, useState} from 'react';

enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width: string,
    height: string,
    variant: CardVariant,
    onClick: (message: string) => void,
}

const Card: FunctionComponent<CardProps> = ({width, height, variant, children, onClick}) => {
    const [state, setState] = useState('Hello world');
    return (
        <>
            <div style={{
                width, height,
                border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
                background: variant === CardVariant.outlined ? 'lightgray' : 'none'
            }}
                 onClick={() => onClick(state)}
            >
                {children}
            </div>
            <br/>
        </>
    );
};

export {Card, CardVariant};