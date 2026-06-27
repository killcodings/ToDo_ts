import classNames from 'classnames';
import DeleteIcon from './../../../../assets/icons/delete.svg?react';
import EditIcon from './../../../../assets/icons/edit.svg?react';
import { CircularProgressBar } from '../../../shared/ui/CircularProgressBar/CircularProgressBar';
import './style.scss';
import type { Task } from '../../types/task';

type TaskCardProps = {
    task: Task;
};

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <div className="task-card">
      <div className="flex w-100">
        <span className="task-title">Задача</span>
        <span className="task">{task.title}</span>
      </div>
      <div className="flex">
        <span className="priority-title">Приоритет</span>
        <span className={classNames(`priority--${task.priority}`, 'priority')}>
          {task.priority}
        </span>
      </div>
      <div className="task-status-wrapper">
        <button className={classNames(`status--${task.status}`, 'status')}>
          {task.status}
        </button>
      </div>
      <div className="progress">
        <CircularProgressBar
          strokeWidth={2}
          sqSize={24}
          percentage={task.progress}
        />
      </div>
      <div className="actions">
        <EditIcon className="mr-20 cp" onClick={() => {}} />
        <DeleteIcon className="cp" onClick={() => {}} />
      </div>
    </div>
  );
};
