import { useState } from "react";
import TodoCard from "./card";
import { TodoFilter } from "./filter";
import { TodoModal } from "./modal";
import { useGetTodosQuery } from "@/redux/apis/api";

const TodoContainer = () => {
  const [position, setPosition] = useState("");

  const { data } = useGetTodosQuery(position);
  console.log(data);
  return (
    <div>
      <div className="flex justify-between items-center my-2">
        <TodoModal />
        <TodoFilter position={position} setPosition={setPosition} />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-lg p-1">
        <div className="bg-white rounded-md space-y-2">
          {data && data?.data?.length > 0 ? (
            data?.data?.map((todo) => <TodoCard todo={todo} key={todo._id} />)
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
