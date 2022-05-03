export type StatsPlayersMMRResponse = {
	data: {
		value: string | null;
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
