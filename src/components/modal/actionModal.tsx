import type { Component } from "solid-js";

import { modalState, setModalState } from "../../stores/modalStore";

const Modal: Component = () => {
  return (
    <dialog
      class="modal"
      classList={{ "modal-open": modalState.actionModal.isActive }}
    >
      <div class="modal-box">
        <h3 class="font-bold text-lg">{modalState.actionModal.title}</h3>
        <p class="py-4">{modalState.actionModal.content}</p>
        <div class="modal-action">
          <form method="dialog">
            <button
              type="button"
              class="btn"
              onClick={() =>
                setModalState("actionModal", {
                  isActive: false,
                  title: "",
                  content: "",
                })
              }
            >
              취소
            </button>
            <button
              type="button"
              class="btn btn-primary ml-2"
              onClick={() =>
                setModalState("actionModal", {
                  isActive: false,
                  title: "",
                  content: "",
                })
              }
            >
              확인
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
