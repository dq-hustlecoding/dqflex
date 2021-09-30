import React from 'react';
import './MovieModal.css';
import CancelIcon from '@material-ui/icons/Cancel';
import Row from '../Row';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ReactStars from 'react-stars';

const MovieModal = ({poster_path,movieId,title,genres,url,rating_avg,rating_count,setModalVisibility, setMyRating}) => {

    return (
        <div className="presentation" role="presentation">
            <div className="wrapper-modal">
                <div className="modal">
                    <span onClick={()=>setModalVisibility(false)}className="modal-close"><CancelIcon/></span>
                    <div className="modal__header">
                        <img
                            className="modal__poster-img"
                            src={`${poster_path}`}
                            alt={`${title}`}
                        />
                        <div className="modal__content">
                            <p className="modal__details"><span className="modal__user-perc">Genre: </span> {genres.replaceAll('|', ' | ')}</p>
                            <h4 className="modal__title">{title}</h4>
                            <p className="modal__overview">Vote Average: {rating_avg.toFixed(2)}</p>
                            <p className="modal__overview">Vote Count: {rating_count}</p>
                            <div className="modal__header">
                                <button className="banner__button play" onClick={() => {window.open(url)}}><PlayArrowIcon />Detail</button>
                                <ReactStars
                                    count={5}
                                    onChange={setMyRating}
                                    size={24}
                                    color2={'#ffd700'} />
                            </div>
                        </div>
                    </div>
                    <Row
                        title="You may also like..."
                        id={movieId}
                        fetchUrl={`https://hustlecoding.link/item-based/${movieId}`}
                    />
                </div>
            </div>
        </div>
    )
}

export default MovieModal
