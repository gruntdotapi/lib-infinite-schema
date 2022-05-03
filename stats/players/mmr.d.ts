export type StatsPlayersMMRResponse = {
	data: {
		value: string | number;
		match: {
			id: string | number;
		};
	};
	additional: {
		parameters: {
			gamertag: string;
		};
	};
};
