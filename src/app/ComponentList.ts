import { ComponentListBase } from "./ComponentListBase";
import { Component } from "@angular/core";

import { test } from "./test/test.component";

export class ComponentsList extends ComponentListBase {
	static compHash: { [x: string]: any } = {
		test: test
	};

	static ComponentArray: any[] = [test];

	static getArray() {
		return this.ComponentArray;
	}

	public getComponents(name: string): Component {
		return ComponentsList.compHash[name];
	}

	public static getAllComponents() {
		return this.ComponentArray;
	}
}
