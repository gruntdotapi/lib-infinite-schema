export type ArticlesResponse = {
	data: Array<{
		title: string;
		subtitle: string;
		message: string;
		image_url: string | null;
	}>;
	additional: {
		count: number;
		parameters: {
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
