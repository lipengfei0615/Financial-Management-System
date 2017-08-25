Ext.define{'demo.store.PieStore',{
	extend:'Ext.data.Store',
	model:'demo.model.DailyReportDetails',
	proxy:{
		type : 'ajax',
		actionMethods : 'post',
		api : {
			read : 'demo/getPieData.do'
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
  }
	
}