import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

function useRequestDelay(delayTime = 1000, initialData = []) {
  const [data, setData] = useState(initialData);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

  useEffect(() => {
    async function delayFunc() {
      try {
        await delay(delayTime);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        // throw "An error has occured on loading the data";
        setData(data);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }
    delayFunc();
  }, []);

  function updatedSpeakerInfo(speakerUpdates, doneCallback) {
    const originalSpeakersData = [...data];
    const newUpdates = data.map((speaker) =>
      speaker.id === speakerUpdates.id ? speakerUpdates : speaker
    );

    async function delayFunction() {
      try {
        setData(newUpdates);
        await delay(delayTime);
        if (doneCallback) doneCallback();
      } catch (e) {
        console.log("error thrown inside delayFunction", error);
        if (doneCallback) doneCallback();
        setData(originalSpeakersData);
      }
    }
    delayFunction();
  }

  return { data, requestStatus, error, updatedSpeakerInfo };
}

export default useRequestDelay;
