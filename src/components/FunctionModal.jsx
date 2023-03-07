import React, { useCallback } from "react";

import GlobalFunctionModal from "../global/elements/GlobalFunctionModal";
import useModal from "../global/hooks/useModal";

const Form = () => {
    return (
        <form>
            <input placeholder="입력바람" />
        </form>
    );
};

const FunctionModal = () => {
    const [modalOption, showModal] = useModal();
    const onClick = useCallback(() => {
        showModal(true, "밑 form도 변경 가능함", () => {}, null, <Form />);
    }, [modalOption]);

    return (
        <div>
            <h2>두번째 모달 창</h2>
            <button onClick={onClick}>모달버튼</button>
            <GlobalFunctionModal modalOption={modalOption} width={500} />
        </div>
    );
};

export default FunctionModal;
