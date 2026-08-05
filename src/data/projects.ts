type FeaturedProject = {
	title: string;
	client: string;
	role: string;
	year: string;
	poster: string;
	href: string;
	source: 'Instagram' | 'YouTube';
	video?: string;
};

export const featuredProjects: FeaturedProject[] = [
	{
		title: 'Voor Altijd 3600',
		client: 'Kosta Karetsas',
		role: 'Film · Social campaign',
		year: '2026',
		video: '/media/voor-altijd-3600.mp4',
		poster: '/media/voor-altijd-3600.jpg',
		href: 'https://www.instagram.com/p/DbX9K_eMB2s/',
		source: 'Instagram',
	},
	{
		title: 'Mondial, Meister, Mansion',
		client: 'MIDMID Mansion',
		role: 'Content · Social film',
		year: '2026',
		video: '/media/midmid-mansion.mp4',
		poster: '/media/midmid-mansion.jpg',
		href: 'https://www.instagram.com/p/DbEHjpHSCS1/',
		source: 'Instagram',
	},
	{
		title: 'Equal Pain Day',
		client: 'KPMG × Flanders Classics',
		role: 'DOP · Edit',
		year: '2024',
		poster: '/media/equal-pain-day.jpg',
		href: 'https://www.youtube.com/watch?v=I5ARXZt_Bgk',
		source: 'YouTube',
	},
];

export const projectIndex = [
	{ title: 'Everyone’s Classics', client: 'Flanders Classics', role: 'Creative direction · Edit' },
	{ title: 'This Sunday Is Forever', client: 'Ronde van Vlaanderen', role: 'Art direction · DOP · Edit' },
	{ title: 'We Honour Our Heroes', client: 'Gent–Wevelgem', role: 'Art direction · DOP · Edit' },
	{ title: 'We Are Ready. Are You?', client: 'Omloop Nieuwsblad', role: 'Art direction · DOP · Edit' },
	{ title: 'Hall of Fame', client: 'Pro League', role: 'Editor · Colour grade' },
	{ title: 'Legends Never Fade', client: 'Pro League', role: 'Editor · Colour grade' },
	{ title: 'One for All', client: 'Amazon Prime Video', role: 'Second camera' },
];
