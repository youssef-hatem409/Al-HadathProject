// ***************************************************************************************************************************
//--------------------<-- part of currency --->--------------------------------------------------------------------
// *************************************************************************************************************************

var currencyApiKey = "0113695654fbdac04c149d44";
var curencyCountryName = "USA";
var curencyCountryName = "Eur";
var currencyApiUrl = `https://v6.exchangerate-api.com/v6/${currencyApiKey}/latest/EGP`;

// convert data from string into json   
$.ajax({
    url:currencyApiUrl,
    type:'get',
    dataType:'json',
    success:function(data){
        console.log(data);

        var currencytr1=document.createElement('tr');//create row1
        var currencytr2=document.createElement('tr');//create row2
        var currencytr3=document.createElement('tr');//create row3
        var currencytr4=document.createElement('tr');//create row4
        var currencytr5=document.createElement('tr');//create row5

        

        var td_EGP_price=document.createElement('td');//create td1 
        var td_EUR_price=document.createElement('td');//create td2
        var td_SAR_price=document.createElement('td');//create td3
        var td_GBP_price=document.createElement('td');//create td4
        var td_KWD_price=document.createElement('td');//create td5

        
         
         
        var td_Name_EGP=document.createElement('td');//create td1 name
        var td_Name_EUR=document.createElement('td');//create td2 name
        var td_Name_SAR=document.createElement('td');//create td3 name
        var td_Name_GBP=document.createElement('td');//create td4 name
        var td_Name_KWD=document.createElement('td');//create td5 name
       
        
        td_Name_EGP.innerHTML = `<img src="image/egp.jpg" alt="EGP" style="width:50px; height:50px; margin-right:8px;"> EGP`;
        td_Name_EUR.innerHTML = `<img src="image/eur.webp" alt="EUR" style="width:50px; height:50px; margin-right:8px;"> EUR`;
        td_Name_SAR.innerHTML = `<img src="image/sar.png" alt="SAR" style="width:50px; height:50px; margin-right:8px;"> SAR`;
        td_Name_GBP.innerHTML = `<img src="image/gbp.png" alt="GBP" style="width:50px; height:50px; margin-right:8px;"> GBP`;
        td_Name_KWD.innerHTML = `<img src="image/kwd.png" alt="KWD" style="width:50px; height:50px; margin-right:8px;"> KWD`;


        
        
        var currencyEGP=data.conversion_rates.EGP;//value of cuurency egp
        var currencyEUR=data.conversion_rates.EUR;//value of cuurency eur
        var currencySAR=data.conversion_rates.SAR;//value of cuurencysar
        var currencyGBP=data.conversion_rates.GBP;//value of cuurency gbp
        var currencyKWD=data.conversion_rates.KWD;//value of cuurency kwd
       
         var base='EGP';
        
        td_EGP_price.innerHTML = `${currencyEGP}  ${base}`;
        td_EUR_price.innerHTML = `${currencyEUR}  ${base}`;
        td_SAR_price.innerHTML = `${currencySAR}  ${base}`;
        td_GBP_price.innerHTML = `${currencyGBP}  ${base}`;
        td_KWD_price.innerHTML = `${currencyKWD}  ${base}`;

        currencytr1.appendChild(td_Name_EGP);//put row td_Name inside it
        currencytr2.appendChild(td_Name_EUR);//put row td_Name inside it
        currencytr3.appendChild(td_Name_SAR);//put row td_Name inside it
        currencytr4.appendChild(td_Name_GBP);//put row td_Name inside it
        currencytr5.appendChild(td_Name_KWD);//put row td_Name inside it
       
       currencytr1.appendChild(td_EGP_price );//put row td_EGP_price inside it
       currencytr2.appendChild(td_EUR_price );//put row td_EGP_price inside it
       currencytr3.appendChild(td_SAR_price );//put row td_EGP_price inside it
       currencytr4.appendChild(td_GBP_price );//put row td_EGP_price inside it
       currencytr5.appendChild(td_KWD_price );//put row td_EGP_price inside it
       
       document.querySelector('table').appendChild(currencytr1);//put tr(row)inside table
       document.querySelector('table').appendChild(currencytr2);//put tr(row)inside table
       document.querySelector('table').appendChild(currencytr3);//put tr(row)inside table
       document.querySelector('table').appendChild(currencytr4);//put tr(row)inside table
       document.querySelector('table').appendChild(currencytr5);//put tr(row)inside table
        
    },
    error:function(){
        console.log('error');
    }
        });


// // ***************************************************************************************************************************
// //--------------------<-- part of weather --->--------------------------------------------------------------------
// // *************************************************************************************************************************

var weatherApiKey = '699d680d5db248b82ef2ae80283c5812';
var cityName = 'Cairo';
var countryCode = 'EG';

var weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryCode}&appid=${weatherApiKey}&units=metric`;
console.log(weatherURL);

$.ajax({
    url: weatherURL,
    type: 'get',
    dataType: 'json',
    success: function(dataWeather) {
        console.log(dataWeather);

        // Function to set background image based on time
        function switchImageByTime() {
            const hour = new Date().getHours();
            const morningImage = 'image/w1.jpg';
            const nightImage = 'image/w2.jpg';
            const weatherSection = $('#weather');
            const weatherh1 = $('#weather h1');
            const weatherp = $('#weather p');
            const weatherh4 = $('#weather h4');

            if (hour >= 6 && hour < 18) {
                weatherSection.css('background-image', `url(${morningImage})`);
                weatherh1.css('color', 'rgba(20, 19, 19, 1)');
                weatherp.css('color', 'rgba(20, 19, 19, 1)');
                weatherh4.css('color', 'rgba(20, 19, 19, 1)');
            } else {
                weatherSection.css('background-image', `url(${nightImage})`);
                weatherh1.css('color', 'rgba(14, 4, 4, 0.6)');
                weatherp.css('color', 'rgba(14, 4, 4, 0.6)');
                weatherh4.css('color', 'rgba(14, 4, 4, 0.6)');
            }
            weatherSection.css({
                'background-size': 'cover',
                'background-position': 'center',
                'background-repeat': 'no-repeat'
            });
        }

        switchImageByTime();

        // Update temperature
        var temp = dataWeather.main.temp;
        $('#degree h1').html(temp + '&deg;C');

        // Update weather icon
        var icons = dataWeather.weather[0].icon;
        var weatherICONS = `https://openweathermap.org/img/wn/${icons}@2x.png`;
        $('#degree img').attr('src', weatherICONS);

        // Update city name
        var city = dataWeather.name;
        $('#degree p').text(city);

        // Update humidity
        var humidity = dataWeather.main.humidity;
        $('#humidity-value').text(humidity + '%');
    },
    error: function() {
        console.log('Error fetching weather data');
    }
});

// ***************************************************************************************************************************
// --------------------<--     part of     News     --->--------------------------------------------------------------------
// *************************************************************************************************************************

var apiKeyNews2 = 'pub_3223f1c815734685a710f9b8f8e27ac6';
var source_country = "eg";
var language = "ar";
var date = "2025-08-22";
var urlApiNews2 = `https://newsdata.io/api/1/latest?apikey=${apiKeyNews2}&language=${language}&country=${source_country}`;

$.ajax({
    url: urlApiNews2,
    type: 'get',
    dataType: 'json',
    success: function(data) {
        console.log(data);

        // First news item
        var newsItem1 = data.results[6];
        $('#s1 img').attr('src', newsItem1.image_url);
        $('#s1 h2').text(newsItem1.title);
        $('#s1 a').attr('href', newsItem1.link).attr('target', '_blank');

        // Second news item
        var newsItem2 = data.results[5];
        $('#s2 img').attr('src', newsItem2.image_url);
        $('#s2 h2').text(newsItem2.title);
        $('#s2 a').attr('href', newsItem2.link).attr('target', '_blank');

        // Third news item
        var newsItem3 = data.results[2];
        $('#s3 img').attr('src', newsItem3.image_url);
        $('#s3 h2').text(newsItem3.title);
        $('#s3 a').attr('href', newsItem3.link).attr('target', '_blank');

        // Fourth news item
        var newsItem4 = data.results[8];
        $('#s4 img').attr('src', newsItem4.image_url);
        $('#s4 h2').text(newsItem4.title);
        $('#s4 a').attr('href', newsItem4.link).attr('target', '_blank');
        
        // Fifth news item
        var newsItem5 = data.results[1];
        $('#s5 img').attr('src', newsItem5.image_url);
        $('#s5 h2').text(newsItem5.title);
        $('#s5 a').attr('href', newsItem5.link).attr('target', '_blank');
        
        // Sixth news item
        var newsItem6 = data.results[9];
        $('#s6 img').attr('src', newsItem6.image_url);
        $('#s6 h2').text(newsItem6.title);
        $('#s6 a').attr('href', newsItem6.link).attr('target', '_blank');

        // Seventh news item
        var newsItem7 = data.results[4];
        $('#s7 img').attr('src', newsItem7.image_url);
        $('#s7 h2').text(newsItem7.title);
        $('#s7 a').attr('href', newsItem7.link).attr('target', '_blank');

        // Eighth news item
        var newsItem8 = data.results[3];
        $('#s8 img').attr('src', newsItem8.image_url);
        $('#s8 h2').text(newsItem8.title);
        $('#s8 a').attr('href', newsItem8.link).attr('target', '_blank');

        // Ninth news item
        var newsItem9 = data.results[6];
        $('#s9 img').attr('src', newsItem9.image_url);
        $('#s9 h2').text(newsItem9.title);
        $('#s9 a').attr('href', newsItem9.link).attr('target', '_blank');
    },
    error: function(xhr, status, error) {
        console.error("An error occurred:", status, error);
    }
});