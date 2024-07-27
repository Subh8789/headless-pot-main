const express = require('express'),
    request = require('request'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express(); path = require("path");

app.set('port', process.env.PORT || 3004);

    // place holder for the data
app.use(bodyParser.json());

// register static files and folders
app.use(express.static(path.join(__dirname, "/www")));
app.use(express.static(path.resolve(__dirname, "./client/build")));
    
var myLimit = typeof(process.argv[2]) != 'undefined' ? process.argv[2] : '100kb';
console.log('Using limit: ', myLimit);
app.use(bodyParser.json({limit: myLimit}));

app.use(cors({ origin: true, credentials: true }));

let savedFavSoldResult= {
    "honId": "",
    "language": {
        "isoCode": "",
        "name": ""
    },
    "soldToAccounts": [
        {
            "addressLine1": "PO BOX 50",
            "city": "TROY GROVE",
            "country": "united states",
            "currencyList": {
                "country": {
                    "name": "united states",
                    "isoCode": "US"
                },
                "currency_Info": [
                    {
                        "name": "USD",
                        "isoCode": "USD"
                    }
                ]
            },
            "distributionChannel": "10",
            "division": "10",
            "erpId": "BRV900",
            "id": "a1I1P000008dymjUAA",
            "isDeactivated": "",
            "isDefault": true,
            "isDelete": "",
            "isSelected": "Y",
            "name": "Technisand Inc",
            "postalCode": "61372",
            "salesArea": "US HPS Sales Org-10-10",
            "salesOrg": "1109",
            "siebelRowId": "1-HSIFJR",
            "soldToNumber": "0000289116",
            "soldToToolAccess": [
                ""
            ],
            "type": "SAP Sold To",
            "Region": "AMER",
            "AccountId": "0011a00000gQKaPAAW",
            "AccountSite": "Troy Grove"
        },
        {
            "addressLine1": "Darlington Road",
            "city": "Northallerton",
            "country": "united kingdom",
            "currencyList": {
                "country": {
                    "name": "united kingdom",
                    "isoCode": "GB"
                },
                "currency_Info": [
                    {
                        "name": "GBP",
                        "isoCode": "GBP"
                    }
                ]
            },
            "distributionChannel": "10",
            "division": "10",
            "erpId": "BRV900",
            "id": "a1I1P000008dyqfUAA",
            "isDeactivated": "",
            "isDefault": false,
            "isDelete": "",
            "isSelected": "Y",
            "name": "Micronized Food Products",
            "postalCode": "DL6 2NW",
            "salesArea": "UK HPS Sales Org-10-10",
            "salesOrg": "2593",
            "siebelRowId": "1-22C83-2029",
            "soldToNumber": "0000002846",
            "soldToToolAccess": [
                ""
            ],
            "type": "SAP Sold To",
            "Region": "EMEA",
            "AccountId": "0011a00000gQJZwAAO",
            "AccountSite": "Northallerton"
        },
        {
            "addressLine1": "Tern Valley Business Park",
            "city": "Market Drayton",
            "country": "united kingdom",
            "currencyList": {
                "country": {
                    "name": "united kingdom",
                    "isoCode": "GB"
                },
                "currency_Info": [
                    {
                        "name": "GBP",
                        "isoCode": "GBP"
                    }
                ]
            },
            "distributionChannel": "10",
            "division": "10",
            "erpId": "BRV900",
            "id": "a1I1P000008dzMTUAY",
            "isDeactivated": "",
            "isDefault": false,
            "isDelete": "",
            "isSelected": "Y",
            "name": "TM UK Production Ltd",
            "postalCode": "TF9 3SQ",
            "salesArea": "UK HPS Sales Org-10-10",
            "salesOrg": "2593",
            "siebelRowId": "1-22C83-2171",
            "soldToNumber": "0000002709",
            "soldToToolAccess": [
                ""
            ],
            "type": "SAP Sold To",
            "Region": "EMEA",
            "AccountId": "0011a00000h2HEFAA2",
            "AccountSite": "Market Drayton"
        },
        {
            "addressLine1": "Wensleydale Creamery",
            "city": "North Yorkshire",
            "country": "united kingdom",
            "currencyList": {
                "country": {
                    "name": "united kingdom",
                    "isoCode": "GB"
                },
                "currency_Info": [
                    {
                        "name": "GBP",
                        "isoCode": "GBP"
                    }
                ]
            },
            "distributionChannel": "10",
            "division": "10",
            "erpId": "BRV900",
            "id": "a1I1P000009DvfwUAC",
            "isDeactivated": "",
            "isDefault": false,
            "isDelete": "",
            "isSelected": "Y",
            "name": "Wensleydale Dairy Products Ltd",
            "postalCode": "DL8 3RN",
            "salesArea": "UK HPS Sales Org-10-10",
            "salesOrg": "2593",
            "siebelRowId": "1-22C83-389",
            "soldToNumber": "0000004063",
            "soldToToolAccess": [
                ""
            ],
            "type": "SAP Sold To",
            "Region": "EMEA",
            "AccountId": "0011a00000gQKU3AAO",
            "AccountSite": "Kirkby Malzeard"
        }
    ],
    "status": "",
    "userRole": "",
    "userType": ""
}

app.all('/pif/api/*', function (req, res, next) {
    
    if (req.method === 'OPTIONS') {
        // CORS Preflight
        //res.send();
    } 
   /* else if(req.url=="/pif/api/soldto/favorite/v1/user?appId=231"){
        res.send(savedFavSoldResult);
    }*/
    else {

        var targetURL = "https://qpublish-hbt.aws.aem.honeywell.com";
        
        var token= "ewogICJ0eXAiIDogIkpXVCIsCiAgImFsZyIgOiAiUlMyNTYiCn0.ewogICJkb21haW4iIDogIjIzOTEiLAogICJhcHBJZCIgOiAiMjM5IiwKICAiaXNzIiA6ICJidWlsZGluZ3NidC5zdGFnZS5ob25leXdlbGwuY29tIiwKICAianRpIiA6ICIxZmExNTVjMi03MDhjLTRiYjItODIyMS02NjY5ZTNjMzJkYTkiLAogICJzdWIiIDogIjc1YjE0ZmY3LWRlYTctNDJlMS1iNzBkLTU5NmM2YmFhNDVhMiIsCiAgImlhdCIgOiAxNzIyMDgwNTEzLAogICJleHAiIDogMTcyMjA4MjMxMwp9.O6MXxR2_bWXGwG4egYwSUhZHWAPVTXo8w4YJB4vW-M-Yone4C_2CeSw5EpBmSsO54FDR8PH4lz48Vg_hwKKBRFIE32ivtRjzY2I1R9tWlNiiijgL1-x9tnq8mtA2ffKd-VGM_S3kDmRaB1nyC_r5Kamoi6Zr0b2aZ7ZkKpukMgJYdVssJMXWxKLBtFWXoIfgINFa-UpTdhQlCgAUTLcD-Zo3ciKNHTRxHns8aSdUsP61iplgw1RT50I0gOuufSG-jjKYrzEd2hAS69VyDXa45tto9au-pszEVJER7feKj8i9OS1VyAVx3PFB8y51M25t2PHcrTMM9M_9g5TbAINYDg"
        var cookieVal="2391-token="+token;

        request(
            {   url: targetURL + req.url, 
                method: req.method, 
                json: req.body, 
                headers: {
                    'Authorization': "Bearer " + token ,
                    'Cookie': cookieVal,
                },
                
            },
            function (error, response, body) {
                if (error) {
                    console.error('error: ' + response.statusCode)
                }
                console.log(req.url ,"->");
                console.log(body);
            })
            .pipe(res);
    }
});

// listen server
app.get('*', (req, res) => { 
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });


app.listen(app.get('port'), function () {
    console.log('Proxy server listening on port ' + app.get('port'));
});