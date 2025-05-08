import * as React from "react";
import { Button } from "../ui/button";
import { IconWorld } from "@tabler/icons-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

export function LanguageSelect() {
  return (
    <Select>
      <SelectTrigger className="p-0" asChild>
        <Button aria-label="language-select" variant="outline" size='default' className="!bg-[#e0dfdf]">
          <IconWorld size={20} color="var(--color-brand-foreground)" className="!w-6 !h-6" />
        </Button>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="az">AZ</SelectItem>
          <SelectItem value="en">EN</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
