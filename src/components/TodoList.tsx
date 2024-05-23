import React, { useState } from 'react';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
};

const TodoList: React.FC = () => {
    const title: string = 'To-do List';
    const [list, setList] = useState<Todo[]>([
        {id: 1, text: '공부하기', isChecked: false}, 
        {id: 2, text: '운동하기', isChecked: false}
    ]);

    const handleIsChecked = (id: number) => {
        setList((prevItems) =>
            prevItems.map((item) => 
                item.id === id ? { ...item, isChecked: !item.isChecked } : item
            )
        );
    };

    return (
        <div>
            <h1>{title}</h1>
            <ul style={{ listStyleType: 'none' }}>
                {list.map((item) => (
                    <li key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.isChecked}
                            onChange={() => handleIsChecked(item.id)}
                        />
                        <span>
                            {item.isChecked? <del>{item.text}</del> : <span>{item.text}</span>}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
