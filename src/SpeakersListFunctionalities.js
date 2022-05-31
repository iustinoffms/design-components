import React from "react";
import SpeakersList from "./SpeakersList";
import Toolbar from "./Toolbar";
import { SpeakerFilterProvider } from "./contexts/SpeakerFilterContext";

function SpeakersListFunctionalities() {
  return (
    <SpeakerFilterProvider startingShowSessions={false}>
      <Toolbar />
      <SpeakersList />
    </SpeakerFilterProvider>
  );
}

export default SpeakersListFunctionalities;
