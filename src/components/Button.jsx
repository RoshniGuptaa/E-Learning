import React from 'react'

export default function Button({classes,text,type,style,onClick}) {

    const alertMissingHandler=()=>window.alert("Add event handler")
  return (
    <button  type={type} className={classes} style={style} onClick={onClick?onClick:alertMissingHandler}>
     {text?text:"Click"}
    </button>
  );
}
