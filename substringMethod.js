// Replaces oldStr with newStr in the string fullS

function replaceString(oldStr, newStr, fullStr) {
  for (var i = 0; i < fullStr.length; ++i) {
    if (fullStr.substring(i, i + oldStr.length) == oldStr) {
      fullStr = fullStr.substring(0, i) + newStr + fullStr.substring(i + oldStr.length, fullStr.length);
    }
  }
  return fullStr;
}

/*
function replaceString(oldStr, newStr, fullStr) {
  return fullStr.split(oldStr).join(newStr);
}*/

console.log(replaceString('World', 'Web', 'Brave New OtherWorld'));
