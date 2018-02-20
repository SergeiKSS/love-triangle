/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let countTriangles = 0;
	let A, B, C;

	for (let i = 0; i < preferences.length-1; i++) {
		A = preferences[i];
		B = preferences[A-1];
		C = preferences[B-1];
		if (preferences[C-1] === A && B !== C) {
			countTriangles++;
			preferences[i] = 0;
			preferences[A-1] = 0;
			preferences[B-1] = 0;
		}
	}
	return countTriangles;
};