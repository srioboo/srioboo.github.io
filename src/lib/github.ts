export interface FeaturedRepo {
	name: string;
	fullName: string;
	htmlUrl: string;
	description: string | null;
	language: string | null;
	stars: number;
	forks: number;
	updatedAt: string;
}

async function fetchRepo(fullName: string): Promise<FeaturedRepo | null> {
	try {
		const headers: HeadersInit = { Accept: 'application/vnd.github+json' };
		const token = process.env.GITHUB_TOKEN;
		if (token) headers.Authorization = `Bearer ${token}`;

		const res = await fetch(`https://api.github.com/repos/${fullName}`, { headers });
		if (!res.ok) return null;

		const data = await res.json();
		return {
			name: data.name,
			fullName: data.full_name,
			htmlUrl: data.html_url,
			description: data.description,
			language: data.language,
			stars: data.stargazers_count,
			forks: data.forks_count,
			updatedAt: data.updated_at,
		};
	} catch {
		return null;
	}
}

export async function getFeaturedRepos(repoFullNames: string[]): Promise<FeaturedRepo[]> {
	const results = await Promise.all(repoFullNames.map(fetchRepo));
	return results.filter((r): r is FeaturedRepo => r !== null);
}
