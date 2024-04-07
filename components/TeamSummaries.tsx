"use client";

import Link from "next/link";
import Footer from "./Footer";
import PlayerExtras from "./PlayerExtras";

export default function TeamSummaries({ teams, className }: any) {
	return (
		<div className={`relative scroll-smooth lg:overflow-auto ${className}`}>
			<h2 className='sticky lg:relative top-0 z-[2] bg-colors px-1'>
				<a href='/'>Teams</a>
			</h2>
			<div className='flex flex-col gap-10 pt-5 px-2 pb-5'>
				{teams.map((team: any) => (
					<div
						key={team.id}
						id={team.owner}>
						<h3 className='mb-2'>{team.owner}</h3>
						<div className='grid grid-cols-1 gap-3'>
							{team.players.map((player: any) => (
								<Link
									key={player.id}
									href={`https://www.espn.com/soccer/player/_/id/${player.id as string}`}
									className='grid grid-cols-[2ch_1fr_2ch] player-link px-2'>
									<PlayerExtras id={player.id} />
									<span className='flex items-end px-[0.25ch]'>{player.name}</span>
									<div className='flex items-end justify-end'>{player.goals}</div>
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
