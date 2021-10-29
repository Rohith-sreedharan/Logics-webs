<SCRIPT language=JavaScript>
<!--

//Accept terms & conditions script (by Rohithaditya)
//Visit Botsuniverse.ml
-->
 
function checkCheckBox(f){
if (f.agree.checked == false )
{
alert('Please check the box to continue.');
return false;
}else
return true;
}
//-->
</SCRIPT>

<form action="/index.html" method="POST" onsubmit="return checkCheckBox(this)">

<!--Enter your form contents here-->

<b>By submitting, I agree that all info entered was done accurately & truthfully.</b><br />
I accept: <input type="checkbox" value="0" name="agree">
<input type="submit" value="Submit form">
<input type="button" value="Exit" onclick="document.location.href='/index.html';">
</form>
