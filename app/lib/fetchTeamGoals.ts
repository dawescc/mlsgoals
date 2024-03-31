"use server";

import { fetchPlayerGoals } from "./fetchPlayerGoals";
import { fetchPlayerName } from "./fetchPlayerName";
import data from "@/draftedTeams.json";

export default async function fetchTeamGoals() {
	const DraftedTeams = data.DraftedTeams;
	const teamsData = await Promise.all(
		DraftedTeams.map(async (team: any) => {
			const playersData = await Promise.all(
				team.players.map(async (player: any) => {
					const name = await fetchPlayerName(player.id as string);
					const goals = await fetchPlayerGoals(player.id as string);
					return { id: player.id, name, goals };
				})
			);

			//Calculate total goals
			const totalGoals = playersData.reduce((total, player) => total + parseInt(player.goals), 0);

			//Returning team data
			return { id: team.id, owner: team.owner, totalGoals, players: playersData };
		})
	);
	return teamsData;
}
