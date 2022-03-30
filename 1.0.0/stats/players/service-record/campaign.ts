export type StatsPlayersServiceRecordCampaignResponse = {
	data: {
		skulls: number;
		fob_secured: number;
		spartan_cores: number;
		missions_completed: number;
		propaganda_towers_destroyed: number;
		audio_logs: {
			unsc: number;
			banished: number;
			spartans: number;
		};
		difficulty: {
			highest_completed:
				| 'easy'
				| 'normal'
				| 'heroic'
				| 'legendary'
				| 'none';
			highest_completed_image_url: string;
			laso_completed: boolean;
		};
	};
	additional: {
		parameters: {
			gamertag: string;
		};
	};
};
