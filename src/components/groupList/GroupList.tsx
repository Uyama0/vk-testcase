import { useState } from "react";

import useFetch from "../../hooks/useFetch";

const GroupList = () => {
  const [activePanel, setActivePanel] = useState("list");
  const { groups, loading, error } = useFetch("http://localhost:3000/groups");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div>
        <h1>Groups:</h1>
        <ul>
          {groups!.map((group) => (
            <li key={group.id}>{group.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroupList;
