import { useRef } from "react";

export function useAutoFocusOnClick<T extends HTMLElement = HTMLInputElement>() {
  const inputRef = useRef<T>(null);
  const containerRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };

  return {
    inputRef,
    containerProps: {
      ref: containerRef,
      onClick: handleClick,
    },
  };
}
