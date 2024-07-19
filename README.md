# Valorant Agent Slider in React

## Overview

This repo features a React component designed to replicate the agent collection screen from the popular game *Valorant*. It includes a slider effect and pagination to navigate through a list of agents. The component showcases various aspects of React's functionality, such as state management, side effects, and event handling.

## Components

### `AgentSlider`

The `AgentSlider` component is the main feature of this project. It retrieves agent data from an API, manages the state of the currently selected agent, and handles navigation through the agents.

#### Key Features:
- **Data Fetching:** Uses the `fetchAgents` function to retrieve agent data from an external API (`https://valorant-api.com/v1/agents?isPlayableCharacter=true`).

- **State Management:** Utilizes React's `useState` for managing the list of agents, the currently selected agent, and the starting index for pagination.

- **Side Effects:** Uses `useEffect` to load agents when the component mounts and update the displayed agents when the `startIndex` changes.

- **Event Handling:** Implements handlers for navigating through agents using buttons and mouse wheel events.

### `Slider`

The `Slider` component is a wrapper around the `AgentSlider` component. It centers the `AgentSlider` component within its container, ensuring proper alignment.

## React Concepts Applied

- **State Management:** The `useState` hook is used to manage various pieces of state, including the list of agents (`agents`), the index of the currently selected agent (`selectedAgentIndex`), and the start index for pagination (`startIndex`).

- **Side Effects:** The `useEffect` hook handles data fetching and updates to the component's state based on changes in dependencies (e.g., `startIndex` and `agents`).

- **Event Handling:** Event listeners are added to handle user interactions, such as clicking buttons to navigate through agents and using the mouse wheel for scrolling through the list.

- **Conditional Rendering:** The component conditionally renders different UI elements based on the state, such as displaying a loading message while data is being fetched or showing agent details once data is available.

- **Dynamic Styling:** Inline styles and Tailwind CSS classes are used to dynamically style components based on the current state, such as applying a gradient background to match the selected agent's colors.

## How It Works

1. **Data Fetching:** On component mount, the `fetchAgents` function is called to fetch the list of agents from the API.
2. **Pagination and Selection:** The list of agents is sliced and concatenated to show a subset of agents in a circular manner. 

3. **Navigation:** Users can navigate through the agents using the Prev and Next buttons or by scrolling the mouse wheel. This updates the `startIndex`, causing the component to re-render with the new set of agents.

4. **Rendering:** The component renders the selected agent's details, including their portrait, abilities, and background. It also displays navigation controls and a gradient background based on the selected agent's properties.

This component offers a rich, interactive UI experience that mimics the look and feel of the Valorant agent collection screen, utilizing various React features to manage and display data dynamically.