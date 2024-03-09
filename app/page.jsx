import { Suspense } from "react";
import Team from "@/components/Team";
import { DraftedTeams } from "@/draftedTeams.json";
import TeamsSummary from "@/components/TeamSummary";

export default function Index() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className='flex flex-col gap-10 mx-auto max-w-xl pt-20 pb-20'>
				<TeamsSummary />
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
