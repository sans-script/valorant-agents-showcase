interface Agent {
  uuid: string;
  displayIcon: string;
  displayName: string;
  fullPortrait: string;
  backgroundGradientColors: string[];
  background: string;

  role: {
    displayName: string;
    description: string
    displayIcon: string;
  }

  abilities: string[]
}

export async function fetchAgents(): Promise<Agent[]> {
  const res = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
  const data = await res.json();
  return data.data;
}
