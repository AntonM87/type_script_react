import React, {FunctionComponent, useRef, useState} from 'react';

const EventExample: FunctionComponent = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(inputRef.current?.value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log(e.target)
    }

    const dropHandler = () => {
        console.log('drag');
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
        console.log('drop');
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    return (
        <form action="#">
            <input value={value} onChange={changeHandler} type="text" placeholder='Управляемый'/>
            <input ref={inputRef} type="text" placeholder='Не управляемый'/>
            <button onClick={clickHandler} type='submit'>Click</button>
            <div
                draggable
                onDrag={dragHandler}
                onDrop={dropHandler}
                onDragLeave={dragLeaveHandler}
                onDragOver={dragOverHandler}
                style={{cursor: "pointer", width: 200, height: 200, background: isDrag ? 'blue' : 'red'}}/>
            <div
                style={{cursor: "pointer", width: 200, height: 200, background: 'red', marginTop: '1rem'}}/>
        </form>
    );
};

export default EventExample;