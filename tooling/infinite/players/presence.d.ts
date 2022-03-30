export type ToolingInfinitePlayersPresenceResponse = {
	data: {
		details: null | {
			fireteam: {
				players: {
					count: number;
					max: number;
				};
				privacy:
					| 'closed'
					| 'friends_only'
					| 'invite_only'
					| 'open'
					| 'unknown';
				activity: {
					status:
						| 'searching'
						| 'waiting'
						| 'playing'
						| 'loading'
						| 'idle';
					presence:
						| 'multiplayer'
						| 'campaign'
						| 'forge'
						| 'custom_game'
						| 'menus'
						| 'unknown';
					playlist: null | {
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
			};
			match: null | {
				id: string;
				details: {
					gamevariant: {
						name: string;
						asset: {
							id: string;
							version: string;
							thumbnail_url: string;
						};
					};
					map: {
						name: 'Recharge';
						asset: {
							id: string;
							version: string;
							thumbnail_url: string;
						};
					};
				};
				activity: {
					started: boolean;
					start_time: string | null;
				};
			};
		};
		presence: {
			online: boolean;
		};
	};
	additional: {
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
		};
	};
};
