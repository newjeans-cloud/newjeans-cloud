import type { JSX } from "solid-js";

export interface ModalState {
  modal: {
    isActive: boolean;
    title: string;
    content: JSX.Element;
  };
  actionModal: {
    isActive: boolean;
    title: string;
    content: JSX.Element;
  };
}
