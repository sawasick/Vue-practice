const yourname = '君の名は';
const app = new Vue({
	el: '#app1',
	data: {
		message1_1: 'Hello world' + yourname,
		message1_2: 1 + 2,
		message1_3: `1 + 1 = ${1 + 1}`,
	},
});
new Vue({
	// elがクラスなど要素が複数の可能性の時は最初に合致したやつ
	el: '.app1',
	data: {
		message1_1: Math.abs(-10),
	},
});
new Vue({
	el: '#app2',
	data: {
		message2: Math.abs(-10),
	},
});
new Vue({
	el: '#app3',
	data: {
		message3: Math.abs(-10),
	},
});
new Vue({
	el: '#app4',
	data: {
		url: 'https://github.com/sawasick/Vue-practice',
		flag: true,
	},
});
