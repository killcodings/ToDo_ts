import './style.scss';
import Add from './../../../../assets/icons/add.svg?react';
import { AddEditTaskModal } from '../AddEditTaskModal/AddEditTaskModal';
import { Button } from '../../../shared/ui/Button/Button';
import { DeleteModal } from '../DeleteTaskModal/DeleteModal';
import { TaskCard } from '../TaskCard/TaskCard';
// import { taskList } from '../serverData/taskList';
import { taskList } from '../../data/taskList.ts';

export const TodoList = () => {
  const showAddEditModal = false;
  const showDeleteModal = false;
  return (
    <>
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Список задач</h2>
          <Button title="Добавить задачу" icon={<Add />} onClick={() => {}} />
        </div>
        <div className="task-container">
          {taskList.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
      {showAddEditModal && <AddEditTaskModal />}
      {showDeleteModal && <DeleteModal />}
    </>
  );
};
