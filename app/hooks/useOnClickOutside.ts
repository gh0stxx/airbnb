import { useEffect } from "react";


export default function useOnClickOutside(ref: React.RefObject<HTMLInputElement>, onClose: () => void ) {

    useEffect(() => {
      const checkIfClickedOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
          onClose()
        }
      }
      document.addEventListener("click", checkIfClickedOutside)
      return () => {
        document.removeEventListener("click", checkIfClickedOutside)
      }
    }, [onClose, ref])
}