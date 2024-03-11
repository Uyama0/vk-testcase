import { useState } from "react";

import useFetch from "../../hooks/useFetch";

const GroupList = () => {
  const [activePanel, setActivePanel] = useState("list");
  const { groups, loading, error } = useFetch("http://localhost:3000/groups");

  console.log(groups);

  return <div></div>;
};

export default GroupList;
