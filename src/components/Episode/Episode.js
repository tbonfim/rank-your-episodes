import React from 'react';


export default function Episode({episode}) {
    return ( 
        <div className="card" >
            <div className="card-body"> 
                <div className="card-title row">
                    <h5 className="col-sm-9">{episode.title}</h5>
                    <span className="col-sm-3">{episode.date}</span>
                </div>
                <ul className="list-group list-group-flush list-unstyled">
                    <li className="list-group-item">Director: {episode.director}</li>
                    <li className="list-group-item">Written by: {episode.writter}</li>
                    <li className="list-group-item">Starring: {episode.starring} </li>
                    <li className="list-group-item">Starring: {episode.starring} </li>
                </ul>
                <p className="card-body">{episode.description}</p>
            </div>
            
        </div>
    )
}


// <div class="card">
//   <div class="card-body">
//     This is some text within a card body.
//   </div>
// </div>


// <ul class="list-group list-group-flush">
//     <li class="list-group-item">Cras justo odio</li>
//     <li class="list-group-item">Dapibus ac facilisis in</li>
//     <li class="list-group-item">Vestibulum at eros</li>
//   </ul>
        // "overallOrder": 1,
        // "seasonOrder": "Season 1 - Episode 1",
        // "title": "The National Anthem",
        // "director": "Otto Bathurst",
        // "writer": "Charlie Brooker",
        // "date": "4 December 2011",
        // "ukViewers": "2.07",
        // "description": "Princess Susannah, a member of the British royal family, has been kidnapped. To return the Princess, the kidnapper demands that the country's Prime Minister, Michael Callow, has sexual intercourse with a pig on live television, otherwise he will kill her. Callow refuses to be blackmailed, but public opinion is gradually turning against him. Security forces are trying to locate the kidnapper, but every effort fails. Under pressure, Callow finally agrees to fulfill the demand. The British people gather in public places and watch the shocking broadcast, with no one realising that the kidnapper has already released the Princess, thirty minutes before Callow's sex act began. The kidnapper commits suicide by hanging and he is later revealed to be an artist, who planned the debacle in order to make a statement on people's obsession with the media. One year later, Callow's approval ratings have fully recovered, but his relationship with his wife has suffered a heavy blow.",
        // "starring" : ". . ."