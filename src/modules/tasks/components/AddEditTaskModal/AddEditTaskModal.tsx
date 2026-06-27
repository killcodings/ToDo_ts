import classNames from 'classnames';
import Close from './../../../../assets/icons/close.svg?react';
import { Button } from '../../../shared/ui/Button/Button';
import { Input } from '../../../shared/ui/Input/Input';
import { Modal } from '../../../shared/ui/Modal/Modal';
import './style.scss';
import {useState} from "react";
import {PriorityVariant} from "../../types/task.ts";


type Props = {
  onClose: () => void;
  onAdd: (task: { title: string, priority: PriorityVariant }) => void;
};

export const AddEditTaskModal = ({ onClose, onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<PriorityVariant>("high");

  const priorities = ["high", "medium", "low"] as const;

  const handleSubmit = () => {
    onAdd({
      title,
      priority,
    });

    onClose();
  };
  return (
    <Modal>
      <form>
        <div className="add-edit-modal">
          <div className="flx-between">
            <span className="modal-title">Добавить задачу</span>
            <Close className="cp" onClick={onClose} />
          </div>
          <Input
            label="Задача"
            placeholder="Введите текст.."
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            value={title}
          />
          <div className="modal-priority">
            <span>Приортитет</span>
            <ul className="priority-buttons">
              {priorities.map((p) => (
                  <li
                      key={p}
                      onClick={() => setPriority(p)}
                      className={classNames(
                          p,
                          {
                            [`${p}-selected`]: priority === p,
                          }
                      )}
                  >
                    {p}
                  </li>
              ))}
            </ul>
          </div>
          <div className="flx-right mt-50">
            <Button title="Добавить" onClick={handleSubmit} />
          </div>
        </div>
      </form>
    </Modal>
  );
};
