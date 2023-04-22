function tang()
{
	var sl=document.getElementById('soluong').value;
	sl=parseInt(sl,10);
	sl++;
	document.getElementById('soluong').value=sl;
}
function giam()
{
	var sl=document.getElementById('soluong').value;
	sl=parseInt(sl,10);
	sl--;
	document.getElementById('soluong').value=sl;
	if(sl<1)
			sl=1;
	document.getElementById('soluong').value=sl;
}