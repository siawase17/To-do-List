import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { MdDeleteOutline } from "react-icons/md";
import { DetailModal } from './DetailModal';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
};

const TodoList: React.FC = () => {
    const title: string = 'To-do List';
    const [inputText, setInputText] = useState<string>('');
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedThing, setSelectedThing] = useState<Todo | null>(null);
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

    const handleItemDetail = (item: Todo) => {
        setShowDetail(true);
        setSelectedThing(item);
    };

    const handleCloseDetail = () => {
        setShowDetail(false);
    };

    const handleDelete = (id: number) => {
        setList(list.filter((thing) => thing.id !== id))
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
            <ul style={listContainerStyle}>
                {list.map((item) => (
                    <li key={item.id} style={listItemStyle}>
                        <div>
                            <input
                                type="checkbox"
                                checked={item.isChecked}
                                onChange={() => handleIsChecked(item.id)}
                                style={{ marginRight: '0.7rem' }}
                            />
                            <span onClick={() => handleItemDetail(item)}>
                                {item.isChecked ? <del>{item.text}</del> : <span>{item.text}</span>}
                            </span>
                        </div>
                        <MdDeleteOutline onClick={() => handleDelete(item.id)} />
                    </li>
                ))}
            </ul>
            <DetailModal isShow={showDetail} content={selectedThing} handleClose={handleCloseDetail}/>
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
};

const listContainerStyle = {
    listStyleType: 'none',
    width: '70%',
    borderWidth: '1px',
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: '0.4rem',
    padding: '0.7rem 1rem',
    marginBottom: '1rem'
};

const listItemStyle = {
    marginBottom: '0.5rem',
    display: 'flex',
    flexDirection: 'row' as 'row',
    justifyContent: 'space-between',
    margin: '0.2rem 0'
};
