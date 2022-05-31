import { createContext } from "react";

const SpeakerContext = createContext();

function SpeakerProvider({ children, speaker, updatedSpeakerInfo }) {
  return (
    <SpeakerContext.Provider value={{ speaker, updatedSpeakerInfo }}>
      {children}
    </SpeakerContext.Provider>
  );
}

export { SpeakerContext, SpeakerProvider };
