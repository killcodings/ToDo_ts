import classNames from 'classnames';
import Close from './../../../../assets/icons/close.svg?react';
import { Button } from '../../../../shared/ui/Button/Button';
import { Input } from '../../../../shared/ui/Input/Input';
import { Modal } from '../../../../shared/ui/Modal/Modal';
import './style.scss';
import {useState} from "react";
import {Prioroty} from "../../../../shared/types/types.ts";



type TaskFormData = {
  title: string;
  priority: Prioroty;
};

type Props = {
  mode: "create" | "edit";
  task?: {
    id: string;
    title: string;
    priority: Prioroty;
  };
  onClose: () => void;
  onAdd: (task: TaskFormData) => void;
};


export const AddEditTaskModal = ({ mode, task, onClose, onAdd }: Props) => {
  // const [title, setTitle] = useState("");
  // const [priority, setPriority] = useState<Prioroty>(Prioroty.HIGH);

  const [title, setTitle] = useState(task?.title ?? "");
  const [priority, setPriority] = useState<Prioroty>(task?.priority ?? Prioroty.HIGH);

  const priorities = [Prioroty.HIGH, Prioroty.MEDIUM, Prioroty.LOW];

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
            <span className="modal-title">
              {mode === "edit" ? "Редактировать задачу" : "Добавить задачу"}
            </span>
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
            <Button
                title={mode === "edit" ? "Редактировать" : "Добавить"}
                onClick={() => handleSubmit()}
                disabled={!title.trim()}
            />
          </div>
        </div>
      </form>
    </Modal>
  );
};
