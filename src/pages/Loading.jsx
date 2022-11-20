import React from 'react'
import styles from "../style/loading.module.css"
import { useNavigate } from "react-router-dom";

function Loading() {
  let h = window.innerHeight
  let w = window.innerWidth

  let navigate = useNavigate();
  setTimeout(() => {
    navigate("/prof")
  }, 10000);

  return (
    <>

      <div className={styles.outer} style={{ height: `${h}px` }}>
        <img src="gif (2).gif" alt="" style={{ width: `${w - 100}px`, height: `${h - 100}px`, objectFit: "contain" }} />
      </div>
    </>
  )
}

export default Loading