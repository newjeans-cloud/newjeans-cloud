import { createStore } from "solid-js/store";

import type { ModalState } from "../interfaces/ModalStateTypes";

const [modalState, setModalState] = createStore<ModalState>({
  modal: {
    isActive: false,
    title: "",
    content: "",
  },
  actionModal: {
    isActive: false,
    title: "",
    content: "",
  },
});

export { modalState, setModalState };
