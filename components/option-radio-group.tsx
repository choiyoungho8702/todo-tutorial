"use client";

import { Button } from "@/components/ui/button";

interface OptionRadioGroupProps<T extends string> {
  label: string;
  options: { value: T; label: string }[];
  value: T;
  onChange: (value: T) => void;
}

// 상태 필터·카테고리 필터·정렬이 공유하는 단일 선택 버튼 그룹.
export function OptionRadioGroup<T extends string>({
  label,
  options,
  value,
  onChange,
}: OptionRadioGroupProps<T>) {
  return (
    <div role="radiogroup" aria-label={label} className="flex gap-1">
      {options.map((item) => {
        const selected = item.value === value;
        return (
          <Button
            key={item.value}
            type="button"
            size="sm"
            variant={selected ? "default" : "outline"}
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </Button>
        );
      })}
    </div>
  );
}
