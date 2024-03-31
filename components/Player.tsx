import { fetchPlayerInfo, fetchPlayerStats } from "./actions";

export default async function Player({ id }: any) {
	const info = await fetchPlayerInfo({ id });
	const goals = await fetchPlayerStats({ id });

	let player = {
		info: info,
		goals: goals,
	};

	return (
		<div className='flex items-center justify-between py-1 text-[1.5rem]/[1.25]'>
			<p>{player.info.fullName}</p>
			<p>{player.goals}</p>
		</div>
	);
}
