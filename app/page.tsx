import TeamSummaries from "@/components/TeamSummaries";
import Leaderboard from "@/components/Leaderboard";
import fetchTeamGoals from "./lib/fetchTeamGoals";

export default async function Index() {
	const data = await fetchTeamGoals();
	return (
		<div className='relative flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden'>
			<Leaderboard
				className='flex-[1_1_50%] sticky'
				teams={data}
			/>
			<TeamSummaries
				className='flex-[1_1_100%]'
				teams={data}
			/>
		</div>
	);
}
