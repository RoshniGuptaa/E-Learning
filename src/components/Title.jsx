import React from 'react'

export default function Title({text="Roshni's Component", classes}) {
  return (
    <div>
      <h1 className={`title ${classes}`}>{text}</h1>
    </div>
  );
}
