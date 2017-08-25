Ext.define('demo.view.ChangePw',{
	extend:'Ext.window.Window',
	xtype:'ChangePw',
	title:'Change Password',
	constrain:true,
	resizable:true,
	closable:false,
	modal:true,
	width:300,
	height:200,
	layout:'vbox',
		initComponent:function(){
			var me=this;
			
			Ext.apply(me,{
				defaults:{margin:'10 10 0 10',maxLength:255},
				buttonAlign:'center',
				bbar:[{text:'ok',width:75,handler:function(){me.confirm();}},
							{text:'cancel',width:75,handler:function(){me.close();}}],
				items:[{
					xtype:'textfield',
					itemId:'oldPw',
					inputType:'password',
					fieldLabel:'origianl password',
					labelWidth:75
					},{
						xtype:'textfield',
						itemId:'newPw',
						inputType:'password',
						fieldLabel:'new password',
						labelWidth:75
						},{
							xtype:'textfield',
							itemId:'repNewPw',
							inputType:'password',
							fieldLabel:'confirm new password',
							labelWidth:75
				}]
			})
			me.callParent(arguments);
		},
		confirm:function(){
			var me=this;
			console.log('123');
			var oldPw=me.down('#oldPw').getValue();
			var newPw=me.down('#newPw').getValue();
			var repNewPw=me.down('#repNewPw').getValue();
			if(oldPw=='' || newPw=='' || repNewPw==''){
				Ext.Msg.alert('alert','Please fill out completely');
				return;
			}
			if(newPw!=repNewPw){
				Ext.Msg.alert('alert','cannot match with original password');
				return;		
			}
			Ext.Ajax.request({
				url : 'demo/checkPw.do',
				params : {
					inputPw : oldPw,
				},
				async : false,
				success : function(resp, options) {
					var msg = Ext.JSON.decode(resp.responseText);
					
					if (msg.text) {
						
							Ext.Ajax.request({
								url : 'demo/setPw.do',
								params : {
									pw : newPw,
								},
								async : false,
								success : function(resp, options) {
									Ext.Msg.alert('alert', 'update your password successfully!');
									me.close();
								}
							});
					} else {
						Ext.Msg.alert('alert', 'password error!');
					}
				}
			});
		}
});