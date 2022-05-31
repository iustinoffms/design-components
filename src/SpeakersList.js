import Speaker from "./Speaker";
import { data } from "./SpeakerData";
import { SpeakerFilterContext } from "./contexts/SpeakerFilterContext";
import { useContext } from "react";

import useRequestDelay, { REQUEST_STATUS } from "./hooks/useRequestDelay";

function SpeakersList() {
  const {
    data: spekersData,
    requestStatus,
    error,
    updatedSpeakerInfo,
  } = useRequestDelay(1500, data);
  const { searchName, eventYear } = useContext(SpeakerFilterContext);

  if (requestStatus === REQUEST_STATUS.FAILURE)
    return <div style={{ color: "red" }}>ERROR: {error}</div>;

  if (requestStatus === REQUEST_STATUS.LOADING) return <div>Loading...</div>;

  return (
    <div className="container speakers-list">
      <div className="row">
        {spekersData
          .filter((speaker) => {
            return (
              speaker.first.toLowerCase().includes(searchName) ||
              speaker.last.toLowerCase().includes(searchName)
            );
          })
          .filter((speaker) => {
            return speaker.sessions.find((ses) => ses.eventYear === eventYear);
          })

          .map((speaker) => (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              updatedSpeakerInfo={updatedSpeakerInfo}
            />
          ))}
      </div>
    </div>
  );
}

export default SpeakersList;
