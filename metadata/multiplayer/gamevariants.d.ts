export type MetadataMultiplayerGameVariantsResponse = {
	data: Array<{
		name: string;
		category_id: number;
		thumbnail_url: string;
	}>;
	additional: {
		count: number;
		parameters: {
			ids: string[];
		};
	};
};
