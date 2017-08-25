Ext.define('demo.view.Login', {
	extend : 'Ext.window.Window',
	xtype : 'login',
	title : 'login',
	constrain : true,
	resizable : false,
	closable : false,
	modal : true,
	width : 320,
	height : 70,
	layout : 'border',
	listeners : {
	    
	    show : function(win) {
	    	win.down('textfield').focus();
	    }
	},
	
	initComponent : function() {
		var me = this;
		Ext.apply(me, {
					items : [{
						xtype : 'textfield',
						region : 'center',
						inputType : 'password',
						maxLength : 255,
						fieldLabel : 'Please input your password',
						labelWidth : 75,
						listeners: {
			                specialkey:function(field, e) {
						        if (e.getKey() == e.ENTER) {
						        	me.confirm();
						        }
						    }
			            }
					}, {
						xtype : 'button',
						margin : '0 0 0 5',
						region : 'east',
						text : 'OK',
						handler : function() {
							me.confirm();
						}
					}]
				});
		me.callParent(arguments);
	},


	confirm : function() {
		var me = this;
		var input = me.down('textfield').getValue();
		
		Ext.Ajax.request({
			url : 'demo/checkPw.do',
			params : {
				inputPw : input,
			},
			async : false,
			success : function(resp, options) {
				var msg = Ext.JSON.decode(resp.responseText);
				if (msg.text) {
					me.close();
				} else {
					Ext.Msg.alert('alert', 'password error!');
				}
			}
		});
	}
});