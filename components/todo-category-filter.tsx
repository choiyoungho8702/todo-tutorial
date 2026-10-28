"use client";

import { CATEGORY_FILTERS, type CategoryFilter } from "@/lib/types";
import { OptionRadioGroup } from "@/components/option-radio-group";

interface TodoCategoryFilterProps {
  value: CategoryFilter;
  onChange: (value: CategoryFilter) => void;
}

export function TodoCategoryFilter({
  value,
  onChange,
}: TodoCategoryFilterProps) {
  return (
    <OptionRadioGroup
      label="카테고리 필터"
      options={CATEGORY_FILTERS}
      value={value}
      onChange={onChange}
    />
  );
}
