import './style.scss';
import Add from './../../../../assets/icons/add.svg?react';
import { AddEditTaskModal } from '../AddEditTaskModal/AddEditTaskModal';
import { Button } from '../../../shared/ui/Button/Button';
import { DeleteModal } from '../DeleteTaskModal/DeleteModal';
import { TaskCard } from '../TaskCard/TaskCard';
// import { taskList } from '../serverData/taskList';
import { taskList } from '../../data/taskList.ts';
import {useState} from "react";
// import type { Task } from '../../types/task';
// import {CreateTask} from "../../types/task.ts";
import type { CreateTask } from "../../types/task";
import type { Status } from "../../types/types";

export const TodoList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState(taskList);

  const handleAddTask = (task: CreateTask) => {
    const newTask = {
      id: Date.now().toString(),
      status: "todo" as Status,
      progress: 0,
      ...task,
    };
    setTasks((prev) => [newTask, ...prev]);
    setIsModalOpen(false);
  };

  const showDeleteModal = false;
  return (
    <>
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Список задач</h2>
          <Button title="Добавить задачу" icon={<Add />} onClick={() => setIsModalOpen(true)} />
        </div>
        <div className="task-container">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
      {isModalOpen && (
          <AddEditTaskModal
              onClose={() => setIsModalOpen(false)}
              onAdd={handleAddTask}
          />
      )}
      {showDeleteModal && <DeleteModal />}
    </>
  );
};
