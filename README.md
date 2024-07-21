# README

## AgentSlider Component

### Overview

This Next.js website is designed to replicate the agent collection screen from the game Valorant. It features a slider that displays agents with their respective abilities and information, providing a visually engaging and immersive user experience.

![screencapture-valorant-agents-showcase-vercel-app-2024-07-21-11_34_27](https://github.com/user-attachments/assets/7165e340-d6c8-4fca-8ff7-0c01fdfa9089)

### Features

- **Agent Collection Display**: Showcases a list of agents, complete with icons, abilities, and detailed information.
- **Pagination and Navigation**: Users can navigate through the agents using buttons or mouse wheel, with a seamless circular pagination.
- **Dynamic Styling**: Background and visual effects adapt based on the currently selected agent.

### React Concepts Applied

#### 1. **State Management**

The `useState` hook is used to manage the component's state:
- `agents`: Contains the list of fetched agents.
- `selectedAgentIndex`: Tracks the currently selected agent's index.
- `startIndex`: Manages the starting index for the visible subset of agents.

#### 2. **Side Effects**

The `useEffect` hook handles side effects:
- **Data Fetching**: Fetches agent data from an external API when the component mounts.
- **Pagination Update**: Updates the visible subset of agents and the `selectedAgentIndex` based on the `startIndex` and the total list of agents.

#### 3. **Event Handling**

- **Mouse Wheel**: Enables navigation through the agent list using the mouse wheel.
- **Button Clicks**: Allows navigation through "Prev" and "Next" buttons.

#### 4. **Dynamic Styling**

- **Background Gradient**: The background is dynamically set based on the selected agent's gradient colors using inline styles.
- **Agent Highlighting**: The border and opacity of agent icons are adjusted based on whether they are currently selected.

### 5. **Component Composition**

- **AgentSlider Component**: Manages the slider's display logic, including agent selection and pagination.
- **AgentInfo Component**: Displays detailed information about the selected agent.
- **SelectedAgent Component**: Showcases the currently selected agent prominently.
- **Hooks**: Custom hooks (`useAgents`, `useAgentNavigation`, `useMouseWheel`) manage data fetching, navigation logic, and mouse wheel events.

### Pagination and Selection

The `AgentSlider` component implements circular pagination to display a subset of agents, creating a continuous scrolling effect:

1. **Slicing and Concatenating**: The list of agents is sliced to show a fixed number of agents (e.g., 13). If the end of the list is reached, it wraps around to the beginning.
2. **Updating Selection**: The `selectedAgentIndex` is updated to reflect the center of the visible subset of agents, ensuring that the currently selected agent is always centered.

### Conclusion

The `AgentSlider` component combines several advanced React concepts to create a dynamic and engaging user interface. By leveraging state management, side effects, event handling, dynamic styling, and custom hooks, the component provides a seamless and immersive experience for viewing and interacting with agents of Valorant.