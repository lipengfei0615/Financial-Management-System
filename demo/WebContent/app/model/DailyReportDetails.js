Ext.define('demo.model.DailyReportDetails', {
	extend : 'Ext.data.Model',
	fields : [{name : 'id', type : 'string'},
	          {name : 'year', type : 'int'},
			  {name : 'month', type : 'int'},
			  {name : 'dailyReportId', type : 'string'},
			  {name : 'categorize', type : 'string'},
			  {name : 'name', type : 'string'},
			  {name : 'cash', type : 'float'},
			  {name : 'card', type : 'float'},
			  {name : 'total', type : 'float'}]
	});