export type MetadataMultiplayerPlaylistsResponse = {
	data: Array<{
		name: string;
		asset: {
			id: string;
			version: string;
			thumbnail_url: string;
		};
		availability: {
			start_date: string;
			end_date: string;
		};
		properties: {
			queue: 'open' | 'solo-duo' | null;
			input: 'controller' | 'mnk' | 'crossplay' | null;
			ranked: boolean;
		};
	}>;
	additional: {
		count: number;
		parameters: {
			ids: string[];
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
		version: string;
	};
};
