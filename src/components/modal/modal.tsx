import type { Component } from "solid-js";

import { modalState, setModalState } from "../../stores/modalStore";

const Modal: Component = () => {
  return (
    <dialog
      class="modal"
      classList={{ "modal-open": modalState.modal.isActive }}
    >
      <div class="modal-box">
        <h3 class="font-bold text-lg">{modalState.modal.title}</h3>
        <p class="py-4">{modalState.modal.content}</p>
        <div class="modal-action">
          <form method="dialog">
            <button
              type="button"
              class="btn"
              onClick={() =>
                setModalState("modal", {
                  isActive: false,
                  title: "",
                  content: "",
                })
              }
            >
              닫기
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
