import { useEffect } from 'react';

const useOnClickOutside = (
    ref: React.RefObject<HTMLElement>,
    onClose: () => void
) => {
    useEffect(() => {
        const handleClickOrTouchOutside = (e: MouseEvent | TouchEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('click', handleClickOrTouchOutside);

        return () => {
            document.removeEventListener('click', handleClickOrTouchOutside);
        };
    }, [onClose, ref]);
}

export default useOnClickOutside;