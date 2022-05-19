export type StatsPlayersMMRResponse = {
	data: {
		value: number | null;
		match: { id: string } | null;
		playlist: { id: string; name: string } | null;
	};
	additional: {
		parameters: {
			gamertag: string;
			kind: string;
		};
	};
};
