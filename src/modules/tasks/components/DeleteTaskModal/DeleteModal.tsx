import { Button } from '../../../../shared/ui/Button/Button';
import { Modal } from '../../../../shared/ui/Modal/Modal.tsx';
import './style.scss';

type Props = {
    onClose: () => void;
    onDelete: () => void;
};
export const DeleteModal = ({ onClose, onDelete }: Props) => {
  return (
    <Modal>
      <div className="delete-modal">
        <p>Точно удалить задачу?</p>
        <div className="delete-modal__actions">
          <Button title="Удалить" onClick={() => onDelete()} />
          <Button title="Выйти" outline onClick={() => onClose()} />
        </div>
      </div>
    </Modal>
  );
};
