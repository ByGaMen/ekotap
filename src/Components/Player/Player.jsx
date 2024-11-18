import './Player.scss'
import videoReplacement from '../../assets/Player/videoReplacement.png'
import playButton from '../../assets/Player/playButton.svg'
function Player() {
    return (
        <section className="player">
            <h1>НОВЫЕ <span>ВОЗМОЖНОСТИ</span> ВАШЕЙ КУХНИ</h1>
            <div className="video">
                <img
                    src={videoReplacement}
                    alt=""
                    className='video-player'
                />
                <img
                    src={playButton}
                    alt=""
                    className='video-player__play-button'

                />
            </div>
        </section>

    )
}
export default Player