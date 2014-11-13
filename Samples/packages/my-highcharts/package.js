Package.describe({
    summary: 'Stephen created HighCharts package'
});

Package.on_use(function (api) {
    api.use('jquery', 'client');
    api.add_files('lib/highcharts.js', 'client');
    api.add_files('lib/exporting.js', 'client');
    api.add_files('lib/no-data-to-display.js', 'client');
    api.add_files('lib/highcharts-more.js', 'client');


//    api.add_files('lib/dancingunicorn.js', 'client');
});
