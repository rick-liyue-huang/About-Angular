import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
  	<h1>{{title}}</h1>
  	<h2>{{hero.name}} details!</h2>
  	<div><label>id: </label>{{hero.id}}</div>
  	<div>
  		<label>name: </label>
  		<input value="{{hero.name}}" placeholder="name">
	</div>`
})

export class Hero {
	id: number;
	name: string;
}

export class AppComponent { 

	title = 'Tour of Heroes';
  	hero = 'Windstorm';
}