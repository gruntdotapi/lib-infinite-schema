export type MetadataMultiplayerSeasonsResponse = {
	data: Array<{
		id: number;
		version: number;
	}>;
	additional: {
		parameters: {
			ids: number[];
		};
	};
};
