class User {
	constructor(name, age) {
		this.age = age;
		this.name= name;
	}

	showMe() {
		return `${this.name} and ${this.age} years old`;
	}
}

class Profile extends User {
	constructor(name, age, sex) {
		super(name, age);
		this.sex = sex;
	}

	showMe() {
		return super.showMe() + ' and ' + this.sex;
	}
}