import React, { useState } from "react";
import GlobalModal from "../global/elements/GlobalModal";

const Form = () => {
    return (
        <form>
            <input placeholder="입력바람" />
        </form>
    );
};

const Modal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <h2>모달 창</h2>
            <button onClick={openModal}>모달팝업</button>
            <GlobalModal
                open={modalOpen}
                close={closeModal}
                header="Header 제목"
                width="100"
                height="50"
            >
                <Form />
            </GlobalModal>
        </>
    );
};

export default Modal;
