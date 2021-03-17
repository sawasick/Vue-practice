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
new Vue({
	el: '#app5',
	data: {
		email: 'Example@sample.com',
	},
	computed: {
		localEmail: function () {
			return this.email.split('@')[0].toLowerCase();
		},
	},
});
new Vue({
	el: '#app6',
	data: {
		email: 'Example@sample.com',
	},
	methods: {
		localEmail: function () {
			return this.email.split('@')[0].toLowerCase();
		},
	},
});
new Vue({
	el: '#app7',
	data: {
		current: new Date().toLocaleString(),
	},
	computed: {
		//算出プロパティ経由で乱数を取得
		randomc: function () {
			return Math.random();
		},
	},
	methods: {
		//クリック時に処理を実行
		onclick: function () {
			this.current = new Date().toLocaleString();
		},
		//メソッド経由で乱数を取得
		randomm: function () {
			return Math.random();
		},
	},
});
const app8 = new Vue({
	el: '#app8',
	beforeCreate: function () {
		console.log('beforeCreate...');
	},
	created: function () {
		console.log('created...');
	},
	beforeMount: function () {
		console.log('beforeMount...');
	},
	mounted: function () {
		console.log('mounted...');
	},
	beforeUpdate: function () {
		console.log('beforeUpdate...');
	},
	updated: function () {
		console.log('updated...');
	},
	beforeDestroy: function () {
		console.log('beforeDestroy...');
	},
	destroyed: function () {
		console.log('destroyed...');
	},
});
setTimeout(function () {
	//インスタンスを破棄するメソッド
	//Vue標準のメンバーを表すため$を付けとく
	app8.$destroy();
}, 3000);
