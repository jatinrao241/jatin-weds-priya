var dataSetForBasicData={
				"DateMarriage":"बृहस्पतिवार, <b>23</b> नवंबर <b>2023</b>",
				"CallingNumber":"8569911699",
				"SecondCallingNumber":"9416501001",
				"ThirdCallingNumber":"9466996400",
				"FourthCallingNumber":"8307671241",
				"WhatsAPPNumber":"8307671241",
				"SecondWhatsAPPNumber":"8569911699",
				"ThirdWhatsAPPNumber":"9416501001",
				"MailAddress":"jatinrao137@gmail.com",
				"BoyHomeAddressLink":"https://maps.app.goo.gl/qhBbvpcepF4WhEgo9",
				"BoyHomeAddressText":"सिलारपुर, नजदीक BSNL <br class='d-none d-sm-block'> Tower, महेंद्रगढ़ - अटेली रोड, <br class='d-none d-sm-block'> महेंद्रगढ़, हरियाणा - 123021",
				"DateHaldiMehandiRasam":"रविवार, दिनांक 19 नवंबर 2023",
				"DateLadiesSangeet":"बुधवार, दिनांक 22 नवंबर 2023",
				"DateBaaratWedding":"बृहस्पतिवार, दिनांक 23 नवंबर 2023",
				"BanquetHallLocationLink":"https://maps.app.goo.gl/U9FiFMReY2BWYrpY6",
				"BanquetHallAddress":'"सिलारपुर" महेंद्रगढ़ - अटेली रोड, महेंद्रगढ़, हरियाणा में संपन्न होंगे |',
				"BoyName":"जतिन यादव",
				"BoyDadiName":"श्रीमती माया देवी",
				"BoyDadaName":"स्व. श्री बिशनसिंह ex. सरपंच",
				"BoyMotherName":"श्रीमती सुमन देवी",
				"BoyFatherName":"श्री मनोज कुमार",
				"GirlName":"प्रिया यादव",
				"GirlMotherName":"श्रीमती संतोष देवी",
				"GirlFatherName":"स्व. श्री मनोज कुमार",
				"GirlHomeAddressLink":"https://maps.app.goo.gl/KkWnWeKsJQjQhaB6A",
				"GirlHomeAddressText":"मालड़ा, मालड़ा - बवाना रोड, महेंद्रगढ़, हरियाणा",

			}
$(document).ready(function(){
			$(".jQClassForPhoneNumberAnchor").attr("href","tel:+91 "+dataSetForBasicData.CallingNumber);
			$(".jQClassForPhoneNumber").html("+91 "+dataSetForBasicData.CallingNumber);

			// second calling number
			$(".jQClassForSecondPhoneNumberAnchor").attr("href","tel:+91 "+dataSetForBasicData.SecondCallingNumber);
			$(".jQClassForSecondPhoneNumber").html("+91 "+dataSetForBasicData.SecondCallingNumber);

			$(".jQClassForThirdPhoneNumberAnchor").attr("href","tel:+91 "+dataSetForBasicData.ThirdCallingNumber);
			$(".jQClassForFourthPhoneNumberAnchor").attr("href","tel:+91 "+dataSetForBasicData.FourthCallingNumber);

			$(".jQClassForBoyHomeAddressLink").attr("href",dataSetForBasicData.BoyHomeAddressLink);
			$(".jQClassForBoyHomeAddressText").html(""+ dataSetForBasicData.BoyHomeAddressText+"");

			$(".jQClassForWhatsAPPNumber").attr("href","https://wa.me/91"+dataSetForBasicData.WhatsAPPNumber);
			$(".jQClassForSecondWhatsAPPNumber").attr("href","https://wa.me/91"+dataSetForBasicData.SecondWhatsAPPNumber);
			$(".jQClassForThirdWhatsAPPNumber").attr("href","https://wa.me/91"+dataSetForBasicData.ThirdWhatsAPPNumber);
			$(".jQClassForEmailAddress").attr("href","Mailto:"+dataSetForBasicData.MailAddress);
			$(".jQClassForMessageNumber").attr("href","sms:+91 "+dataSetForBasicData.CallingNumber);
			$(".jQClassForSecondMessageNumber").attr("href","sms:+91 "+dataSetForBasicData.SecondCallingNumber);
			$(".jQClassForThirdMessageNumber").attr("href","sms:+91 "+dataSetForBasicData.ThirdCallingNumber);
			$(".jQClassForFourthMessageNumber").attr("href","sms:+91 "+dataSetForBasicData.FourthCallingNumber);
			$(".jQClassForDateMarriage").html(dataSetForBasicData.DateMarriage);
			$(".jQClassForDateHaldiMehandiRasam").html(dataSetForBasicData.DateHaldiMehandiRasam);
			$(".jQClassForDateBaaratWedding").html(dataSetForBasicData.DateBaaratWedding);
			$(".jQClassForDateLadiesSangeet").html(dataSetForBasicData.DateLadiesSangeet);
			$(".jQClassForBanquetHallLocationAnchor").attr("href",dataSetForBasicData.BanquetHallLocationLink);
			$(".jQClassForBanquetHallLocationText").html('"महिला संगीत एवं प्रीतिभोज" कार्यक्रम '+ dataSetForBasicData.BanquetHallAddress+"");
			$(".jQClassForBoyName").html("चि . "+dataSetForBasicData.BoyName);
			$(".jQClassForBoyDadiDadaName").html("सुपौत्र "+dataSetForBasicData.BoyDadiName+" एवं "+dataSetForBasicData.BoyDadaName+"");
			$(".jQClassForBoyMotherFatherName").html("सुपुत्र "+dataSetForBasicData.BoyMotherName+" एवं "+dataSetForBasicData.BoyFatherName+"");
			$(".jQClassForBoyMotherName").html(""+dataSetForBasicData.BoyMotherName);
			$(".jQClassForBoyFatherName").html(""+dataSetForBasicData.BoyFatherName);
			$(".jQClassForBoyDadaName").html(""+dataSetForBasicData.BoyDadaName);
			$(".jQClassForGirlName").html("आयु . "+dataSetForBasicData.GirlName);
			$(".jQClassForGirlMotherFatherName").html("सुपुत्री "+dataSetForBasicData.GirlMotherName+" एवं "+dataSetForBasicData.GirlFatherName+" जी ");
			$(".jQClassForGirlHomeAddressLink").attr("href",dataSetForBasicData.GirlHomeAddressLink);
			$(".jQClassForGirlHomeAddressText").html("निवासी - "+dataSetForBasicData.GirlHomeAddressText+"");
			
		});

// music player
$("body,html").bind("touchstart touchmove scroll mousedown DOMMouseScroll mousewheel keyup", function(e){
				
    if($(".play-pause-btn").attr("aria-label")=="Play")
    {
        
        try {
            $(".play-pause-btn").click();
            NumberOfClick=1;
        }
        catch(err) {
            alert("error");
            NumberOfClick=0;
        }
        finally {
            
        }
        
        
    }
    
    
});