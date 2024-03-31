"use server";

export async function fetchPlayerGoals(id: string) {
	const res = await fetch(
		`http://sports.core.api.espn.com/v2/sports/soccer/leagues/usa.1/seasons/2024/types/0/athletes/${id}/statistics/0?lang=en&region=us`,
		{
			headers: {
				"Cache-Control": "no-cache",
			},
		}
	);
	if (!res.ok) {
		return 0;
	}
	const data = await res.json();
	const goals =
		data.splits.categories.find((category: any) => category.name === "offensive")?.stats.find((stat: any) => stat.name === "totalGoals")?.displayValue || 0; // Default goals to zero if it's undefined
	return goals;
}
