export type MetadataMultiplayerMedalsResponse = {
	data: Array<{
		id: number;
		name: string;
		description: string;
		difficulty: 'normal' | 'heroic' | 'legendary' | 'mythic';
		type: 'killing-spree' | 'mode' | 'multikill' | 'proficiency' | 'skill';
		image_urls: {
			small: string;
			medium: string;
			large: string;
		};
	}>;
	additional: {
		count: number;
		parameters: {
			ids: string[];
		};
	};
};
