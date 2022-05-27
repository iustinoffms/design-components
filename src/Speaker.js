import { useState } from "react";

function Speaker({
  id,
  first,
  last,
  bio,
  company,
  twitterHandle,
  favorite,
  sessions,
  showSessions,
  onFavoriteToggle,
}) {
  return (
    <div
      key={id}
      className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12 "
    >
      <div className="card card-height p-4 mt-4 ">
        <SpeakerImage id={id} last={last} firs={first} />
        <SpeakerInfo
          first={first}
          last={last}
          bio={bio}
          company={company}
          favorite={favorite}
          twitterHandle={twitterHandle}
          onFavoriteToggle={onFavoriteToggle}
        />
      </div>
      {showSessions === true ? <Sessions {...sessions[0]} /> : null}
    </div>
  );
}

function SpeakerImage(props) {
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <img
        className="contain-fit"
        src={`/images/speaker-${props.id}.jpg`}
        width="300"
        height="250"
        alt={`${props.first} ${props.last}`}
      />
    </div>
  );
}

function Favourite({ favorite, onFavoriteToggle }) {
  const [inTransition, setInTransition] = useState(false);
  function doneCallback() {
    console.log(
      `in Favourite: doneCallback       ${new Date().getMilliseconds()}`,
      setInTransition(false)
    );
  }
  return (
    <div className="action padB1">
      <span
        onClick={function () {
          setInTransition(true);
          return onFavoriteToggle(doneCallback);
        }}
      >
        <i
          className={favorite === true ? "fa fa-star orange" : "fa fa-star "}
        ></i>{" "}
        Favourite{" "}
        {inTransition === true ? (
          <span className="fas fa-circle-notch fa-spin"></span>
        ) : null}
      </span>
    </div>
  );
}

function SpeakerInfo({
  first,
  last,
  bio,
  company,
  twitterHandle,
  favorite,
  onFavoriteToggle,
}) {
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <Favourite favorite={favorite} onFavoriteToggle={onFavoriteToggle} />
      <div>
        <p className="card-description">{bio}</p>
        <div className="social d-flex flex-row mt-4">
          <div className="company">
            <h5>Company</h5>
            <h6>{company} </h6>
          </div>
          <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle} </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sessions(props) {
  const { title, room } = props;
  return (
    <div className="sessionBox card h-250">
      <Session title={title} room={room.name} />
    </div>
  );
}

function Session({ title, room }) {
  return (
    <span className="session w-100">
      {title}
      <strong>ROOM: {room}</strong>
    </span>
  );
}
export default Speaker;
