import React from "react";

const Cards = ({ data }) => {
    const vals=data.max/4

  return (
    <div className="Card">
      <div className="CardTop">
        <p><b>{data.title}</b></p>
        <img src={data.logo} alt={data.title} className="CardIcon" />
      </div>
      <div className="Value">
        <h3>{data.val}{data.unit}&ensp;{data.comment}</h3>
      </div>
      <div className="Progresslabels">
        {[...new Array(5)].map((val,idx)=>{
            return <p>{Math.ceil(vals*idx)}</p>
        })}
      </div>
      <progress value={data.val} max={data.max} className='Progress'/>
    </div>
  );
};

export default Cards;
