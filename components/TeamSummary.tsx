import { fetchPlayerStats } from "./actions";
import data from "@/draftedTeams.json";
const DraftedTeams = data.DraftedTeams;

const TeamsGoals = async () => {
	let teamGoals = [];

	const newTeamGoals = await Promise.all(
		DraftedTeams.map(async (team) => {
			let totalGoals = 0;

			await Promise.all(
				team.players.map(async (player) => {
					const goals = await fetchPlayerStats({ id: player.id });
					totalGoals += goals;
				})
			);

			return { owner: team.owner, totalGoals };
		})
	);

	newTeamGoals.sort((a, b) => b.totalGoals - a.totalGoals);
	teamGoals = newTeamGoals;

	return (
		<div>
			{teamGoals.map((item: any) => (
				<div
					key={item.owner}
					className='border-b-[0.5px] border-black/5 dark:border-white/15'>
					<div className='w-full flex items-center justify-between py-2'>
						<span>{item.owner}</span>
						<span className='opacity-[55%]'>{item.totalGoals}</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default TeamsGoals;
