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
            setList([...list, { id: Date.now(), text: inputText, isChecked: false }]);
            setInputText('');
        }
    };

    return (
        <div>
            <h1>{title}</h1>
            <div style={containerStyle}>
                <input
                    type="text"
                    value={inputText}
                    placeholder='add your to do thing'
                    style={inputStyle}
                    onChange={(e) => setInputText(e.target.value)}
                />
                <Button variant="outline-dark" onClick={handleAdd}>Add</Button>
            </div>
            <div style={borderStyle}>
                <ul style={listItemStyle}>
                    {list.map((item) => (
                        <li key={item.id} style={{ marginBottom: '0.5rem' }}>
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
        </div>
    );
};

export default TodoList;

const containerStyle = {
    marginTop: '2rem',
    marginBottom: '0.7rem',
};

const inputStyle = {
    padding: '0.1rem', 
    marginRight: '1rem',
}

const borderStyle = {
    borderWidth: '1px',
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: '0.4rem',
    padding: '1rem',
};

const listItemStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
};
