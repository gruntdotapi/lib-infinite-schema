export type UGCSearchResponse = {
	data: Array<{
		id: string;
		kind: 'ugcgamevariant' | 'map';
		name: string;
		description: string;
		tags: string[];
		references: string[];
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
		created_at: string;
		modified_at: string;
		published_at: string;
	}>;
	additional: {
		count: number;
		paging: {
			count: number;
			offset: number;
		};
		parameters: {
			author: string | null;
			tags: string[];
			kind: 'all' | 'ugcgamevariant' | 'map';
		};
	};
};
