import "./style.scss"
import {ReactNode} from "react";

type Props = {
    children: ReactNode;
};
export const Modal = ({ children }: Props) => {
  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
    </div>
  )
}

export default Modal
