class User {
	constructor(name, age) {
		this.age = age;
		this.name= name;
	}

	showMe() {
		return `${this.name} and ${this.age} years old`;
	}
}