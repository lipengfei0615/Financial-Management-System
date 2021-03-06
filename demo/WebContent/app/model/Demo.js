Ext.define('demo.model.Demo', {
	extend : 'Ext.data.Model',
	fields : [{name : 'id', type : 'string'},
	          {name : 'year', type : 'int'},
			  {name : 'month', type : 'int'},
			  {name : 'date', type : 'date'},
			  {name : 'bCash', type : 'float'},
			  {name : 'bCard', type : 'float'},
			  {name : 'lCash', type : 'float'},
			  {name : 'lCard', type : 'float'},
			  {name : 'dCash', type : 'float'},
			  {name : 'dCard', type : 'float'},
			  {name : 'orders', type : 'float'},
			  {name : 'income', type : 'float'},
			  {name : 'expense', type : 'float'},
			  {name : 'netIncome', type : 'float'},
			  {name : 'recharge', type : 'float'},
			  {name : 'unionPay', type : 'float'},
			  {name : 'cardAmount', type : 'float'},
			  {name : 'cardBalance', type : 'float'},
			  {name : 'operator', type : 'string'},
			  {name : 'remark', type : 'string'}]
	});