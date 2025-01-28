// JavaScript Document
window.onload = function() {
	var d = new Date();
	var m = d.getMonth()+1;
	var y = d.getFullYear();
	var y4 = y/4;
	var da = d.getDate();
	var da2 = da+1;
	var da3 = da+2;
	var da4 = da+3;
	var da5 = da+4;
	var da6 = da+5;
	var da7 = da+6;
	var da8 = da+7;
	var m2 = m;
	var m3 = m;
	var m4 = m;
	var m5 = m;
	var m6 = m;
	var m7 = m;
	var m8 = m;
	
// 明日の検証
	if (m == 2){
		if (Number.isInteger(y4)) {
			if (da2 > 29) {
				da2 = da2-29;
				m2 = m+1;
			} 
		} else {
			if (da2 > 28) {
				da2 = da2-28;
				m2 = m+1;
			}
		}
	} else {
		if (m == 4) {
			if (da2 > 30) {
				da2 = da2-30;
				m2 = m+1;
			} 
		} else if (m == 6) {
			if (da2 > 30) {
				da2 = da2-30;
				m2 = m+1;
			} 
		} else if (m == 9) {
			if (da2 > 30) {
				da2 = da2-30;
				m2 = m+1;
			} 
		} else if (m == 11) {
			if (da2 > 30) {
				da2 = da2-30;
				m2 = m+1;
			} 
		} else {
			if (da2 > 31) {
				da2 = da2-31;
				m2 = m+1;
			}
		}
	}
	
// 3日目の検証
	if (m3 == 2){
		if (Number.isInteger(y4)) {
			if (da3 > 29) {
				da3 = da3-29;
				m3 = m+1;
			} 
		} else {
			if (da3 > 28) {
				da3 = da3-28;
				m3 = m+1;
			}
		}
	} else {
		if (m3 == 4) {
			if (da3 > 30) {
				da3 = da3-30;
				m3=m3+1;
			} 
		} else if (m3 == 6) {
			if (da3 > 30) {
				da3 = da3-30;
				m3=m3+1;
			} 
		} else if (m3 == 9) {
			if (da3 > 30) {
				da3 = da3-30;
				m3=m3+1;
			} 
		} else if (m3 == 11) {
			if (da3 > 30) {
				da3 = da3-30;
				m3=m3+1;
			} 
		} else {
			if (da3 > 31) {
				da3 = da3-31;
				m3=m3+1;
			}
		}
	}
	
// 4日目の検証
	if (m4 == 2){
		if (Number.isInteger(y4)) {
			if (da4 > 29) {
				da4 = da4-29;
				m4 = m+1;
			} 
		} else {
			if (da4 > 28) {
				da4 = da4-28;
				m3 = m+1;
			}
		}
	} else {
		if (m4 == 4) {
			if (da4 > 30) {
				da4 = da4-30;
				m4=m4+1;
			} 
		} else if (m4 == 6) {
			if (da4 > 30) {
				da4 = da4-30;
				m4=m4+1;
			} 
		} else if (m4 == 9) {
			if (da4 > 30) {
				da4 = da4-30;
				m4=m4+1;
			} 
		} else if (m4 == 11) {
			if (da4 > 30) {
				da4 = da4-30;
				m4=m4+1;
			} 
		} else {
			if (da4 > 31) {
				da4 = da4-31;
				m4=m4+1;
			}
		}
	}

// 5日目の検証
	if (m5 == 2){
		if (Number.isInteger(y4)) {
			if (da5 > 29) {
				da5 = da5-29;
				m5 = m+1;
			} 
		} else {
			if (da5 > 28) {
				da5 = da5-28;
				m5 = m+1;
			}
		}
	} else {
		if (m5 == 4) {
			if (da5 > 30) {
				da5 = da5-30;
				m5=m5+1;
			} 
		} else if (m5 == 6) {
			if (da5 > 30) {
				da5 = da5-30;
				m5=m5+1;
			} 
		} else if (m5 == 9) {
			if (da5 > 30) {
				da5 = da5-30;
				m5=m5+1;
			} 
		} else if (m5 == 11) {
			if (da5 > 30) {
				da5 = da5-30;
				m5=m5+1;
			} 
		} else {
			if (da5 > 31) {
				da5 = da5-31;
				m5=m5+1;
			}
		}
	}

// 6日目の検証
	if (m6 == 2){
		if (Number.isInteger(y4)) {
			if (da6 > 29) {
				da6 = da6-29;
				m6 = m+1;
			} 
		} else {
			if (da6 > 28) {
				da6 = da6-28;
				m6 = m+1;
			}
		}
	} else {
		if (m6 == 4) {
			if (da6 > 30) {
				da6 = da6-30;
				m6=m6+1;
			} 
		} else if (m6 == 6) {
			if (da6 > 30) {
				da6 = da6-30;
				m6=m6+1;
			} 
		} else if (m6 == 9) {
			if (da6 > 30) {
				da6 = da6-30;
				m6=m6+1;
			} 
		} else if (m6 == 11) {
			if (da6 > 30) {
				da6 = da6-30;
				m6=m6+1;
			} 
		} else {
			if (da6 > 31) {
				da6 = da6-31;
				m6=m6+1;
			}
		}
	}

// 7日目の検証
	if (m7 == 2){
		if (Number.isInteger(y4)) {
			if (da7 > 29) {
				da7 = da7-29;
				m7 = m+1;
			} 
		} else {
			if (da7 > 28) {
				da7 = da7-28;
				m7 = m+1;
			}
		}
	} else {
		if (m7 == 4) {
			if (da7 > 30) {
				da7 = da7-30;
				m7=m7+1;
			} 
		} else if (m7 == 6) {
			if (da7 > 30) {
				da7 = da7-30;
				m7=m7+1;
			} 
		} else if (m7 == 9) {
			if (da7 > 30) {
				da7 = da7-30;
				m7=m7+1;
			} 
		} else if (m7 == 11) {
			if (da7 > 30) {
				da7 = da7-30;
				m7=m7+1;
			} 
		} else {
			if (da7 > 31) {
				da7 = da7-31;
				m7=m7+1;
			}
		}
	}
	
// 8日目の検証
	if (m8 == 2){
		if (Number.isInteger(y4)) {
			if (da8 > 29) {
				da8 = da8-29;
				m8 = m+1;
			} 
		} else {
			if (da8 > 28) {
				da8 = da8-28;
				m8 = m+1;
			}
		}
	} else {
		if (m8 == 4) {
			if (da8 > 30) {
				da8 = da8-30;
				m8=m8+1;
			} 
		} else if (m8 == 6) {
			if (da8 > 30) {
				da8 = da8-30;
				m8=m8+1;
			} 
		} else if (m8 == 9) {
			if (da8 > 30) {
				da8 = da8-30;
				m8=m8+1;
			} 
		} else if (m8 == 11) {
			if (da8 > 30) {
				da8 = da8-30;
				m8=m8+1;
			} 
		} else {
			if (da8 > 31) {
				da8 = da8-31;
				m8=m8+1;
			}
		}
	}
	
// month検証
	if (m2 > 12) {
		m2 = m2-1;
	}
	
	if (m3 > 12) {
		m3 = m3-1;
	}
	
	if (m4 > 12) {
		m4 = m4-1;
	}
	
	if (m5 > 12) {
		m5 = m5-1;
	}
	
	if (m5 > 12) {
		m5 = m5-1;
	}
	
	if (m5 > 12) {
		m5 = m5-1;
	}
	
	if (m6 > 12) {
		m6 = m6-1;
	}
	
	if (m7 > 12) {
		m7 = m7-1;
	}
	
	if (m8 > 12) {
		m8 = m8-1;
	}

	document.getElementById("today").innerHTML = m+"/"+da;
	document.getElementById("tomorrow").innerHTML = m2+"/"+da2;
	document.getElementById("thirdday").innerHTML = m3+"/"+da3;
	document.getElementById("fourthday").innerHTML = m4+"/"+da4;
	document.getElementById("fifthday").innerHTML = m5+"/"+da5;
	document.getElementById("sixthday").innerHTML = m6+"/"+da6;
	document.getElementById("seventhday").innerHTML = m7+"/"+da7;
	document.getElementById("eighthday").innerHTML = m8+"/"+da8+"~";
	document.getElementById("dateconfirm").innerHTML = y+"/"+m+"/"+da;
}
