
function GameCard({ title, description, imageUrl, imageAlt, playUrl, buttonText }) {
    return (
        <div className="game-card">
            <img src={imageUrl} alt={imageAlt} className="game-card-image" />
            <div className="game-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <a
                    href={playUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="game-card-button"
                >
                    {buttonText}
                </a>
            </div>
        </div>
    );
}

export default GameCard;