import classes from "./ErrorModal.module.css";
import styled from "styled-components";
import Link from "next/dist/client/link";
import Buttonshow from "./Buttonshow";

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Modal = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;

const ModalHeader = styled.header`
  background: #1ec9e8;
  padding: 1rem;
`;

const Headerh2 = styled.h2`
  margin: 0;
  color: white;
`;

const Content = styled.div`
  padding: 1rem;
  background-color: #bdccff;
`;

const Actions = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  background: #bdccff;
`;

const ErrorModal = (props) => {
  return (
    <>
      <BackDrop onClick={props.onConfirm} />
      <Modal>
        <ModalHeader>
          <Headerh2>{props.title}</Headerh2>
        </ModalHeader>
        <Content>
          <p>{props.message}</p>
        </Content>
        <Actions>
          {props.title === "Succes!" ? (
            <Link href="/">
              <Buttonshow>Go home</Buttonshow>
            </Link>
          ) : (
            <Buttonshow onClick={props.onConfirm}>Okay</Buttonshow>
          )}
        </Actions>
      </Modal>
    </>
  );
};

export default ErrorModal;
