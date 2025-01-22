import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export async function load() {
	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM locations');

	let [rows2] = await connection.execute('SELECT * FROM category');

	return {
		locations: rows,
		categories: rows2
	};
}

export const actions = {
	createEvent: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		const connection = await createConnection();
		const [result] = await connection.execute(
			'INSERT INTO events (title, description, start_date, end_date, url, start_time, location_id, category_id) VALUES (?,?, ?, ?, ?, ?, ?, ?)',
			[
				formData.get('title'),
				formData.get('description'),
				formData.get('startDate'),
				formData.get('endDate'),
				formData.get('url'),
				formData.get('startTime'),
				formData.get('locationId'),
				formData.get('categoryId')
			]
		);
		if (result.affectedRows) {
			redirect(303, '/admin/events');
		}
	}
};
