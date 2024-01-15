import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TodoSelect({
  priority,
}: {
  priority: React.Dispatch<React.SetStateAction<string>>;
  }) {
  
  
  return (
    <Select onValueChange={priority}>
      <SelectTrigger className="col-span-6">
        <SelectValue placeholder="Set Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">Hight</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
