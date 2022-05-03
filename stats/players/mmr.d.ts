export type StatsPlayersMMRResponse = {
	data: {
		value: number | null;
		match: {
			id: string | null;
		};
	};
	additional: {
		parameters: {
			gamertag: string;
		};
	};
};
