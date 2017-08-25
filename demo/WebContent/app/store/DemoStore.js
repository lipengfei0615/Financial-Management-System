Ext.define('demo.store.DemoStore', {
	extend : 'Ext.data.Store',
	model : 'demo.model.Demo',
	proxy : {
		type : 'ajax',
		actionMethods : 'post',
		api : {
			read : 'demo/getDailyReport.do',
			update : 'demo/save.do',
			destroy : 'demo/destroy.do'
		},

		reader : {
			type : 'json',
			root : 'data',
			messageProperty : 'message',
			totalProperty : 'total'
		},
		
		writer : {
			type : 'json',
			root : 'data',
			encode : true,
			allowSingle : false
		}

	}

});