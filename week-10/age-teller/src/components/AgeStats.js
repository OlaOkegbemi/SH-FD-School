function calcTimeSince(props) {
    const currentTime = new Date().getTime();
    const dobTime = new Date(props.dob).getTime();

    const difference = currentTime - dobTime; // in milliseconds

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 31);
    const years = Math.floor(months / 12);

    return `${years} years`;

    // 1000 milliseconds = 1 second
    // 5000 milliseconds = 5 seconds
    // 87600 seconds = 1 day
    // 7 days = 1 week
    // 30 days = 1 month
    // 365 days = 1 year
}

function AgeStats (props) {
    return (
        <div>
            <h1> This is your age: { calcTimeSince(props) } </h1>

            <iframe src="https://giphy.com/embed/YTbZzCkRQCEJa" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen title="Celebration Gif"></iframe><p><a href="https://giphy.com/gifs/party-excited-birthday-YTbZzCkRQCEJa">via GIPHY</a></p>
        </div>
    )
}

export default AgeStats;