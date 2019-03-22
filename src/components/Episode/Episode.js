import React from 'react';
import './episode.scss'

export default function Episode({episode}) {
    return ( 
        <div className="card col-sm-12 episode-container" >
            <div className="card-body row"> 
                <div className="card-title col-sm-12">
                    <a href={"#episode-"+ episode.overallOrder} className="row text-secondary" data-toggle="collapse" aria-expanded="false" aria-controls={"#episode-"+ episode.overallOrder} >
                        <h5 className="col-sm-9">{episode.title}</h5>
                        <span className="col-sm-3 season-order">{episode.seasonOrder} </span>
                    </a>
                </div>
                <div className={"collapse " + (episode.overallOrder === 1 ? "show": "" ) } id={"episode-" + episode.overallOrder}>
                    <img className="img-fluid rounded" alt={"Image from episode " + episode.title} src={episode.image}/>
                    <ul className="list-group list-group-flush list-unstyled">
                        <li className="list-group-item">Director: {episode.director}</li>
                        <li className="list-group-item">Written by: {episode.writter}</li>
                        <li className="list-group-item">Starring: {episode.starring} </li>
                        <li className="list-group-item">Release Date: {episode.date} </li>
                    </ul>
                    <p className="card-body">{episode.description}</p>
                </div>
            </div>
        </div>
    )
}