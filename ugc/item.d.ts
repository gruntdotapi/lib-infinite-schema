export type UGCItemDetailsResponse = {
	data: {
		id: string;
		kind: string;
		name: string;
		description: string;
		tags: string[];
		thumbnail_url: string;
		version: string;
		stats: {
			likes: number;
			bookmarks: number;
			rating: number;
			plays: {
				total: number;
				recent: number;
			};
		};
	};
	additional: {
		parameters: {
			id: string;
			version: string;
			kind: 'all' | 'ugcgamevariant' | 'map' | 'prefab';
		};
	};
};
