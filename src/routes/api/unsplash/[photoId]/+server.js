import { error, json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
	try {
		const { photoId } = params;
		// TODO: Remove hardcoded key here

		// https://api.unsplash.com/photos/cvfxrmFYkZ8?client_id=uNhGzEqKCXfEtw_PWRAwLITkLzXaz-jkjyDRiUcHrFA
		const response = await fetch(
			`https://api.unsplash.com/photos/${photoId}?client_id=uNhGzEqKCXfEtw_PWRAwLITkLzXaz-jkjyDRiUcHrFA`
		);
		const image = await response.json();
		return json(image);
	} catch (e) {
		console.error(e);
		throw error(500, 'Something went wrong');
	}
}
