$('#test').click(function(e) {

    e.preventDefault();

    var soapMessage = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" targetNamespace="http://impl.services.infotusws.tussam.com/" xmlns:ns1="http://services.infotusws.tussam.com/" xmlns:ns2="http://schemas.xmlsoap.org/soap/http" ><soap:Body><getInfoNodo xmlns="http://services.infotusws.tussam.com/"><codigo xmlns="">777</codigo></getInfoNodo></soap:Body></soap:Envelope>'

    function make_base_auth(user, password) {
        var tok = user + ':' + password;
        var hash = btoa(tok);
        return "Basic " + hash;
    }

    /*$.ajax({
     url : "http://www.infobustussam.com:9005/InfoTusWS/services/InfoTus?WSDL",
     type : "POST",
     data : soapMessage,
     dataType: "xml",
     crossDomain: true,
     contentType: 'text/xml',
     processData: false,
     cache: false,
     success : processSuccess,
     error : processError,
     beforeSend: function(xhr) {
     xhr.setRequestHeader("deviceid", "65702CDB-FFEE-4943-8A4C-8EDAD9EEABCF");
     xhr.setRequestHeader("Authorization", make_base_auth("infotus-usermobile", "2infotus0user1mobile2"));
     xhr.setRequestHeader("SOAPAction", "");
     }
     });*/

    function processSuccess(data, status, req) {
        if (status == "success")
            $("#feedback").text($(req.responseXML).find("HelloResult").text());
    }

    function processError(data, status, req) {
        alert(req.responseText + " " + status);
    }


    var sendXML = function(){

        /*var xmldoc = new ActiveXObject("Microsoft.XMLDOM");
         xmldoc.loadXML(soapMessage);

         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");

         xmlhttp.onreadystatechange = state_Change;

         xmlhttp.open("POST", "http://www.infobustussam.com:9005/InfoTusWS/services/InfoTus?WSDL", true, "infotus-usermobile", "2infotus0user1mobile2");

         xmlhttp.setRequestHeader ("SOAPAction", "");

         xmlhttp.setRequestHeader ("Content-Type", "text/xml");

         xmlhttp.setRequestHeader("deviceid", "65702CDB-FFEE-4943-8A4C-8EDAD9EEABCF");

         xmlhttp.send(xmldoc);



         $("#feedback").text(xmlhttp.responseXML.xml);*/


        var xhr = new XMLHttpRequest();
        xhr.open("POST", "http://www.infobustussam.com:9005/InfoTusWS/services/InfoTus", true, "infotus-usermobile", "2infotus0user1mobile2");
        xhr.onreadystatechange = function(event) {
            var caca = null;
        };

        xhr.setRequestHeader("deviceid", "65702CDB-FFEE-4943-8A4C-8EDAD9EEABCF");
        //xhr.setRequestHeader("Authorization", make_base_auth("infotus-usermobile", "2infotus0user1mobile2"));
        xhr.setRequestHeader("SOAPAction", "");
        xhr.overrideMimeType("text/xml");
        //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        //xhr.setRequestHeader ("Post", "/InfoTusWS/services/InfoTus?WSDL HTTP/1.1");
        xhr.responseType = "text";
        xhr.send(soapMessage);
    }


    sendXML();
});