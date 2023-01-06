import React from "react";

const Card = ({
  name,
  humidity,
  temp,
  w_descrip,
  uv,
  wind,
  precip,
  visibility,
  pressure,
}) => {
  return (
    <section className="card-Block">
      <article>
        <div className="r1">
          <span>{name}</span>
        </div>
        <div className="r2">
            <div>{w_descrip}</div>
        </div>
        <div className="r3">
            <div>Wind : {wind}</div>
            <div>Pressure : {pressure}</div>
        </div>
        <div className="temp">
            Temp : {temp} <sup>o</sup>C
        </div>
        
        <div className="r3">
          <div>Humidity : {humidity}</div>
          <div>Visiblity : {visibility}</div>
        </div>
      </article>
    </section>
  );
};

export default Card;