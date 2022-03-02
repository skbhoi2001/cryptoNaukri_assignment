import React from 'react'
import styles from "./Form.module.css"
export const FormDisplay = ({data,handleDelete,handleToggle}) => {
  return (
    <>
        <div>
            {
                data.map((item)=>{
                    return(
                        <div className={styles.output} >
                            <p>{item.name}</p>
                            <p>{item.description}</p>
                            {/* <p>{item.status?"Completed":"Not Completed"}</p>
                            <p>{item.date}</p> */}
                            <button className={styles.output_button} onClick={()=>handleToggle(item.id)}>{item.status?"Completed":"Not Completed"}</button>
                            <button className={styles.output_button_delete} onClick={() => handleDelete(item.id)} >Delete</button>
                            
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}
