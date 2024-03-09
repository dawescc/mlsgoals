import { Suspense } from "react";
import Team from "@/components/Team";
import TeamsGoals from "@/components/TeamSummary";
import data from "@/draftedTeams.json";
const DraftedTeams = data.DraftedTeams;

export default function Index() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className='flex flex-col gap-10 mx-auto max-w-xl pt-20 pb-20'>
				<TeamsGoals />
				{DraftedTeams.map((team) => (
					<Team
						players={team.players}
						owner={team.owner}
						key={team.id}
					/>
				))}
			</div>
		</Suspense>
	);
}
