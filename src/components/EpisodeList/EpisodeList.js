import React from 'react';
import episodeList from '../../data/episode-list';
import Episode from '../Episode/Episode';

export default function EpisodeList() {
    return ( 
        <div className="row">
            { episodeList.map( (episode) => < Episode key={episode.overallOrder} episode={episode} />)}
        </div>
    )
}