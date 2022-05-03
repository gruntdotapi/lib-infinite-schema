export type StatsPlayersMatchesResponse = {
	data: {
		matches: Array<{
			id: string;
			details: {
				gamevariant: {
					name: string;
					asset: {
						id: string;
						version: string;
						thumbnail_url: string;
					};
					properties: {
						category_id: number;
					};
				};
				map: {
					name: string;
					asset: {
						id: string;
						version: string;
						thumbnail_url: string;
					};
					properties: {
						level_id: string;
					};
				};
				playlist: {
					name: string;
					asset: {
						id: string;
						version: string;
						thumbnail_url: string;
					};
					properties: {
						queue: 'open' | 'solo-duo' | null;
						input: 'controller' | 'mnk' | 'crossplay' | null;
						ranked: boolean;
					};
				};
			};
			teams: {
				enabled: boolean;
				scoring: boolean;
			};
			player: {
				team: {
					id: number;
					name: string;
				};
				stats: {
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
						};
						shots: {
							fired: number;
							landed: number;
							missed: number;
							accuracy: number;
						};
						kda: number;
						kdr: number;
						average_life_duration: {
							seconds: number;
							human: string;
						};
					};
				};
				rank: number;
				outcome: 'won' | 'left' | 'loss' | 'unknown';
				progression: null | {
					csr: {
						pre_match: {
							value: number;
							tier: string;
							sub_tier: number;
							initial_measurement_matches: number;
							measurement_matches_remaining: number;
						};
						post_match: {
							value: number;
							tier: string;
							sub_tier: number;
							initial_measurement_matches: number;
							measurement_matches_remaining: number;
						};
					};
				};
			};
			experience: 'arena' | 'btb' | 'pve-bots' | 'featured' | 'custom';
			type: 'matchmaking' | 'custom' | 'local';
			played_at: string;
			duration: {
				seconds: number;
				human: string;
			};
		}>;
		privacy: {
			public: boolean;
		};
	};
	additional: {
		count: number;
		paging: {
			count: number;
			offset: number;
		};
		parameters: {
			gamertag: string;
			language:
				| 'pt-br'
				| 'fr-fr'
				| 'de-de'
				| 'es-es'
				| 'en-us'
				| 'it-it'
				| 'ja-jp'
				| 'ko-kr'
				| 'pl-pl'
				| 'ru-ru'
				| 'zh-cn'
				| 'es-mx'
				| 'zh-hk';
			type: 'all' | 'matchmaking' | 'custom' | 'local';
		};
	};
};
