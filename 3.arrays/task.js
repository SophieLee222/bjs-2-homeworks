function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	} else if (arr1.every((item, index) => item === arr2[index])) {
		return true;
	} else {
		return false;
	}
}

function getUsersNamesInAgeRange(users, gender) {
	let result = users
		.filter(user => user.gender === gender)
		.map(user => user.age)
		.reduce((acc, age, index, arr) => {
			acc += age;
			if (index === arr.length - 1) {
				return acc / arr.length;
			}
			return acc;
		}, 0);
	return result;
}