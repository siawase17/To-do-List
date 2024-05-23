import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
};

const TodoList: React.FC = () => {
    const title: string = 'To-do List';
    const [inputText, setInputText] = useState<string>('');
    const [list, setList] = useState<Todo[]>([
        { id: 1, text: '공부하기', isChecked: false },
        { id: 2, text: '운동하기', isChecked: false }
    ]);

    const handleIsChecked = (id: number) => {
        setList((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, isChecked: !item.isChecked } : item
            )
        );
    };

    const handleAdd = () => {
        if (inputText.trim() !== '') {
            //const id = list.length > 0 ? list[list.length - 1].id + 1 : 1;
            setList([...list, { id: Date.now(), text: inputText, isChecked: false }]);
            setInputText('');
        }
    };

    return (
        <div>
            <h1>{title}</h1>
            <div style={{ marginTop: '2rem', marginBottom: '0.7rem' }}>
                <input type="text"
                    value={inputText}
                    placeholder='add your to do thing'
                    style={{ padding: '0.1rem', marginRight: '1rem' }}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <Button variant="outline-dark" onClick={handleAdd}>Add</Button>
            </div>
            <ul style={{ listStyleType: 'none' }}>
                {list.map((item) => (
                    <li key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.isChecked}
                            onChange={() => handleIsChecked(item.id)}
                            style={{ marginRight: '0.7rem' }}
                        />
                        <span>
                            {item.isChecked ? <del>{item.text}</del> : <span>{item.text}</span>}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
