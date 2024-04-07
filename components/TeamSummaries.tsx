"use client";

import Link from "next/link";
import Footer from "./Footer";
import PlayerExtras from "./PlayerExtras";

export default function TeamSummaries({ teams, className }: any) {
	return (
		<div className={`relative scroll-smooth lg:overflow-auto ${className}`}>
			<h2 className='sticky lg:relative top-0 bg-colors px-1'>
				<a href='/'>Teams</a>
			</h2>
			<div className='flex flex-col gap-10 pt-5 px-4 pb-5'>
				{teams.map((team: any) => (
					<div
						key={team.id}
						id={team.owner}>
						<h3>{team.owner}</h3>
						<div className='grid grid-cols-1 gap-3'>
							{team.players.map((player: any) => (
								<Link
									key={player.id}
									href={`https://www.espn.com/soccer/player/_/id/${player.id as string}`}
									className='flex justify-between items-end player-link'>
									<span className='flex items-center'>
										<PlayerExtras id={player.id} />
										{player.name}
									</span>
									<span className='select-none'>&nbsp;</span>
									<span>{player.goals}</span>
								</Link>
							))}
						</div>
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
}
