import { useState } from "react";

function useSpeakerFilter(startingShowSessions, startingYear) {
  const [showSessions, setShowSessions] = useState(startingShowSessions);
  const [eventYear, setEventYear] = useState(startingYear);
  const [searchName, setSearchName] = useState("");

  const EVENT_YEARS = [
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
  ];
  return {
    showSessions,
    setShowSessions,
    eventYear,
    setEventYear,
    searchName,
    setSearchName,
    EVENT_YEARS,
  };
}

export default useSpeakerFilter;
