import Image from "next/image";
import React, { useState, useEffect } from "react";

const loader = () => {
	return (
		<svg
			className='animate-spin h-8 w-8 text-black dark:text-white'
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'>
			<circle
				className='opacity-25'
				cx='12'
				cy='12'
				r='10'
				stroke='currentColor'
				strokeWidth='4'></circle>
			<path
				className='opacity-75'
				fill='currentColor'
				d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
		</svg>
	);
};

type Extras = {
	nation: string | null;
	club: string | null;
};

type PlayerExtrasProps = {
	id: string;
};

const fetchExtras = async (id: string): Promise<Extras> => {
	let extras: Extras = { nation: null, club: null };

	try {
		const res = await fetch(`https://sports.core.api.espn.com/v2/sports/soccer/leagues/usa.1/seasons/2024/athletes/${id}?lang=en&region=us`);
		if (!res.ok) {
			throw new Error(`Failed to fetch, status: ${res.status}`);
		}
		const data = await res.json();

		extras.nation = data.flag.href;

		const extractedID = data.team.$ref.match(/teams\/(\d+)/);
		if (extractedID) {
			const team = extractedID[1];
			extras.club = `https://a.espncdn.com/i/teamlogos/soccer/500-dark/${team}.png`;
		}
	} catch (error) {
		console.error("Error fetching player extras:", error);
	}

	return extras;
};

const PlayerExtras: React.FC<PlayerExtrasProps> = ({ id }) => {
	const [extras, setExtras] = useState<Extras>({ nation: null, club: null });
	const [loadingNation, setLoadingNation] = useState(true);
	const [loadingClub, setLoadingClub] = useState(true);

	useEffect(() => {
		fetchExtras(id).then((data) => {
			setExtras(data);
			setLoadingNation(false);
			setLoadingClub(false);
		});
	}, [id]);

	return (
		<div className='flex gap-2 max-h-full py-1 px-2'>
			{loadingNation ? (
				<div className='flex justify-center items-center h-8 w-auto'>{loader()}</div>
			) : (
				extras.nation && (
					<Image
						src={extras.nation}
						width={100}
						height={100}
						alt='National Flag'
						className='h-8 w-auto'
						onLoad={() => setLoadingNation(false)}
					/>
				)
			)}

			{loadingClub ? (
				<div className='flex justify-center items-center h-8 w-auto'>{loader()}</div>
			) : (
				extras.club && (
					<Image
						src={extras.club}
						width={100}
						height={100}
						alt='Club Logo'
						className='h-8 w-auto'
						onLoad={() => setLoadingClub(false)}
					/>
				)
			)}
		</div>
	);
};

export default PlayerExtras;
