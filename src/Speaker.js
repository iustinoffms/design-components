import { useState } from "react";
import { useContext } from "react";
import { SpeakerFilterContext } from "./contexts/SpeakerFilterContext";

import { SpeakerProvider, SpeakerContext } from "./contexts/SpeakerContext";

function Speaker({ speaker, updatedSpeakerInfo }) {
  const { id, first, last, sessions } = speaker;
  const { showSessions, eventYear } = useContext(SpeakerFilterContext);
  return (
    <SpeakerProvider speaker={speaker} updatedSpeakerInfo={updatedSpeakerInfo}>
      <div
        key={id}
        className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12 "
      >
        <div className="card card-height p-4 mt-4 ">
          <SpeakerImage />
          <SpeakerInfo />
        </div>
        {showSessions === true
          ? sessions
              .filter((session) => session.eventYear === eventYear)
              .map((session) => (
                <div className="session w-100" key={session.id}>
                  <Sessions {...session} />
                </div>
              ))
          : null}
      </div>
    </SpeakerProvider>
  );
}

function SpeakerImage() {
  const speakerObject = useContext(SpeakerContext);
  const { speaker } = speakerObject;
  const { id, last, first } = speaker;
  return (
    <div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
      <img
        className="contain-fit"
        src={`/images/speaker-${id}.jpg`}
        width="300"
        height="250"
        alt={`${first} ${last}`}
      />
    </div>
  );
}

function Favourite() {
  const { speaker, updatedSpeakerInfo } = useContext(SpeakerContext);
  const [inTransition, setInTransition] = useState(false);
  function doneCallback() {
    console.log(
      `in Favourite: doneCallback${new Date().getMilliseconds()}`,
      setInTransition(false)
    );
  }
  return (
    <div className="action padB1">
      <span
        onClick={function () {
          setInTransition(true);
          updatedSpeakerInfo(
            { ...speaker, favorite: !speaker.favorite },
            doneCallback
          );
        }}
      >
        <i
          className={
            speaker.favorite === true ? "fa fa-star orange" : "fa fa-star "
          }
        ></i>{" "}
        Favourite{" "}
        {inTransition === true ? (
          <span className="fas fa-circle-notch fa-spin"></span>
        ) : null}
      </span>
    </div>
  );
}

function SpeakerInfo() {
  const { speaker } = useContext(SpeakerContext);
  const { first, last, bio, company, twitterHandle, favorite } = speaker;
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>
      <Favourite />
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

function Sessions({ title, room }) {
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
