"use server";

export async function fetchPlayerName(id: string) {
	const res = await fetch(`http://sports.core.api.espn.com/v2/sports/soccer/leagues/usa.1/seasons/2024/athletes/${id}?lang=en&region=us`, {
		cache: "no-store",
	});
	if (!res.ok) {
		const data = [] as any;
		return data;
	}
	const data = await res.json();
	const name = data.displayName;
	return name;
}
