import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = (props) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.append(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{props.children}</div>, elRef.current);
};

export default Modal;
