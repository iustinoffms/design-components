import Speaker from "./Speaker";
import { data } from "./SpeakerData";

import useRequestDelay, { REQUEST_STATUS } from "./hooks/useRequestDelay";

function SpeakersList({ showSessions }) {
  const {
    data: spekersData,
    requestStatus,
    error,
    updatedSpeakerInfo,
  } = useRequestDelay(1500, data);

  if (requestStatus === REQUEST_STATUS.FAILURE)
    return <div style={{ color: "red" }}>ERROR: {error}</div>;

  if (requestStatus === REQUEST_STATUS.LOADING) return <div>Loading...</div>;

  return (
    <div className="container speakers-list">
      <div className="row">
        {spekersData.map((speaker) => (
          <Speaker
            key={speaker.id}
            showSessions={showSessions}
            {...speaker}
            onFavoriteToggle={(doneCallback) =>
              updatedSpeakerInfo(
                { ...speaker, favorite: !speaker.favorite },
                doneCallback
              )
            }
          />
        ))}
      </div>
    </div>
  );
}

export default SpeakersList;
