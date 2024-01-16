import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { TodoSelect } from "./select";
import { useState } from "react";
import { useAddTodosMutation } from "@/redux/apis/api";

export function TodoModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");

  const [todo] = useAddTodosMutation();

  const handleSubmit = () => {
    const obj = {
      title,
      description,
      priority,
      isCompleted: false,
    };
    todo(obj);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient font-semibold text-sm uppercase">
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>
            Add todo details. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              onBlur={(e) => setTitle(e.target.value)}
              id="title"
              placeholder="Enter title"
              className="col-span-6"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <TodoSelect priority={setPriority} />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Textarea
              id="description"
              onBlur={(e) => setDescription(e.target.value)}
              className="col-span-6"
              placeholder="Type your message here."
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleSubmit} type="button" variant="default">
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
