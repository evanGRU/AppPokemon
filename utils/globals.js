import {useState} from "react";

export const globals = {
    homeTabName: "HomeTab",
    searchTabName: "SearchTab",
    teamTabName: "TeamTab",
    paramsTabName: "SettingsTab",
    homeStackName: "HomeStack",
    homeDetailStackName: "HomeDetailsStack",
    teamStackName: "TeamStack",
    teamDetailStackName: "TeamDetailsStack",
    searchStackName: "SearchStack",
    searchDetailStackName: "SearchDetailsStack",
    paramsStackName: "SettingsStack",
    paramsCameraStackName: "SettingsCameraStack",
}

export const teamKeys = ['TEAM1', 'TEAM2', 'TEAM3', 'TEAM4', 'TEAM5', 'TEAM6'];

export const updateManager = () => {
    const [hasUpdate, setHasUpdate] = useState(false);

    const updateState = () => {
        setHasUpdate(hasUpdate!==true);
    }

    return {
        hasUpdate,
        updateState
    }
}