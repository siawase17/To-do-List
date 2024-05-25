import React from "react";
import { Modal } from 'react-bootstrap';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
};

type DetailModalProps = {
    isShow: boolean;
    content: Todo | null;
    handleClose: () => void;
};

export const DetailModal: React.FC<DetailModalProps> = ({ isShow, content, handleClose }) => {
    return (
        <div>
            <Modal show={isShow} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>To-do Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content?.text}</Modal.Body>
            </Modal>
        </div>
    )
}