import style from "../../CSS/TaskBox.module.css"


const TaskBox = () => {
  return (
    <div className={style.TaskBox}>
        <div>
            <div>
                <h4>Lorem ipsum dolor, sit amet consectetur.</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi provident alias culpa velit eius?</p>
            </div>
            <div className={style.dateTag}>
                <h6>January 1, 2024 </h6> 
                <div></div> 
                <h6>05:23 pm</h6>
            </div>
        </div>
        <div>
            <div>open</div>
        </div>
    </div>
  )
}

export default TaskBox;

