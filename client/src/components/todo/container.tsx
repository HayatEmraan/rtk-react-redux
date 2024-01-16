import { useAppSelector } from "@/redux/hooks";
import TodoCard from "./card";
import { TodoFilter } from "./filter";
import { TodoModal } from "./modal";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between items-center my-2">
        <TodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-lg p-1">
        <div className="bg-white rounded-md space-y-2">
          {todos.length > 0 ? (
            todos.map((todo) => <TodoCard todo={todo} key={todo.id} />)
          ) : (
            <div className="bg-white font-semibold flex py-1 justify-center items-center text-2xl rounded-lg">
              <p>There is no todo.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
