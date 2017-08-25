Ext.define('demo.store.DailyReportDetailsStore',{
	extend:'Ext.data.Store',
	model:'demo.model.DailyReportDetails',
	proxy:{
		type : 'ajax',
		actionMethods : 'post',
		api : {
			read : 'demo/getDailyReportDetails.do',
			update : 'demo/saveDetails.do',
			destroy : 'demo/destroyDetails.do'
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