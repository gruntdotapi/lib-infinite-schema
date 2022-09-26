export type StatsPlayersCSRSResponse = {
	data: Array<{
		id: string;
		name: string;
		queue: 'open' | 'solo-duo' | null;
		input: 'controller' | 'mnk' | 'crossplay' | null;
		response: {
			current: {
				value: number;
				measurement_matches_remaining: number;
				tier: string;
				tier_start: number;
				sub_tier: number;
				next_tier: string;
				next_tier_start: number;
				next_sub_tier: number;
				initial_measurement_matches: number;
				tier_image_url: string;
			};
			season: {
				value: number;
				measurement_matches_remaining: number;
				tier: string;
				tier_start: number;
				sub_tier: number;
				next_tier: string;
				next_tier_start: number;
				next_sub_tier: number;
				initial_measurement_matches: number;
				tier_image_url: string;
			};
			all_time: {
				value: number;
				measurement_matches_remaining: number;
				tier: string;
				tier_start: number;
				sub_tier: number;
				next_tier: string;
				next_tier_start: number;
				next_sub_tier: number;
				initial_measurement_matches: number;
				tier_image_url: string;
			};
		};
	}>;
	additional: {
		parameters: {
			gamertag: string;
			season: number;
			version: number;
		};
	};
};
