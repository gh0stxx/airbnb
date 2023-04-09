import { useState, useEffect, useRef} from "react";


export default function useOnClickOutside(ref: React.RefObject<HTMLInputElement>, onClose: ()=>void ) {

    useEffect(() => {
      const checkIfClickedOutside = (e: { target: any; }) => {
        if (ref.current && !ref.current.contains(e.target)) {
          onClose()
        }
      }
      document.addEventListener("click", checkIfClickedOutside)
      return () => {
        document.removeEventListener("click", checkIfClickedOutside)
      }
    }, [onClose, ref])
}