import React from "react";
import SpeakersList from "./SpeakersList";
import Toolbar from "./Toolbar";
import { useState } from "react";

function SpeakersListFunctionalities() {
  const [showSessions, setShowSessions] = useState(true);
  return (
    <>
      <Toolbar showSessions={showSessions} setShowSessions={setShowSessions} />
      <SpeakersList showSessions={showSessions} />
    </>
  );
}

export default SpeakersListFunctionalities;
