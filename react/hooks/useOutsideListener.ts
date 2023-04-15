import * as React from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideListener(
  ref: React.MutableRefObject<HTMLElement | null>,
  cb: () => void = () => void 0
) {
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        cb?.();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb]);
}

export { useOutsideListener };