export type MetadataMultiplayerTeamsResponse = {
	data: Array<{
		id: number;
		name: string;
		emblem_url: string;
	}>;
	additional: {
		count: number;
		parameters: {
			ids: string[];
		};
	};
};
