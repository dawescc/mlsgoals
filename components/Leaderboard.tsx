"use client";

export default function Leaderboard({ teams, className }: any) {
	const sortedTeams = [...teams].sort((a, b) => b.totalGoals - a.totalGoals);
	return (
		<div className={`${className} px-1 mb-20 lg:mb-0`}>
			<h2>Leaderboard</h2>
			<div className='grid grid-cols-1 pt-5 px-2 [&:first-child]:*:text-[#FFDF00]'>
				{sortedTeams.map((team, index) => (
					<a
						href={`#${team.owner}`}
						key={team.id}
						className='flex justify-between'>
						<h3>{team.owner}</h3>
						<span>{team.totalGoals}</span>
					</a>
				))}
			</div>
		</div>
	);
}
