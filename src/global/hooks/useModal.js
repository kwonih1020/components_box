import { useState, useCallback } from "react";

const OPTION = {
    show: false, // 모달을 키고 끄는 옵션
    title: "", // 모달의 문구
    onSubmit: () => {}, // 모달을 킬 때마다 사용할 콜백 함수
    onClose: () => {}, // 모달을 끌 때마다 사용할 콜백 함수
    element: null, // 모달마다 넣고 싶은 추가 컴포넌트 자리
    onClickAlert: () => {},
};

const useModal = () => {
    // 모달마다 확인, 닫기 버튼을 누를 때마다 API 요청이나 원하는 로직을 같이 실행해주기를
    // 원할 수 있기 때문에 사용하는 곳마다 콜백함수를 인자로 넣어주면 되겠습니다.
    const [modalOption, setModalOption] = useState(OPTION);

    const showModal = useCallback(
        (
            show,
            title,
            onSubmitCallback,
            onCloseCallback,
            element,
            onAlertCallback
        ) => {
            setModalOption((prev) => ({
                ...prev,
                show,
                title,
                onSubmit: () => {
                    if (onSubmitCallback) onSubmitCallback();
                    setModalOption((prev) => ({ ...prev, show: false }));
                },
                onClose: () => {
                    if (onCloseCallback) onCloseCallback();
                    setModalOption((prev) => ({ ...prev, show: false }));
                },
                onClickAlert: () => {
                    if (onAlertCallback) onAlertCallback();
                    alert("?");
                    setModalOption((prev) => ({ ...prev, show: false }));
                },
                element,
            }));
        },
        [modalOption]
    );

    return [modalOption, showModal];
};

export default useModal;
