"use client";

import { TODO_FILTERS, type TodoFilter } from "@/lib/types";
import { OptionRadioGroup } from "@/components/option-radio-group";

interface TodoFilterProps {
  value: TodoFilter;
  onChange: (filter: TodoFilter) => void;
}

export function TodoFilter({ value, onChange }: TodoFilterProps) {
  return (
    <OptionRadioGroup
      label="필터"
      options={TODO_FILTERS}
      value={value}
      onChange={onChange}
    />
  );
}
