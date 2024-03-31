"use client";

import Footer from "./Footer";

export default function TeamSummaries({ teams, className }: any) {
	return (
		<div className={`relative lg:overflow-auto ${className}`}>
			<h2 className='sticky lg:relative top-0 bg-colors px-1'>Teams</h2>
			<div className='flex flex-col gap-10 pt-5 px-4 pb-5'>
				{teams.map((team: any) => (
					<div
						key={team.id}
						id={team.owner}>
						<h3>{team.owner}</h3>
						<div className='grid grid-cols-1'>
							{team.players.map((player: any) => (
								<div
									key={player.id}
									className='flex justify-between items-end'>
									<span>{player.name}</span>
									<span>{player.goals}</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
}
