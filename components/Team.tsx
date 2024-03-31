import Player from "@/components/Player";

export default async function Team({ players, owner }: any) {
	return (
		<div className='p-2 flex-col gap-2'>
			<h2 className='border-b-[0.5px] dark:border-white/15 py-2 mb-4 font-medium text-4xl'>{owner}</h2>
			{players.map((player: any) => (
				<Player
					key={player.id}
					id={player.id}
				/>
			))}
		</div>
	);
}
