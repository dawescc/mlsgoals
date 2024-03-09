"use server";

export async function fetchPlayerInfo({ id }: any) {
	const res = await fetch(`http://sports.core.api.espn.com/v2/sports/soccer/leagues/usa.1/seasons/2024/athletes/${id}?lang=en&region=us`);
	if (!res.ok) {
		const data = [] as any;
		return data;
	}
	const data = await res.json();
	return data;
}

export async function fetchPlayerStats({ id }: any) {
	const res = await fetch(
		`http://sports.core.api.espn.com/v2/sports/soccer/leagues/usa.1/seasons/2024/types/0/athletes/${id}/statistics/0?lang=en&region=us`
	);
	if (!res.ok) {
		return 0; // Return zero if response is not OK
	}
	const data = await res.json();
	const goals =
		data.splits.categories.find((category: any) => category.name === "offensive")?.stats.find((stat: any) => stat.name === "totalGoals")?.value || 0; // Default goals to zero if it's undefined
	return goals;
}
