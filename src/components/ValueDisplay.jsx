import { useEffect, useRef } from "react"
import style from './ValueDisplay.module.css'

function ValueDisplay({value}){
    const prevValueRef = useRef('')

    useEffect(() => {
    return () => {
      prevValueRef.current = value
    }
  })

    return(
        <div className={style.textBox}>
            <p>Current value: {value}</p>
            <p>Previous value: {prevValueRef.current ?? '-'}</p>
        </div>
    )
}
export default ValueDisplay