import React, {FunctionComponent, ReactNode} from 'react';

interface ListProps<T> {
    items: T[];                             //некий массив данных
    renderItem: (item: T) => ReactNode;     //шаблон отрисовки
}

export default function List<T>(props: ListProps<T>) {
    return (
        <>
            {props.items.map(props.renderItem)}
        </>
    )
}

