window.onload=function(){
	oMyself=document.getElementById("myself");
	oIntro=document.getElementById("introduction");
	oMyself.onmouseover=function()
		{
			oIntro.style.display="block";
		}
	oMyself.onmouseout=function()
		{
			oIntro.style.display="none";
		}

	}