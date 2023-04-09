import { useEffect } from "react";

export default function useOnClickOutside(ref: React.RefObject<HTMLElement>, onClose: () => void) {
    useEffect(() => {
        const handleClickOrTouchOutside = (e: MouseEvent | TouchEvent) => {
            if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
                onClose();
            }
        };

        document.addEventListener("click", handleClickOrTouchOutside);
        document.addEventListener("touchstart", handleClickOrTouchOutside);

        return () => {
            document.removeEventListener("click", handleClickOrTouchOutside);
            document.removeEventListener("touchstart", handleClickOrTouchOutside);
        };
    }, [onClose, ref]);
}

