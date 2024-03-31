"use client";

export default function Leaderboard({ teams, className }: any) {
	const sortedTeams = [...teams].sort((a, b) => b.totalGoals - a.totalGoals);
	return (
		<div className={`${className} px-1 mb-20 lg:mb-0`}>
			<h2>
				<a href='/'>Leaderboard</a>
			</h2>
			<div className='grid grid-cols-1 gap-3 pt-5 px-2 [&:first-child]:*:text-[#FFDF00] [&:last-child]:*:text-[#FF3131]'>
				{sortedTeams.map((team, index) => (
					<a
						href={`#${team.owner}`}
						key={team.id}
						className='flex justify-between'>
						<h3>{team.owner}</h3>
						<span className='select-none'>&nbsp;</span>
						<span>{team.totalGoals}</span>
					</a>
				))}
			</div>
		</div>
	);
}
