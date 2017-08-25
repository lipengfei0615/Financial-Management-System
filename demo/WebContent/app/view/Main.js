Ext.define('demo.view.Main',{
	extend:'Ext.panel.Panel',
	xtype:'app-main',
	layout:'border',
	border:false,
	listeners : {
	    	
	    	// 跳出一个登录窗口
//	 	beforerender : function(){
//	    		Ext.create('demo.view.Login').show();
//	    	},
	    	
	    	afterrender : function() {
	    		Ext.getDoc().on("contextmenu", function(e){//阻止浏览器自身的右击菜单弹出
	    		    e.stopEvent();
	    		});
	    	var me = this;
	    		var date = new Date();
	    		var year = date.getFullYear();// 取当时年份
	    		var month = date.getMonth();// 月份
	    		me.down('#year').select(year);
	    		me.down('#month').select(month);    		
	 	 		me.mainGridStore.getProxy().setExtraParam('year', year);
	    		me.mainGridStore.getProxy().setExtraParam('month', month);
	    		me.mainGridStore.getProxy().setExtraParam('monthReport', '0');
	    		me.mainGridStore.load();
	    		me.detailsGridStore.getProxy().setExtraParam('year', year);
	    		me.detailsGridStore.getProxy().setExtraParam('month', month);
	    		me.detailsGridStore.getProxy().setExtraParam('monthReport', '0');
	    	}
	   },
	    
	initComponent: function(){
		var me = this;
		me.addCls('my_grid_header');//添加一个CSS类的顶级元素my_grid_header
 		me.mainGridStore = Ext.create('demo.store.DemoStore');
 		me.detailsGridStore = Ext.create('demo.store.DailyReportDetailsStore');
		
		Ext.apply(me, {
			items : [{
				xtype : 'panel',
				region : 'center',//border布局的中间
				layout : 'border',
				margin : '0 0 0 0',//距离“上、右、下、左”的距离
				border : false,//外侧不加边框
				frame : true,
				bodyStyle : {background : 'white'},
				/*布局顶端加两个按钮和下拉列表和修改密码按钮*/
				tbar : [{xtype : 'radio', name : 'radio', itemId : 'dailyRadio', width : 170,boxLabel : 'daily statement',checked:true,handler: function(field) {me.selectRadio(field);}},
				        {xtype : 'radio', name : 'radio', itemId : 'monthRadio', width : 170, boxLabel : 'monthly statement'},
				       {xtype : 'combo', itemId : 'year', width : 90, store : Ext.create('demo.store.YearStore'), displayField : 'value', valueField : 'text', queryMode : 'local', editable : false, listeners : {select : function() {me.selectTime();}}},
						{xtype : 'combo', itemId : 'month', width : 70, store : Ext.create('demo.store.MonthStore'), displayField : 'value', valueField : 'text', queryMode : 'local', editable : false, listeners : {select : function() {me.selectTime();}}},
						'->',
					{text : 'Update Password', itemId : 'changePw', width : 150, handler : function() {me.changePw();}}],		
				items:[{
					xtype:'grid',//列表布局
					itemId:'main',
					viewConfig:{
						loadMask:false//是否在加载数据时显示遮罩效果，默认为false 
					},
					title:'Income details',
					titleAlign:'center',
					region:'center',
					margin:'5 0 5 5',
					columnLines:true,
					features:{ftype:'summary',dock:'bottom'},
					plugins:Ext.create('Ext.grid.plugin.CellEditing',{clicksToEdit:2}),//双击进入编辑状态
					store:me.mainGridStore,
					/*创建日期列并格式化为n月j日的形式*/
					columns:[{header:'date',dateIndex:'date',itemId:'date',minWidth:150,align:'center',flex:1,sortable:false,menuDisabled:true,renderer:Ext.util.Format.dateRenderer('j,n'),summaryRenderer:function() {return "total"},
						editor:{xtype:'datefield',hideTrigger:true,editable:false,format:'j,n',
							//创建一个监听器，
							listeners:{
								select:function(field,value){
									var selectMon=Ext.Date.format(value,'m')//获取选择日期的月份
									var repMon=me.down('#month').getValue();//获取下拉菜单的月份
									
									if(selectMon!=repMon){//若选择日期的月份与下拉菜单的月份不相等则提示警告
										Ext.Msg.alert('alert','Please select corresponding date!');
										field.setValue();
									}
								}
							}
						}},		
						//创建报表对应的各列
					{header:'month',dataIndex:'date',minWidth:160,align:'center',itemId:'monthField',flex:1,sortable:false,hidden:false,renderer:Ext.util.Format.dateRenderer('n month'),summaryRenderer:function(){return 'total'}},
					{header:'Income details',sortable:false,menuDisabled:true,
						columns:[{header:'cash',sortable:false,menuDisabled:true,align:'center',
						        					columns:[{header:'breakfast',xtype:'moneycolumn',dataIndex:'bCash',width:90,align:'center',editor:{xtype:'moneyfield'}},
						        					         			{header:'lunch',xtype:'moneycolumn',dataIndex:'lCash',width:90,align:'center',editor:{xtype:'moneyfield'}},
						        					         			{header:'dinner',xtype:'moneycolumn',dataIndex:'dCash',width:90,align:'center',editor:{xtype:'moneyfield'}}]},
						         			{header:'debit card',sortable:false,menuDisabled:true,align:'center',
						         					columns:[{header:'breakfast',xtype:'moneycolumn',dataIndex:'bCard',width:90,align:'center',editor:{xtype:'moneyfield'}},
						        					         			{header:'lunch',xtype:'moneycolumn',dataIndex:'lCard',width:90,align:'center',editor:{xtype:'moneyfield'}},
						        					         			{header:'dinner',xtype:'moneycolumn',dataIndex:'dCard',width:90,align:'center',editor:{xtype:'moneyfield'}}]},
						         			{header:'order',xtype:'moneycolumn',dataIndex:'orders',width:90,ealign:'center',editor:{xtype:'moneyfield'}},
						         			{header:'total income',xtype:'moneycolumn',dataIndex:'income',align:'center',width:90}]},
					{header:'amount paid',xtype:'moneycolumn',dataIndex:'expense',minWidth:90,align:'center',flex:1},
					{header:'profit',xtype:'moneycolumn',dataIndex:'netIncome',minWidth:90,align:'center',flex:1},
					{header:'charge',xtype:'moneycolumn',dataIndex:'recharge',minWidth:90,flex:1,align:'center',editor:{xtype:'moneyfield'}},
					{header:'Unionpay',xtype:'moneycolumn',dataIndex:'unionPay',minWidth:90,flex:1,align:'center',align:'center',editor:{xtype:'numberfield'}},
					{header:'membership card',xtype:'moneycolumn',dataIndex:'cardAmount',minWidth:90,align:'center',flex:1,sortable:false,menuDisabled:true,editor:{xtype:'numberfield',hideTrigger:true}},
					{header:'membership amount',xtype:'moneycolumn',dataIndex:'cardBalance',minWidth:90,align:'center',flex:1,sortable:false,menuDisabled:true,format:'0,000.00',editor:{xtype:'moneyfield'}},
					{header:'operator',dataIndex:'operator',itemId:'operator',minWidth:90,align:'center',sortable:false,menuDisabled:true,editor:{maxLength:255}}],
					listeners:{
						//编辑之前监听如果是月报表则终止事件
						beforeedit:function(){
							if(me.down('#monthRadio').getValue()){
										return false;
								}
						},
						edit:function(editor,e){
							me.mainCount(editor,e);
							me.mainGridStore.sync();//将数据同步到后台数据库
						},
						/*切换按钮监听器*/
						 selectionchange : function(grid, recs) {   
								   if (recs.length == 0) {
									   return;
								   }
								   var radioChecked = me.down('#dailyRadio').getValue();
								   
								   if (radioChecked) {
									   me.detailsGridStore.getProxy().setExtraParam('dailyReportId', recs[0].get('id'));
								   } else {
									   me.detailsGridStore.getProxy().setExtraParam('month', recs[0].get('month'));
									   me.detailsGridStore.getProxy().setExtraParam('year', recs[0].get('year'));
								   }
								   me.detailsGridStore.load();
							   },
							   //选中一条记录监听器
					itemcontextmenu:function(view,rec,item,index,e){
							me.showRightMenu('itemcontextmenu',view,e,index);
						},
						//空白处右击监听器
					containercontextmenu : function(view, e) {
						   me.showRightMenu('containercontextmenu', view, e);
					   },
					   //空白处点击监听器
					containerclick:function(view,e){//点击空白处右侧记录消失
								view.getSelectionModel().deselectAll();
								me.detailsGridStore.removeAll();
						}
					}
						
			},{
				margin:'5 5 5 5',
				xtype:'grid',
				itemId:'details',
				title:'expenditure',
				titleAlign:'center',			
				region:'east',
				width:452,
				collapsible:true,
				collapsed:true,
				viewConfig:{
					loadMask:true
				},
				columnLines:true,
				store:me.detailsGridStore,
				plugins:Ext.create('Ext.grid.plugin.CellEditing',{clicksToEdit:2}),
				features : {ftype : 'summary', dock : 'bottom'},
				columns:[{header:'expense details',sortable:false,menuDisabled:true,align:'center',
					columns:[{header:'category',dataIndex:'categorize',width:90,align:'center',sortable:false,menuDisabled:true,summaryRenderer:function(){return'total'},editor:{
						xtype:'combo',store:Ext.create('demo.store.CategorizeStore'),displayField:'text',valueField:'text',queryMode:'local',editable:false}},
						{header:'name',dataIndex:'name',itemId:'name',width:90,align:'center',sortable:false,menuDisabled:true,editor:{maxLength:255}},
						{header:'expense way',sortable:false,menuDisabled:true,align:'center',
							columns:[{header:'cash',xtype:'moneycolumn',dataIndex:'cash',width:90,align:'center',editor:{xtype:'moneyfield'}},
							         			{header:'debit card',xtype:'moneycolumn',dataIndex:'card',width:90,align:'center',editor:{xtype:'moneyfield'}},
							         			{header:'total expense',xtype:'moneycolumn',dataIndex:'total',width:90} ]	}]}],
					   
					 listeners : {
						   
						   beforeedit : function() {
							   if (me.down('#monthRadio').getValue()) {
								   return false;
							   }
						   },
						   
						   edit : function(editor, e) {
					    		me.detailsCount(editor, e);	
					    		me.down('#details').getStore().sync();
					    		me.down('#main').getStore().sync();
						   },
						   
						   itemcontextmenu : function(view, rec, item, index, e) {
							   me.showRightMenu('itemcontextmenu', view, e, index);
						   },
						   
						   containercontextmenu : function(view, e) {
							   me.showRightMenu('containercontextmenu', view, e);
						   },
						   
						   containerclick : function(view, e) {
							   view.getSelectionModel().deselectAll();
						   }
					   }
				
			},{
				xtype:'toolbar',
		        region:'south',
		        items: ['ready', '->', '&copy;2015'],
		        style:'background-color:#FFE37E;'
				
			}, {
				xtype:'toolbar',
		        region:'north',
		        items:['->','<span style="font-weight:bold;"><font size="4px"><font color=" black "><center><h1>财务记账系统</h1></center></font></font></span>','->'],
					}]
			}]
	});
		this.callParent(arguments);
	},
	/*选择是日报表还是月报表单选按钮函数*/
	selectRadio : function(field) {
		var me = this;
		var mainStore = me.down('#main').getStore();
		var detailsStore = me.down('#details').getStore();
		me.down('#main').getSelectionModel().deselectAll();
		detailsStore.removeAll();
		
		if (field.getValue()) {
			mainStore.getProxy().setExtraParam('monthReport', '0');
			detailsStore.getProxy().setExtraParam('monthReport', '0');
			mainStore.load();
			me.down('#month').show();
			me.down('#operator').show();
			me.down('#date').show();
			me.down('#name').show();
			me.down('#monthField').show();
			me.down('#details').setWidth(452);
		} else {
			mainStore.getProxy().setExtraParam('monthReport', '1');
			detailsStore.getProxy().setExtraParam('monthReport', '1');
			mainStore.load();
			me.down('#month').hide();
			me.down('#operator').hide();
			me.down('#date').hide();
			me.down('#name').hide();
			me.down('#monthField').show();
			me.down('#details').setWidth(362);
		}
	},
	/*选择日期函数*/
	   selectTime:function(){
		   var me=this;
		   var year=me.down('#year').getValue();
		   var month=me.down('#month').getValue();
		   var gridStore=me.down('#main').getStore();
		   gridStore.getProxy().setExtraParam('year',year);
		   gridStore.getProxy().setExtraParam('month',month);
		   gridStore.load();
		   me.down('#details').getStore().removeAll();
	   },
	   /*计算收入小计函数*/
	   mainCount:function(editor,e){
		   var me=this;
		   var rec=e.record;
		   var income=rec.get('bCash')+rec.get('bCard')+rec.get('lCash')+rec.get('lCard')+rec.get('dCash')+rec.get('dCard')+rec.get('orders');

		   rec.set('income',income);
		   var netIncome=income-rec.get('expense');
		   rec.set('netIncome',netIncome);
	   },
	   detailsCount:function(editor,e){
		   var me=this;
		   var rec=e.record;
		   var sum=0;
		   var store=me.down('#details').getStore();
		   store.each(function(rec){
			   var total=rec.get('cash')+rec.get('card');
			   rec.set('total',total);
			   sum+=total;
		   });
		   var dailyRec=me.down('#main').getSelectionModel().getSelection()[0];
		   dailyRec.set('expense',sum);
		   var netIncome=dailyRec.get('bCash')+dailyRec.get('bCard')+dailyRec.get('lCash')+dailyRec.get('lCard')+dailyRec.get('dCash')+dailyRec.get('orders')-sum;
		   dailyRec.set('netIncome',netIncome);
	   },
	   /*右键菜单显示函数*/
	   showRightMenu:function(action,view,e){
		   var me=this;
		   var grid=view.up('grid');
		  if(me.down('#monthRadio').getValue()){
			  return;
		  }
		  if (grid.getItemId() == 'details' && !me.down('#main').getSelectionModel().hasSelection()) {
				return;
			}
		   if(action=='itemcontextmenu'){
			   Ext.create('Ext.menu.Menu',{
				   items:[{text:'add',iconCls:'add_record',handler:function(){me.addRow(grid);}},
				          		{text:'delete',iconCls:'delete_record',handler:function(){me.deleteRow(grid);       }}]
			   }).showAt(e.getXY());
		   }else{
			 
			   Ext.create('Ext.menu.Menu',{
				   items:[{text:'add',iconCls:'add_record',handler:function(){me.addRow(grid);}}]
			   }).showAt(e.getXY());
		   }
	   },
	   //添加一行函数
	   addRow:function(grid){
		   var me=this;
		   var rec=null;
		   if(grid.getItemId()=='main'){
			   rec=Ext.create('demo.model.Demo');			   
		   }else {
				rec = Ext.create('demo.model.DailyReportDetails');
				rec.set('dailyReportId', me.down('#main').getSelectionModel().getSelection()[0].get('id'));			
			}
		   var store=grid.getStore();
		   store.add(rec);
		   rec.set('id',Ext.id());
		   rec.set('month',me.down('#month').getValue());
		   rec.set('year',me.down('#year').getValue());
		   store.sync();
		   if(grid.getItemId() == 'details') {
				me.mainGridStore.sync();
			}
	   },
	   //删除一行函数
	 deleteRow:function(grid){
		 var me=this;
		 Ext.Msg.confirm('alert','delete or not?',
				 function fn(id){
			 		if(id==Ext.Msg.buttonIds[1]){
			 			var store=grid.getStore();
			 			store.remove(grid.getSelectionModel().getSelection());
			 			store.sync();
			 			if(grid.getItemId() == 'details') {
							me.detailsCount();
							me.mainGridStore.sync();
						}
			 		}
		 	
		 });
	 },
	 //改变密码函数，调用ChangePw视图
	   changePw:function(){
		   var me=this;
		   Ext.create('demo.view.ChangePw').show();
	   }
   });
