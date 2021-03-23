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
new Vue({
	el: '#app9',
	data: {
		//現在日時
		current: new Date(),
	},
	//起動時
	created: function () {
		//タイマーを設定
		const that = this;
		//1000ミリ秒スパンでcurrentプロパティを更新
		this.timer = setInterval(function () {
			that.current = new Date();
		}, 1000);
	},
	//終了時にタイマーを破棄
	beforeDestroy: function () {
		clearInterval(this.timer);
	},
	methods: {
		onclick: function () {
			clearInterval(this.timer);
		},
	},
});
const app10 = new Vue({
	el: '#app10',
	data: {
		my: {
			name: '山田太郎',
			// age: 0, //空値で用意しておく
		},
	},
	created: function () {
		const that = this;
		//3秒後にプロパティを追加
		this.timer = setTimeout(function () {
			// that.my.age = 21;　//これをするなら、あらかじめプロパティを用意しておく
			Vue.set(that.my, 'age', 21); //Vue.setで追加をVue.jsに通知
			// app10.$set(that.my, 'age', 21); //これでも同じ意味
			// that.my = Object.assign({}, that.my, {age: 21,　from: 'jpn',　sex: 'male'});//複数プロパティ追加ならassignがスマート
		}, 3000);
		//6秒後にプロパティを削除
		this.timer = setTimeout(function () {
			Vue.delete(that.my, 'age');
		}, 6000);
	},
	beforeDestroy: function () {
		clearInterval(this.timer);
	},
});
new Vue({
	el: '#app11',
	data: {
		name: '',
		upperName: '',
	},
	created: function () {
		//遅延処理用　_.debounceはLodash標準メソッド
		this.delayFunc = _.debounce(this.getUpper, 2000);
		// const unwatch = this.$watch('name', function(newValue, oldValue){
		// that.delayFunc();
		// });
	},
	watch: {
		//nameプロパティを監視
		name: function (newValue, oldValue) {
			//変更があったらdelayFuncを呼び出す→遅延させる
			this.delayFunc();
		},
	},
	// computed: {→即座にgetUpperが実行される
	//   upperName: function() {
	//     return this.name.toUpperCase();
	//   }
	// },
	methods: {
		getUpper: function () {
			this.upperName = this.name.toUpperCase();
		},
	},
});
new Vue({
	el: '#app12',
	data: {
		time: '',
	},
	methods: {
		onclick: function () {
			this.time = new Date().toLocaleString();
		},
		onclick2: function (e) {
			console.log(e);
		},
		onclick3: function (message, e) {
			console.log(message, e);
		},
	},
});
new Vue({
	el: '#app13',
	data: {
		pet: 'わんわん',
	},
});
new Vue({
	el: '#app14',
	data: {
		agree: true,
		agree2: 'yes',
	},
});
new Vue({
	el: '#app15',
	data: {
		os: [], //配列として格納される
	},
});
new Vue({
	el: '#app16',
	data: {
		os: '',
	},
});
new Vue({
	el: '#app17',
	data: {
		show: true,
		os: '',
		pay: 'credit',
	},
});
const booksData = [
	{
		isbn: '123-4-55678-9',
		title: '初めてのVue.js',
		price: 2800,
	},
	{
		isbn: '123-4-55678-99',
		title: '初めてのReact',
		price: 3300,
	},
	{
		isbn: '123-4-55678-999',
		title: '初めてのAngular',
		price: 3500,
	},
];
new Vue({
	el: '#app18',
	data: {
		books: booksData,
	},
	computed: {
		expensiveBooks: function () {
			return this.books.filter(function (book) {
				return book.price >= 3000;
			});
		},
	},
});
new Vue({
	el: '#app19',
	data: {
		items: ['赤', '黄', '青'],
	},
	methods: {
		onclick: function () {
			//(this.items[1] = '白'); ←これではビューに反映されない
			Vue.set(this.items, 1, '白');
			// this.$set(this.items, 1, '白');　←これでもOK
		},
	},
});
new Vue({
	el: '#app20',
	data: {
		attrs: {
			size: 20,
			maxlength: 14,
			required: true, //入力必須にする
		},
		text: 'HELLO!',
	},
});
new Vue({
	el: '#app21',
	data: {
		attr: 'width',
		size: 100,
	},
});
new Vue({
	el: '#app22',
	data: {
		text: `<img src="images/sample.png" alt="サンプル画像">`,
	},
});
new Vue({
	el: '#app23',
	data: {
		name: '匿名',
	},
});
new Vue({
	el: '#app24',
	data: {
		color: {
			backgroundColor: '#0000ff',
			color: '#fff',
		},
		size: {
			fontSize: '20px',
		},
	},
});
new Vue({
	el: '#app25',
	data: {
		color: true,
		isBold: true,
		colorClass: 'color',
		weightClass: 'weight',
	},
});
new Vue({
	el: '#app26',
	data: {
		message: 'こんにちは',
	},
});
new Vue({
	el: '#app27',
	data: {
		dice: '',
	},
	methods: {
		onclick: function () {
			this.dice = Math.floor(Math.random() * 6 + 1);
		},
		onParentClick: function () {
			console.log('親要素Run');
		},
		onMyClick: function () {
			console.log('現在要素Run');
		},
		onChildClick: function () {
			console.log('子要素Run');
		},
	},
});
Vue.config.KeyCodes = {
	'zen-han': 243, //全角/半角キー
};
new Vue({
	el: '#app28',
	data: {
		txt: '',
		txt2: '',
	},
	methods: {
		clear: function () {
			this.txt = '';
		},
		clear2: function () {
			this.txt2 = '';
		},
		position: function (e) {
			console.log(e.screenX, e.screenY);
		},
	},
});
