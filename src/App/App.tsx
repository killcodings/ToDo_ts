import './App.scss';
import { TodoList } from '../modules/tasks/components/TodoList/TodoList';

const App = () => {
  return (
    <div className="container">
      <TodoList />
    </div>
  );
};

export default App;
