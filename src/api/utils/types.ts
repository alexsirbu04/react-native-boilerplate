export interface IRequest {
	url: string;
	method?: string;
	token?: string;
	data?: any;
}

interface IHeaders {
	'Content-Type': string;
	Authorization?: string;
}

export interface IConfig {
	headers: IHeaders;
	url: string;
	method: string;
	data?: any;
}
