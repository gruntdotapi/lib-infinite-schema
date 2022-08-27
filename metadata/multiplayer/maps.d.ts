export type MetadataMultiplayerMapsResponse = {
	data: Array<{
		name: string;
		level_id: string;
		thumbnail_url: string;
	}>;
	additional: {
		count: number;
		parameters: {
			ids: string[];
		};
		version: string;
	};
};
