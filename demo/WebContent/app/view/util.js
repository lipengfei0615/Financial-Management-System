Ext.define('demo.view.Util',{
	/**
	 * 查询累计金额
	 * 
	 * @param {}
	 *            contractId
	 * @return {}
	 */
	getCumulative : function(contractId) {
		var obj = null;
		Ext.Ajax.request({
					url : 'htsk/getHtskCumulative.do',
					params : {
						contractId : contractId
					},
					async : false,// 同步请求数据
					success : function(resp, request) {
						obj = Ext.JSON.decode(resp.responseText);
					}
				});
		return obj;
	},
	/**
	 * 查询累计金额
	 * 
	 * @param {}
	 *            contractId
	 * @return {}
	 */
	getUnaudited : function(id, contractId, orgId) {
		var obj = null;
		Ext.Ajax.request({
					url : 'htsk/getUnaudited.do',
					params : {
						id : id,
						contractId : contractId,
						ou_code : orgId
					},
					async : false,// 同步请求数据
					success : function(resp, request) {
						obj = Ext.JSON.decode(resp.responseText);
					}
				});
		return obj;
	},

	/**
	 * 送审
	 */
	updateStatus : function(ids, grid) {
		Ext.Ajax.request({
					url : 'demo/getPw.do',
					success : function(resp, options) {
						var msg = Ext.JSON.decode(resp.responseText);
						if (msg.success) {
							grid.gridStore.load();
							gp.Util.showMsg(bu.Const.MSG_SAVE_REVIEW);
						} else {
							Ext.Msg.alert(bu.Const.MSG_ALERT_PROMPT,
									bu.Const.MSG_SAVE_REVIEW_FAIL);
						}
					}
				})
	}
		},function(){
			view.util=new this();
})