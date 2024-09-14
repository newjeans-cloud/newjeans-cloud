import ActionModal from "./components/modal/actionModal";
import Modal from "./components/modal/modal";

const App = (props) => {
  return (
    <div>
      <ActionModal />
      <Modal />
      <div>{props.children}</div>
    </div>
  );
};

export default App;
