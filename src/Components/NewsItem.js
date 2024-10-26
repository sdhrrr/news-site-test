import React from "react";

import "./NewsItem.css"


export function NewsItem(props) {

    let {imgUrl, title, author, desc, newsUrl, time} = props;
    // let {title, desc} = props;

    return(
        <div className="card">
            <div className="card-image" style={{backgroundImage: `url(${imgUrl})` }}></div>
            <div className="card-content">
                <p className="card-time">{time} by {author || 'Unknown'}</p>
                <h2 className="card-title">{title}</h2>
                <p className="card-desc">{desc}</p>
                <a href={newsUrl} className="card-find-out-more" target="_blank" rel="noopener noreferrer">Find out more.</a>
            </div>
        </div>
    );
}

// <div className="card"
// style={{backgroundImage : `url(${imgUrl})`}}
// >
//     <div className="overlay">
//         <p className="date">{time}</p>
//         <h2 className="title">{title}</h2>
//         <p className="desc">{desc} by {author}</p>
//         {/* <button className="read-more">{'>'}</button> */}
//         <a href={newsUrl} className="find-out-more">Find out more</a>
//     </div>

// </div>
// https://images.pexels.com/photos/16631051/pexels-photo-16631051/free-photo-of-close-up-of-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1