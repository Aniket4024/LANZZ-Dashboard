import React from 'react'
import style from "../../CSS/HighlightBox.module.css"


const HighlightBox = ({id,title,total,tag,from,icon,tagBG,tagColor,SPFStyle}) => {
  return (
    <div className={style.HighlightBox} id={id} style={{backgroundColor:SPFStyle?.backgroundColor,color:SPFStyle?.color,border:SPFStyle?.border}}>
      <div style={{color:SPFStyle?.color}}>
        <p style={{color:SPFStyle?.color}}>{title}</p>
        {icon}
      </div>
      <h1>{total}</h1>
      <div>
        <div style={{backgroundColor:tagBG,color:tagColor}}>
            {tag}
        </div>
        <p style={{color:SPFStyle?.color}}>{from}</p>
      </div>
    </div>
  )
}

export default HighlightBox
