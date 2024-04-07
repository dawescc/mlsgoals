"use client";

import Link from "next/link";

export default function Leaderboard({ teams, className }: any) {
	const sortedTeams = [...teams].sort((a, b) => b.totalGoals - a.totalGoals);
	return (
		<div
			id='teams_leaderboard'
			className={`${className} px-1 mb-20 lg:mb-0`}>
			<h2>
				<a href='/'>Leaderboard</a>
			</h2>
			<div
				className='grid grid-cols-1 gap-3 pt-5'
				id='leaderboard'>
				{sortedTeams.map((team, index) => (
					<Link
						href={`#${team.owner}`}
						key={team.id}
						className={`flex justify-between items-baseline ${team.owner} px-2`}>
						<h3>{team.owner}</h3>
						<span className='select-none'>&nbsp;</span>
						<span>{team.totalGoals}</span>
					</Link>
				))}
			</div>
		</div>
	);
}
