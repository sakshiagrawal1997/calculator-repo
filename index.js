
function dis(val)
{
document.getElementById("cal").value+=val
 }

function solve()
{
let x = document.getElementById("cal").value
let y = eval(x)
document.getElementById("cal").value = y
}

function clr()
{
document.getElementById("cal").value = ""
}