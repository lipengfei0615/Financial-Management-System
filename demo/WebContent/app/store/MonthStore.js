Ext.define('demo.store.MonthStore', {
	extend : 'Ext.data.Store',
	fields: ['text', 'value'],
    data : [{'text' : 1, 'value' : 'January'},
            {'text' : 2, 'value' : 'February'},
            {'text' : 3, 'value' : 'March'},
            {'text' : 4, 'value' : 'April'},
            {'text' : 5, 'value' : 'May'},
            {'text' : 6, 'value' : 'June'},
            {'text' : 7, 'value' : 'July'},
            {'text' : 8, 'value' : 'August'},
            {'text' : 9, 'value' : 'Sepember'},
            {'text' : 10, 'value' : 'October'},
            {'text' : 11, 'value' : 'November'},
            {'text' : 12, 'value' : 'December'}]

});