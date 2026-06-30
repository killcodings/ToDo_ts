import './style.scss';
import Add from './../../../../assets/icons/add.svg?react';
import { AddEditTaskModal } from '../AddEditTaskModal/AddEditTaskModal';
import { Button } from '../../../../shared/ui/Button/Button';
import { DeleteModal } from '../DeleteTaskModal/DeleteModal';
import { TaskCard } from '../TaskCard/TaskCard';
// import { taskList } from '../serverData/taskList';
// import { taskList } from '../../../../shared/data/taskList.ts';
import {useState} from "react";
import type { Task } from '../../../../shared/types/task';
// import {CreateTask} from "../../types/task.ts";
import type { CreateTask } from "../../../../shared/types/task";
import { Status } from "../../../../shared/types/types";

import { taskApi } from '../../api/taskApi';


export const TodoList = () => {

  const tasksData = taskApi.getTasks();

  // const [tasks, setTasks] = useState(taskList);

  const [tasks, setTasks] = useState<Task[]>(tasksData);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const [deleteTaskId, setDeleteTaskId] = useState<string | null>(null);

  const handleDeleteClose = () => {
    setDeleteTaskId(null)
  }

  const handleDeleteClick = (task: Task) => {
    setDeleteTaskId(task.id);
  };

  const handleDeleteConfirm = () => {
    console.log(deleteTaskId)
    setTasks((prev) =>
        prev.filter((t) => t.id !== deleteTaskId)
    );
    setDeleteTaskId(null);
  }
  const handleAddTask = (task: CreateTask) => {
    if (editingTask) {
      setTasks((prev) =>
          prev.map((t) =>
              t.id === editingTask.id ? { ...t, ...task } : t));
    } else {
      const newTask = {
        id: Date.now().toString(),
        status: "todo" as Status,
        progress: 0,
        ...task,
      };
      setTasks((prev) => [newTask, ...prev]);
    }

    setIsModalOpen(false);
    setEditingTask(null);
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleStatusChange = (task: Task) => {
    const nextStatus =
        task.status === Status.TODO ? Status.PROGRESS
            : task.status === Status.PROGRESS ? Status.DONE : Status.TODO;

    const nextProgress =
        nextStatus === Status.TODO ? 0 : nextStatus === Status.PROGRESS ? 50 : 100;

    setTasks(prev =>
        prev.map(t =>
            t.id === task.id
                ? {
                  ...t,
                  status: nextStatus,
                  progress: nextProgress,
                }
                : t
        )
    );
  };
  return (
    <>
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Список задач</h2>
          <Button title="Добавить задачу" icon={<Add />} onClick={() => setIsModalOpen(true)} />
        </div>
        <div className="task-container">
          {tasks.map((task) => (
            <TaskCard
                key={task.id}
                task={task}
                onEdit={handleEdit}
                onStatusChange={handleStatusChange}
                onDelete={(task) => handleDeleteClick(task)}
            />
          ))}
        </div>
      </div>

      {isModalOpen && (
          <AddEditTaskModal
              mode={editingTask ? "edit" : "create"}
              task={editingTask ?? undefined}
              onClose={() => {
                setIsModalOpen(false);
                setEditingTask(null);
              }}
              onAdd={(task) => handleAddTask(task)} // позже разделим add/update
          />)}

      {deleteTaskId && (
          <DeleteModal
              onClose={handleDeleteClose}
              onDelete={handleDeleteConfirm}
          />)}
    </>
  );
};
