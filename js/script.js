/***********************************************/
/* TOGGLE PREVIEW DESKTOP/MOBILE VIEW   */
/* **********************************************/

$("#toggle_view").on('click',function(){
  $("#preview").toggleClass('change-view');
  $(this).text(($(this).text() == 'Mobile View') ? 'Desktop View' :'Mobile View');
})



/***********************************************/
/* COPY PASTE   */
/* **********************************************/

function copyHtml(element) {
  var range = document.createRange();
  range.selectNode(document.getElementById("code"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges();// to deselect
}

function copyCss(element) {
  var range = document.createRange();
  range.selectNode(document.getElementById("css"));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges();// to deselect
}


$(function () {
 thisyear = new Date().getFullYear();
 $('#year').text(thisyear);
});
/***********************************************/
/* FAUX ABSOLUTE    */
/* **********************************************/


(function($){
var imgUrl, 
imgWidth, 
imgHeight,
mClass,
divClass,
bgFallbackColor, 
mediaQuery,
desktopTopPosition,
alignCenter,
innerDivWidth, 
innerDivbgColor,
desktopCenter,
gangaPosition,
mobileTopPosition,
innerDivMobWidth,
generateCode, 
generatePreview, 
generateCss,
vmlDesktopCenter,
innerDivMobileWidthPercent,
vmlTopPosition,
imgLoad,
originalWidth,
originalHeight,
newWidth,
vmlDesktopCenter;
 


 function update(){ 
    //general settings
    imgUrl = $('#imgUrl').val();
    imgWidth = $('#imgWidth').val(); 
    mClass = $('#mClass').val();
    divClass = $('#divClass').val();
    bgFallbackColor = $('#bgFallbackColor').val();
    mediaQuery = $('#mediaQuery').val();
    imgHeight=$('#preview img').height;
    //desktop settings
    desktopTopPosition = $('#desktopTopPosition').val();
    innerDivWidth = $('#innerDivWidth').val();
    if( $('#backgroundColor').is(':checked')){
        $('#backgroundInput').show();
        innerDivbgColor = 'background-color:'+$('#innerDivbgColor').val()+';';
    }else{
        $('#backgroundInput').hide();
        innerDivbgColor = '';
    }

    //mobile settings
    mobileTopPosition = $('#mobileTopPosition').val();
    innerDivMobWidth = $('#innerDivMobWidth').val()+'px';
    innerDivMobileWidthPercent =  Math.ceil(innerDivWidth / mediaQuery *100)+'%';
    vmlTopPosition = Math.ceil(originalHeight - desktopTopPosition);
console.log(originalHeight);
console.log(vmlTopPosition);
    if( $('#desktopCenter').is(':checked')){
         gangaPosition ='0';
    }else{
        gangaPosition=($('#mobileTopPosition').val() / 2)+'px';
    }
 
  
    if($('#desktopCenter').is(':checked') && $('#mobileCenter').is(':checked')){
    // align='center';
    vmlDesktopCenter='mso-position-horizontal:center;';
    generatePreview='\n'
    +'<style>\n'
    +'#preview{\n'
    +'   container-type: inline-size;  \n'
    +'}\n'
    +'.align{\n'
    +'  text-align:center;\n'
    +'}\n'
    +'.'+mClass+' img{\n'
    +'    margin:0 auto !important;\n'
    +'}\n'
    +'.'+divClass+'{\n'
    +'    margin:0 auto !important;\n'
    +'}\n'
    +'@container (inline-size < '+mediaQuery+'px) { \n'
    +' .'+mClass+' {\n'
    +'    max-height:'+mobileTopPosition+'px !important;  \n'
    +'     margin-top:0 !important;\n'
    +'  }\n'
    +' .'+divClass+' table{\n'
    +'    max-width:'+innerDivMobWidth+' !important;\n'
    +'  }\n'
    +'}\n'
    +'</style>\n'
    generateCss ='&lt;style&gt;<br/>.align{<br/>  text-align:center;<br/>}<br/>.'+mClass+' img{<br/>    margin:0 auto !important;<br/>}<br/>.'+divClass+'{<br/>    margin:0 auto !important;<br/>}<br/>@media screen and (max-width:'+mediaQuery+'px) {<br/> .'+mClass+' {<br/>    max-height:'+mobileTopPosition+'px !important;  <br/>     margin-top:0 !important;<br/>  }<br/> .'+divClass+' table{<br/>    max-width:'+innerDivMobWidth+' !important;<br/>  }<br/>}<br/>&lt;/style&gt;';

    }else if($('#desktopCenter').is(":not(:checked)") && $('#mobileCenter').is(':checked')){
// align='left';
    vmlDesktopCenter = '';
    generatePreview='\n'
    +'<style>\n'
    +' #preview{\n'
    +'   container-type: inline-size;   \n'
    +'}\n'
    +'.align{\n'
    +'  text-align:left !important;\n'
    +'}\n'
    +'.'+divClass+'{\n'
    +'  margin-top:0 !important;\n'
    +'}\n'

    +'@container (inline-size < '+mediaQuery+'px) {\n'
    +'  .align{\n'
    +'    text-align:center !important;\n'
    +'  }\n'
    +'  .'+mClass+' {\n'
    +'    max-height:'+mobileTopPosition+'px !important;\n'
    +'    margin:0 auto !important;  \n'
    +'  }\n'
    +'  .'+mClass+' img {\n'
    +'     margin:0 auto !important;\n'
    +'  } \n'
    +' .'+divClass+'{\n'
    +'    margin:0 auto !important;\n'
    +'  }\n'
    +'   .'+divClass+' table{\n'
    +'      max-width:'+innerDivMobWidth+' !important; \n'
    +'  }\n'
    +'}\n'
    +'</style>\n'
    generateCss ='&lt;style&gt;<br/>.align{<br/>  text-align:left !important;<br/>}<br/>.'+divClass+'{<br/>  margin-top:0 !important;<br/>}<br/>@media screen and (max-width:'+mediaQuery+'px) {<br/>  .align{<br/>    text-align:center !important;<br/>  }<br/>  .'+mClass+' {<br/>    max-height:'+mobileTopPosition+'px !important;<br/>    margin:0 auto !important;  <br/>  }<br/>  .'+mClass+' img {<br/>     margin:0 auto !important;<br/>  } <br/> .'+divClass+'{<br/>    margin:0 auto !important;<br/>  }<br/>   .'+divClass+' table{<br/>      max-width:'+innerDivMobWidth+' !important; <br/>  }<br/>}<br/>&lt;/style&gt;';

    }else if($('#desktopCenter').is(":not(:checked)") && $('#mobileCenter').is(":not(:checked)")){
    // align='left';
    vmlDesktopCenter = '';
    generatePreview='\n'
    +'<style>\n'
    +' #preview{\n'
    +'   container-type: inline-size;\n'
    +'}\n'
    +'.align{\n'
    +'  text-align:left !important;\n'
    +'}\n'

    +'.'+divClass+'{\n'
    +'  margin-top:0 !important;\n'
    +'}\n'
    +'@container (inline-size < '+mediaQuery+'px) {\n'
    +'  .'+mClass+' {\n'
    +'    max-height:'+mobileTopPosition+'px !important;\n'
    +'  }\n'
    +' .'+divClass+'{\n'
    +'    margin-top:0 !important;\n'
    +'  }\n'
    +'  .'+divClass+' table{\n'
    +'    max-width:'+innerDivMobWidth+' !important;\n'
    +'  }\n'
    +'}\n'
    +'</style>\n'
    generateCss='&lt;style&gt;<br/>.align{<br/>  text-align:left !important;<br/>}<br/>.'+divClass+'{<br/>  margin-top:0 !important;<br/>}<br/>@media screen and (max-width:'+mediaQuery+'px) {<br/>  .'+mClass+' {<br/>    max-height:'+mobileTopPosition+'px !important;<br/>  }<br/> .'+divClass+'{<br/>    margin-top:0 !important;<br/>  }<br/>  .'+divClass+' table{<br/>    max-width:'+innerDivMobWidth+' !important;<br/>  }<br/>}<br/>&lt;/style&gt;';

    }else if($('#desktopCenter').is(':checked') && $('#mobileCenter').is(":not(:checked)")){
    // align='center';
    vmlDesktopCenter='mso-position-horizontal:center;';
    generatePreview='\n'
    +'<style>\n'
    +'#preview{\n'
    +'   container-type: inline-size;\n'
    +'}\n'
    +'.align{\n'
    +'  text-align:center;\n'
    +'}\n'
    +'.'+mClass+'{\n'
    +'    margin:0 auto !important;\n'
    +'}\n'
    +'.'+divClass+'{\n'
    +'    margin:0 auto !important;\n'
    +'}\n'
    +'@container (inline-size < '+mediaQuery+'px) {\n'
    +'   .align{\n'
    +'    text-align:left !important;\n'
    +'  }\n'
    +'  .'+mClass+'{\n'
    +'    max-height:'+mobileTopPosition+'px !important;\n'
    +'  }\n'
    +' .'+divClass+'{\n'
    +'    margin-top:0 !important;\n'
    +'  }\n'
    +'  .'+divClass+' table{\n'
    +'    max-width:'+innerDivMobWidth+' !important;\n'
    +'  }\n'
    +'}\n'
    +'</style>\n'
    generateCss='&lt;style&gt;<br/>.align{<br/>  text-align:center;<br/>}<br/>.'+mClass+'{<br/>    margin:0 auto !important;<br/>}<br/>.'+divClass+'{<br/>    margin:0 auto !important;<br/>}<br/>@media screen and (max-width:'+mediaQuery+'px) {<br/>   .align{<br/>    text-align:left !important;<br/>  }<br/>  .'+mClass+'{<br/>    max-height:'+mobileTopPosition+'px !important;<br/>  }<br/> .'+divClass+'{<br/>    margin-top:0 !important;<br/>  }<br/>  .'+divClass+' table{<br/>    max-width:'+innerDivMobWidth+' !important;<br/>  }<br/>}<br/>&lt;/style&gt;';

    }

    generatePreview +='\n'
    +'<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width:'+mediaQuery+'px;">\n'
    +'  <tr>\n'
    +'    <td class="align" style="text-align:center;">\n'
    +'      <div class="'+mClass+'" style="max-height:'+desktopTopPosition+'px;">\n'
    +'        <img src="'+imgUrl+'" width="'+imgWidth+'" alt="" style="width:100%;max-width:'+imgWidth+'px;height:auto;display:block;border:0;background-color:'+bgFallbackColor+'">\n'
    +'      </div>\n'
    +'      \n'
    +'          <!--[if mso]>\n'
    +'          <v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" stroked="f" filled="f" style="width:'+innerDivWidth+'px;height:auto;position:relative;top:-'+vmlTopPosition+'px;'+vmlDesktopCenter+'" alt="">\n'
    +'          <v:textbox inset="0,0,0,0" style="mso-fit-shape-to-text:true;">\n'
    +'          <![endif]--> \n'
    +'          <div class="'+divClass+'" style="margin-top:'+gangaPosition+'">     \n'
    +'          <table  role="presentation" border="0" cellpadding="0" cellspacing="0"  width="100%" style="max-width:'+innerDivWidth+'px;'+innerDivbgColor+'position:relative;display:inline-block;">\n'
    +'            <!---INSERT YOUR CONTENT (title, text, CTA...) --->\n'
    +'            <tr>\n'
    +'                  <td  style="font-family: Arial,sans-serif;font-size:14px; mso-line-height-rule: exactly;line-height: 21px; color: #525ca3;padding:10px">\n'
    +'                    <h1 style="font-family: Arial,sans-serif;font-size:22px; mso-line-height-rule: exactly;line-height: 30px; color: #525ca3;margin:0">Lorem dat aut et quilom ommolut unt</h1>\n'
    +'                    <p style="margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore </p>\n'
    +'                  </td>\n'
    +'                </tr>\n'
    +'          </table>\n'
    +'        </div>\n'
    +'          <!--[if mso]>\n'
    +'          <p style="margin:0;mso-hide:all">\n'
    +'          <o:p xmlns:o="urn:schemas-microsoft-com:office:office"> </o:p>\n'
    +'          </p>\n'
    +'          </v:textbox>\n'
    +'          </v:rect>\n'
    +'          <![endif]-->\n'
    +'         \n'
    +'    </td>\n'
    +'  </tr>\n'
    +'</table>\n'
    generateCode = '&lt;table role=&quot;presentation&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; border=&quot;0&quot; style=&quot;max-width:'+mediaQuery+'px;&quot;&gt;<br/>  &lt;tr&gt;<br/>    &lt;td class=&quot;align&quot; style=&quot;text-align:center;&quot;&gt;<br/>      &lt;div class=&quot;'+mClass+'&quot; style=&quot;max-height:'+desktopTopPosition+'px;&quot;&gt;<br/>        &lt;img src=&quot;'+imgUrl+'&quot; width=&quot;'+imgWidth+'&quot; alt=&quot;&quot; style=&quot;width:100%;max-width:'+imgWidth+'px;height:auto;display:block;border:0;background-color:'+bgFallbackColor+'&quot;&gt;<br/>      &lt;/div&gt;<br/>      <br/>      &lt;!--[if mso]&gt;<br/>      &lt;v:rect xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot; xmlns:o=&quot;urn:schemas-microsoft-com:office:office&quot; stroked=&quot;f&quot; filled=&quot;f&quot; style=&quot;width:'+innerDivWidth+'px;height:auto;position:relative;top:-'+vmlTopPosition+'px;'+vmlDesktopCenter+'&quot; alt=&quot;&quot;&gt;<br/>      &lt;v:textbox inset=&quot;0,0,0,0&quot; style=&quot;mso-fit-shape-to-text:true;&quot;&gt;<br/>      &lt;![endif]--&gt; <br/>      &lt;div class=&quot;'+divClass+'&quot; style=&quot;margin-top:'+gangaPosition+'&quot;&gt;     <br/>         &lt;table  role=&quot;presentation&quot; border=&quot;0&quot; cellpadding=&quot;0&quot; cellspacing=&quot;0&quot;  width=&quot;100%&quot; style=&quot;max-width:'+innerDivWidth+'px;'+innerDivbgColor+'position:relative;display:inline-block;&quot;&gt;<br/>         &lt;!---INSERT YOUR CONTENT (title, text, CTA...) ---&gt;<br/>         &lt;/table&gt;<br/>      &lt;/div&gt;<br/>      &lt;!--[if mso]&gt;<br/>      &lt;p style=&quot;margin:0;mso-hide:all&quot;&gt;<br/>      &lt;o:p xmlns:o=&quot;urn:schemas-microsoft-com:office:office&quot;&gt; &lt;/o:p&gt;<br/>      &lt;/p&gt;<br/>      &lt;/v:textbox&gt;<br/>      &lt;/v:rect&gt;<br/>      &lt;![endif]--&gt;   <br/>    &lt;/td&gt;<br/>  &lt;/tr&gt;<br/>&lt;/table&gt;' ;
    $('#preview').html(generatePreview);
    $('#code').html(generateCode);
    $('#css').html(generateCss);    

}update();
 $(document).ready(function(){
    imgLoad = $("<img/>");
    imgLoad.attr('src', imgUrl);
    imgLoad.on("load", function () {
    originalHeight = this.height;  
    originalWidth=this.width;
    update();
    });
})

$(document).on('change','#imgWidth',function(){
     originalWidth = imgLoad[0].width;
    originalHeight = imgLoad[0].height;
    originalHeight = (originalHeight / originalWidth) * $('#imgWidth').val();
    update();
});

$( "input:not('#imgWidth'), select" ).on('change',function() {
  update();
});

})(jQuery);
