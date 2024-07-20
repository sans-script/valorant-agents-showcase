import { useEffect, useState } from "react";
import { fetchAgents } from "@/lib/fetchAgents";

const useAgents = () => {
  const [agents, setAgents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAgents = async () => {
      try {
        const agentsData = await fetchAgents();
        setAgents(agentsData);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch agents");
        setLoading(false);
      }
    };

    loadAgents();
  }, []);

  return { agents, loading, error };
};

export default useAgents;
