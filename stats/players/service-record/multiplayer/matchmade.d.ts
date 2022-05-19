export type StatsPlayersServiceRecordMultiplayerMatchmadeResponse = {
	data: {
		core: {
			summary: {
				kills: number;
				deaths: number;
				assists: number;
				betrayals: number;
				suicides: number;
				spawns: number;
				vehicles: {
					destroys: number;
					hijacks: number;
				};
				medals: number;
			};
			damage: {
				taken: number;
				dealt: number;
				average: number;
			};
			shots: {
				fired: number;
				landed: number;
				missed: number;
				accuracy: number;
			};
			rounds: {
				won: number;
				lost: number;
				tied: number;
			};
			breakdowns: {
				kills: {
					melee: number;
					grenades: number;
					headshots: number;
					power_weapons: number;
					assassinations: number;
					vehicles: {
						splatters: number;
					};
					miscellaneous: {
						repulsor: number;
						fusion_coils: number;
					};
				};
				assists: {
					emp: number;
					driver: number;
					callouts: number;
				};
				vehicles: {
					destroys: Array<{
						value: string;
						count: number;
					}>;
					hijacks: Array<{
						value: string;
						count: number;
					}>;
				};
				medals: Array<{
					id: number;
					count: number;
				}>;
			};
			kda: number;
			kdr: number;
			scores: {
				personal: number;
				points: number;
			};
		};
		modes: Record<string, Record<string, any> | null>;
		matches: {
			outcomes: {
				wins: number;
				draws: number;
				losses: number;
				left: number;
			};
			total: number;
			win_rate: number;
		};
		time_played: {
			seconds: number;
			human: string;
		};
	};
	additional: {
		parameters: {
			gamertag: string;
			season: number | null;
			playlist_id: string | null;
			category_id: string | null;
		};
	};
};
