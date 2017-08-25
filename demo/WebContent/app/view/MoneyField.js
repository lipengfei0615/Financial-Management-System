Ext.define('demo.view.MoneyField',{
	extend:'Ext.form.field.Number',
	xtype:'moneyfield',
	hideTrigger:true,//隐藏触发按钮
	decimalPrecision:2//精度小数点后2位
});