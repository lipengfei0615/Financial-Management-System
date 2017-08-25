Ext.define('demo.Application', {
    name: 'demo',

    extend: 'Ext.app.Application',

    views: [
            'demo.view.MoneyField',
            'demo.view.MoneyColumn'
    ],

    stores: [
         'demo.store.CategorizeStore',
         'demo.store.DailyReportDetailsStore',
        'demo.store.DemoStore',
        'demo.store.MonthStore',
        'demo.store.YearStore'
    ]
});
