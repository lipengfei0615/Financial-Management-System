Ext.define('demo.view.MoneyColumn',{
	extend:'Ext.grid.column.Number',
	xtype:'moneycolumn',
	align:'right',
	sortable:false,
	menuDisabled:true,
	format:'0,000.00',
	summaryType:'sum',
	summaryRenderer:function(v){
		return Ext.util.Format.number(v,'0,000.00');
	}
});