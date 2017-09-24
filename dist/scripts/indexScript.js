$(function () {

    var data = [
        {
            "country": "LT (Lithuania)",
            "activity": "Spamming",
            "geoip": {
                "org_name": "UAB Esnet",
                "city": null,
                "dma_code": 0,
                "area_code": 0,
                "region": null,
                "charset": 0,
                "country_slug": "LT (Lithuania)",
                "continent_code": "EU",
                "country_code3": "LTU",
                "country_name": "Lithuania",
                "postal_code": null,
                "longitude": 24.0,
                "country_code": "LT",
                "latitude": 56.0
            },
            "address": "91.225.104.251"
        },
        {
            "country": "US (United States)",
            "activity": "Scanning Host",
            "geoip": {
                "org_name": "Microsoft Corporation",
                "city": null,
                "dma_code": 0,
                "area_code": 0,
                "region": null,
                "charset": 0,
                "country_slug": "US (United States)",
                "continent_code": "NA",
                "country_code3": "USA",
                "country_name": "United States",
                "postal_code": null,
                "longitude": -97.0,
                "country_code": "US",
                "latitude": 38.0
            },
            "address": "40.121.150.68"
        },
        {
            "country": "VN (Vietnam)",
            "activity": "Scanning Host",
            "geoip": {
                "org_name": "Viettel Corporation",
                "city": "Hanoi",
                "dma_code": 0,
                "area_code": 0,
                "region": "44",
                "charset": 0,
                "country_slug": "VN (Vietnam)",
                "continent_code": "AS",
                "country_code3": "VNM",
                "country_name": "Vietnam",
                "postal_code": null,
                "longitude": 105.8499984741211,
                "country_code": "VN",
                "latitude": 21.033300399780273
            },
            "address": "171.251.42.33"
        },
        {
            "country": "CN (China)",
            "activity": "Scanning Host",
            "geoip": {
                "org_name": "China Telecom Guangdong",
                "city": "Guangzhou",
                "dma_code": 0,
                "area_code": 0,
                "region": "30",
                "charset": 0,
                "country_slug": "CN (China)",
                "continent_code": "AS",
                "country_code3": "CHN",
                "country_name": "China",
                "postal_code": null,
                "longitude": 113.25,
                "country_code": "CN",
                "latitude": 23.11669921875
            },
            "address": "183.39.171.129"
        },
        {
            "country": "CN (China)",
            "activity": "Scanning Host",
            "geoip": {
                "org_name": "China Telecom Guangdong",
                "city": "Guangzhou",
                "dma_code": 0,
                "area_code": 0,
                "region": "30",
                "charset": 0,
                "country_slug": "CN (China)",
                "continent_code": "AS",
                "country_code3": "CHN",
                "country_name": "China",
                "postal_code": null,
                "longitude": 113.25,
                "country_code": "CN",
                "latitude": 23.11669921875
            },
            "address": "125.88.181.94"
        },
        {
            "country": "CN (China)",
            "activity": "Scanning Host",
            "geoip": {
                "org_name": "China Telecom Guangdong",
                "city": "Guangzhou",
                "dma_code": 0,
                "area_code": 0,
                "region": "30",
                "charset": 0,
                "country_slug": "CN (China)",
                "continent_code": "AS",
                "country_code3": "CHN",
                "country_name": "China",
                "postal_code": null,
                "longitude": 113.25,
                "country_code": "CN",
                "latitude": 23.11669921875
            },
            "address": "119.145.71.220"
        },
        {
            "country": "US (United States)",
            "activity": "Scanning Host",
            "geoip": {
                "org_name": "Google Cloud",
                "city": "Mountain View",
                "dma_code": 807,
                "area_code": 650,
                "region": "CA",
                "charset": 0,
                "country_slug": "US (United States)",
                "continent_code": "NA",
                "country_code3": "USA",
                "country_name": "United States",
                "postal_code": "94043",
                "longitude": -122.05740356445312,
                "country_code": "US",
                "latitude": 37.4192008972168
            },
            "address": "104.199.132.234"
        },
        {
            "country": "US (United States)",
            "activity": "Malicious Host",
            "geoip": {
                "org_name": "Hosting Solutions International",
                "city": "Saint Louis",
                "dma_code": 609,
                "area_code": 314,
                "region": "MO",
                "charset": 0,
                "country_slug": "US (United States)",
                "continent_code": "NA",
                "country_code3": "USA",
                "country_name": "United States",
                "postal_code": "63101",
                "longitude": -90.19219970703125,
                "country_code": "US",
                "latitude": 38.63119888305664
            },
            "address": "209.239.123.85"
        },
        {
            "country": "CA (Canada)",
            "activity": "Malicious Host",
            "geoip": {
                "org_name": "Rogers Cable",
                "city": null,
                "dma_code": 0,
                "area_code": 0,
                "region": null,
                "charset": 0,
                "country_slug": "CA (Canada)",
                "continent_code": "NA",
                "country_code3": "CAN",
                "country_name": "Canada",
                "postal_code": null,
                "longitude": -79.38719940185547,
                "country_code": "CA",
                "latitude": 43.64250183105469
            },
            "address": "72.142.11.30"
        },
        {
            "country": "US (United States)",
            "activity": "Malicious Host",
            "geoip": {
                "org_name": "Psychz Networks",
                "city": "Walnut",
                "dma_code": 803,
                "area_code": 909,
                "region": "CA",
                "charset": 0,
                "country_slug": "US (United States)",
                "continent_code": "NA",
                "country_code3": "USA",
                "country_name": "United States",
                "postal_code": "91789",
                "longitude": -117.85350036621094,
                "country_code": "US",
                "latitude": 34.01150131225586
            },
            "address": "45.34.1.229"
        },
        {
            "country": "CN (China)",
            "activity": "Scanning Host",
            "geoip": {
                "org_name": "China Telecom network in Wuhan city Hubei province",
                "city": "Wuhan",
                "dma_code": 0,
                "area_code": 0,
                "region": "12",
                "charset": 0,
                "country_slug": "CN (China)",
                "continent_code": "AS",
                "country_code3": "CHN",
                "country_name": "China",
                "postal_code": null,
                "longitude": 114.27339935302734,
                "country_code": "CN",
                "latitude": 30.58009910583496
            },
            "address": "219.140.16.71"
        },
        {
            "country": "Unknown",
            "activity": "Scanning Host",
            "geoip": {},
            "address": "185.130.5.224"
        },
        {
            "country": "RU (Russian Federation)",
            "activity": "Scanning Host",
            "geoip": {
                "org_name": "Rostelecom",
                "city": "Kolomna",
                "dma_code": 0,
                "area_code": 0,
                "region": "47",
                "charset": 0,
                "country_slug": "RU (Russian Federation)",
                "continent_code": "EU",
                "country_code3": "RUS",
                "country_name": "Russian Federation",
                "postal_code": "140400",
                "longitude": 38.77830123901367,
                "country_code": "RU",
                "latitude": 55.07939910888672
            },
            "address": "77.51.99.155"
        },
        {
            "country": "GB (United Kingdom)",
            "activity": "Malicious Host",
            "geoip": {
                "org_name": "Choopa, LLC",
                "city": "London",
                "dma_code": 0,
                "area_code": 0,
                "region": "H9",
                "charset": 0,
                "country_slug": "GB (United Kingdom)",
                "continent_code": "EU",
                "country_code3": "GBR",
                "country_name": "United Kingdom",
                "postal_code": "EC4N",
                "longitude": -0.09309999644756317,
                "country_code": "GB",
                "latitude": 51.514198303222656
            },
            "address": "104.238.185.50"
        },
        {
            "country": "PS (Palestinian Territory)",
            "activity": "Malicious Host",
            "geoip": {
                "org_name": "Hadara",
                "city": "Ramallah",
                "dma_code": 0,
                "area_code": 0,
                "region": "00",
                "charset": 0,
                "country_slug": "PS (Palestinian Territory)",
                "continent_code": "AS",
                "country_code3": "PSE",
                "country_name": "Palestinian Territory",
                "postal_code": null,
                "longitude": 35.20000076293945,
                "country_code": "PS",
                "latitude": 31.899999618530273
            },
            "address": "37.8.79.182"
        },
        {
            "country": "FR (France)",
            "activity": "Malicious Host",
            "geoip": {
                "org_name": "Internet Services",
                "city": null,
                "dma_code": 0,
                "area_code": 0,
                "region": null,
                "charset": 0,
                "country_slug": "FR (France)",
                "continent_code": "EU",
                "country_code3": "FRA",
                "country_name": "France",
                "postal_code": null,
                "longitude": 2.3499999046325684,
                "country_code": "FR",
                "latitude": 48.86000061035156
            },
            "address": "178.255.165.220"
        },
        {
            "country": "US (United States)",
            "activity": "Malicious Host",
            "geoip": {
                "org_name": "Psychz Networks",
                "city": "Walnut",
                "dma_code": 803,
                "area_code": 909,
                "region": "CA",
                "charset": 0,
                "country_slug": "US (United States)",
                "continent_code": "NA",
                "country_code3": "USA",
                "country_name": "United States",
                "postal_code": "91789",
                "longitude": -117.85350036621094,
                "country_code": "US",
                "latitude": 34.01150131225586
            },
            "address": "104.216.59.163"
        },
        {
            "country": "CN (China)",
            "activity": "Malicious Host",
            "geoip": {
                "org_name": "China Telecom Hubei",
                "city": "Wuhan",
                "dma_code": 0,
                "area_code": 0,
                "region": "12",
                "charset": 0,
                "country_slug": "CN (China)",
                "continent_code": "AS",
                "country_code3": "CHN",
                "country_name": "China",
                "postal_code": null,
                "longitude": 114.27339935302734,
                "country_code": "CN",
                "latitude": 30.58009910583496
            },
            "address": "221.232.241.198"
        },
        {
            "country": "CN (China)",
            "activity": "Malicious Host",
            "geoip": {
                "org_name": "China Telecom jiangsu province backbone",
                "city": "Nanjing",
                "dma_code": 0,
                "area_code": 0,
                "region": "04",
                "charset": 0,
                "country_slug": "CN (China)",
                "continent_code": "AS",
                "country_code3": "CHN",
                "country_name": "China",
                "postal_code": null,
                "longitude": 118.77780151367188,
                "country_code": "CN",
                "latitude": 32.06169891357422
            },
            "address": "222.186.34.226"
        },
        {
            "country": "US (United States)",
            "activity": "Malicious Host",
            "geoip": {
                "org_name": "Wholesale Data Center, LLC",
                "city": "Kansas City",
                "dma_code": 616,
                "area_code": 816,
                "region": "MO",
                "charset": 0,
                "country_slug": "US (United States)",
                "continent_code": "NA",
                "country_code3": "USA",
                "country_name": "United States",
                "postal_code": "64116",
                "longitude": -94.57350158691406,
                "country_code": "US",
                "latitude": 39.14720153808594
            },
            "address": "208.67.1.66"
        }
    ];

    var dataConfig = {
        "country": null,
        "activity": null,
        "geoip": {
            "org_name": null,
            "city": null,
            "dma_code": null,
            "area_code": null,
            "region": null,
            "charset": null,
            "country_slug": null,
            "continent_code": null,
            "country_code3": null,
            "country_name": null,
            "postal_code": null,
            "longitude": null,
            "country_code": null,
            "latitude": null
        },
        "address": null
    };

    var langData = [
        {
            "id": 0,
            "text": "Русский",
            "thData": {
                "country": "Страна",
                "activity": "activity",
                "org_name": "org_name",
                "city": "city",
                "dma_code": "dma_code",
                "area_code": "area_code",
                "region": "region",
                "charset": "charset",
                "country_slug": "country_slug",
                "continent_code": "continent_code",
                "country_code3": "country_code3",
                "country_name": "country_name",
                "postal_code": "postal_code",
                "longitude": "longitude",
                "country_code": "country_code",
                "latitude": "latitude",
                "address": "address"
            },
            "up": "вверх",
            "down": "вниз",
            "country": "Атакованные страны"
        },
        {
            "id": 1,
            "text": "English",
            "thData": {
                "country": "country",
                "activity": "activity",
                "org_name": "org_name",
                "city": "city",
                "dma_code": "dma_code",
                "area_code": "area_code",
                "region": "region",
                "charset": "charset",
                "country_slug": "country_slug",
                "continent_code": "continent_code",
                "country_code3": "country_code3",
                "country_name": "country_name",
                "postal_code": "postal_code",
                "longitude": "longitude",
                "country_code": "country_code",
                "latitude": "latitude",
                "address": "address"
            },
            "up": "up",
            "down": "down",
            "country": "Attacked countries"
        }
    ];

    var validData = [];

    var orderConfig = {
        order: "ASC",
        field: ""
    };

    var selected_lang = 0;

    var textArea = $("#textArea");




    $("#languageSelect").select2({
        data: langData,
        width: 200,
        minimumResultsForSearch: Infinity
    })
        .on("select2:select", function (e) {
        var selected_element = $(e.currentTarget);
        selected_lang = selected_element.val();

        tableHeadRender(langData, '#table', selected_lang);

        drawChart();
    });

    $("#addRow").click(addRow);

    $("#deleteRow").click(deleteRows);

    $("#download").click(downloadData);

    $("#upload").click(uploadData);

    $("#clear").click(clearTextArea);




    /*$.ajax({
        type: "GET",
        url: "./scripts/data.json",
        dataType: "json",
        success: function (data) {

            dataValidation(data, dataConfig);

            tableBodyRender(validData, '#table');

            textArea.val(JSON.stringify(validData));

        }
    });*/

    var dataValidation = function (data, config) {

        var transformedData = [];

        data.forEach(function (item) {

            var result = {};

            function transform(obj, config, res) {

                for (var key in config) {

                    if (config[key] !== null && typeof config[key] === 'object') {
                        res[key] = {};
                        transform(obj[key], config[key], res[key]);
                    }
                    else if (typeof obj[key] === 'undefined') {
                        res[key] = config[key];
                    }
                    else {
                        res[key] = obj[key];
                    }

                }

            }

            transform(item, config, result);

            transformedData.push(result);

        });

        validData = transformedData;

    };



    var dataSort = function (data, field) {

        if ( orderConfig.field === field ) {

            if ( orderConfig.order === "ASC" ) {
                orderConfig.order = "DESC";
            }
            else {
                orderConfig.order = "ASC";
            }

        }

        orderConfig.field = field;

        if (dataConfig.hasOwnProperty(field)) {

            if (orderConfig.order === 'ASC'){

                data.sort(function (a, b) {
                    if (a[field] > b[field]) {
                        return 1;
                    }
                    if (a[field] < b[field]) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                });

            }
            else {

                data.sort(function (a, b) {
                    if (a[field] < b[field]) {
                        return 1;
                    }
                    if (a[field] > b[field]) {
                        return -1;
                    }
                    // a должно быть равным b
                    return 0;
                });

            }

        }
        else {

            if (orderConfig.order === 'ASC'){

                data.sort(function (a, b) {

                    if (a.geoip[field] > b.geoip[field]) {
                        return 1;
                    }
                    if (a.geoip[field] < b.geoip[field]) {
                        return -1;
                    }
                    return 0;

                });

            }
            else {

                data.sort(function (a, b) {

                    if (a.geoip[field] < b.geoip[field]) {
                        return 1;
                    }
                    if (a.geoip[field] > b.geoip[field]) {
                        return -1;
                    }
                    return 0;

                });

            }

        }

        tableBodyRender(data, '#table');

    };

    var rowMoveUp = function (e) {

        if ( e.data.currentIndex > 0 ) {

            validData.splice(e.data.currentIndex - 1, 0, validData[e.data.currentIndex]);

            validData.splice(e.data.currentIndex + 1, 1);

            tableBodyRender(validData, '#table');

        }
    };

    var rowMoveDown = function (e) {

        if ( e.data.currentIndex < validData.length ) {

            validData.splice(e.data.currentIndex + 2, 0, validData[e.data.currentIndex]);

            validData.splice(e.data.currentIndex, 1);

            tableBodyRender(validData, '#table');

        }

    };

    var changedTableBodyCell = function (e) {
        e.data.target[e.data.prop] = this.value;

        drawChart();
    };

    var clickTableHeadCell = function (e) {
        dataSort(validData, e.data.prop);
    };

    function addRow() {

        var data = JSON.parse(JSON.stringify(dataConfig));

        validData.push(data);

        tableBodyRender(validData, '#table');

        drawChart();

    };

    function deleteRows() {

        $('#table tbody input:checked').each(function(i, elem) {
            validData.splice($(this).val(), 1);
        });

        tableBodyRender(validData, '#table');

        drawChart();

    };

    function downloadData() {

        textArea.val(JSON.stringify(validData));

    };

    function uploadData() {

        var data = JSON.parse(textArea.val());

        dataValidation(data, dataConfig);

        tableBodyRender(validData, '#table');

        drawChart();

    };

    function clearTextArea() {

        textArea.val('');

    };



    var tableBodyRender = function (data, selector) {

        var tableBody = $(document.createElement('tbody'));

        data.forEach(function (item, i) {

            tableBody.append(createTableBodyRow(item, i));

        });

        $(selector).find('tbody').remove();

        $(selector).append(
            tableBody
        );

    };

    var createTableBodyCell = function (value, obj, key) {

        var el = $(document.createElement('input'));

        if (typeof obj !== 'undefined' && typeof key !== 'undefined') {

            return $(document.createElement('td')).append(
                el.val(value).change({'target': obj, 'prop': key}, changedTableBodyCell)
            );

        }
        else {

            return $(document.createElement('td')).append(
                el.val(value)
            );

        }

    };

    var createTableBodyRow = function (row, index) {

        var tableRow = $(document.createElement('tr'));

        var upArrow = $(document.createElement('td')).click({currentIndex: index}, rowMoveUp).text('up');
        var downArrow = $(document.createElement('td')).click({currentIndex: index}, rowMoveDown).text('down');
        var checkbox = $(document.createElement('td')).append($(document.createElement('input')).prop("type", "checkbox").val(index));

        tableRow.append(checkbox);
        tableRow.append(upArrow);
        tableRow.append(downArrow);

        var objectPropertyCycle = function (obj) {

            for (var key in obj) {

                if (obj[key] !== null && typeof obj[key] === 'object') {
                    objectPropertyCycle(obj[key]);
                }
                else if (typeof obj[key] !== 'undefined') {
                    tableRow.append(createTableBodyCell(obj[key], obj, key));
                }
                else {
                    tableRow.append(createTableBodyCell(' '));
                }

            }

        };

        objectPropertyCycle(row);

        return tableRow;

    };



    var tableHeadRender = function (data, selector, lang) {

        var tableHead = $(document.createElement('thead'));

        tableHead.append(createTableHeadRow(data[lang].thData, lang));

        $(selector).find('thead').remove();

        $(selector).prepend(
            tableHead
        );

    };

    var createTableHeadCell = function (value, obj, key) {

        if (typeof obj !== 'undefined' && typeof key !== 'undefined') {

            return $(document.createElement('th')).text(value).click({'prop': key}, clickTableHeadCell);

        }
        else {

            return $(document.createElement('th')).text(value);

        }

    };

    var createTableHeadRow = function (row, lang) {

        var tableRow = $(document.createElement('tr'));

        var up = $(document.createElement('td')).text(langData[lang].up);
        var down = $(document.createElement('td')).text(langData[lang].down);
        var checkbox = $(document.createElement('td'));

        tableRow.append(checkbox);
        tableRow.append(up);
        tableRow.append(down);

        var objectPropertyCycle = function (obj) {

            for (var key in obj) {

                if (obj[key] !== null && typeof obj[key] === 'object') {
                    objectPropertyCycle(obj[key]);
                }
                else if (typeof obj[key] !== 'undefined') {
                    tableRow.append(createTableHeadCell(obj[key], obj, key));
                }
                else {
                    tableRow.append(createTableHeadCell(' '));
                }

            }

        };

        objectPropertyCycle(row);

        return tableRow;

    };



    tableHeadRender(langData, '#table', selected_lang);

    dataValidation(data, dataConfig);

    tableBodyRender(validData, '#table');

    textArea.val(JSON.stringify(validData));




/*------------ Chart block ------------*/

    // Load the Visualization API and the corechart package.
    google.charts.load('current', {'packages':['corechart']});

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');

        var resultObj = {};
        var result = [];

        validData.map(function(item){
            resultObj[item.country] = !resultObj[item.country] ? 1 : resultObj[item.country] + 1;
        });

        for (key in resultObj) {
            result.push([key, resultObj[key]]);
        }

        data.addRows(result);

        console.log(langData[selected_lang].country);

        // Set chart options
        var options = {
            'title': langData[selected_lang].country,
            width: 'inherit',
            height: 'inherit',
            //chartArea: {left: 0, top: 0, width: "100%", height: "100%"}
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);

        $(window).resize(function(){
            chart.draw(data, options);
        });
    }

});


