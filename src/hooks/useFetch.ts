import { useEffect, useState } from "react";
import { GetGroupsResponse, Group } from "../types/group";

const useFetch = (url: string) => {
  const [groups, setGroups] = useState<Group[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await fetch(url);
        const result: GetGroupsResponse = await response.json();

        console.log(result.result);

        if (result.result === 1) {
          setGroups(result.data || []);
        } else {
          setError("Failed to fetch data");
        }
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();

    console.log(groups);
  }, [url]);

  return { groups, loading, error };
};

export default useFetch;
