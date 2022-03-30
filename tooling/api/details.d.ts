export type ToolingAPIDetailsResponse = {
	data: {
		service: string;
		updated_at: string;
		versions: {
			latest: string;
			supported: string[];
			deprecated: string[];
		};
	};
};
