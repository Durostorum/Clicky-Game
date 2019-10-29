import React from 'react';

const Cards = (props) => {
    const cardStyle={
        position: "flex-inline",
        width: "150px",
        height: "190px",
        margin: '20px',
        border: 'solid 10px #fff',
        borderRadius:'10px',
        boxShadow: '0px 0px 2.5px #eee',
        cursor: 'pointer'
    }
   
    return (  
        <span >
             {props.cards.map((a,b)=><img  style={cardStyle} onClick={()=>props.itemClicked(a.name)} alt='' src={a.link} key={b} name={a.name}></img>
             )}
        </span>
    );
}
 
export default Cards;

