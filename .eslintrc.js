module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'semi': ['error', 'never'],
		'quotes': ['error', 'single'],
		'indent': ['error', 'tab']
	}
}
