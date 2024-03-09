"use client";

import React, { useState, useEffect } from "react";
import { fetchPlayerStats } from "./actions";
import { DraftedTeams } from "@/draftedTeams.json";

async function getTotalGoals(players) {
	let totalGoals = 0;
	for (const player of players) {
		const playerStats = await fetchPlayerStats(player.id);
		totalGoals += playerStats.goals;
	}
	return totalGoals;
}

const TeamsSummary = () => {
	const [teamGoals, setTeamGoals] = useState([]);

	useEffect(() => {
		const fetchGoals = async () => {
			const newTeamGoals = [];
			for (const team of DraftedTeams) {
				const goals = await getTotalGoals(team.players);
				newTeamGoals.push({ owner: team.owner, totalGoals: goals });
			}
			setTeamGoals(newTeamGoals);
		};

		fetchGoals();
	}, []);

	return (
		<div>
			{teamGoals.map((item) => (
				<div key={item.owner}>
					<strong>Owner:</strong> {item.owner},<strong> Total Goals:</strong> {item.totalGoals}
				</div>
			))}
		</div>
	);
};

export default TeamsSummary;
