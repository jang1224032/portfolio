// '2019년 8월 11일 11시 11분 11초' 형식으로 보내주는 함수
function dspDate (d, type=0) {
	var monthArr = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
	var weekArr = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
	var year = d.getFullYear() + "년 ";						// 2019
	var month = monthArr[d.getMonth()] + " ";		// 7 (0~11)
	var day = d.getDate() + "일 ";								// 1~31
	var hour = d.getHours() + "시 ";							// 0~23
	var min = d.getMinutes() + "분 ";							// 0~59
	var sec = d.getSeconds() + "초 ";							// 0~59
	var week = weekArr[d.getDay()];
	var returnStr;
	/* 
	type 0: 2019년 8월 11일 11시 11분 11초
	type 1: 2019년 8월 11일 11시 11분
	type 2: 2019년 8월 11일 11시
	type 3: 2019년 8월 11일
	type 4: 8월 11일
	*/
	switch(type) {
		case 1:
				return year + month + day + hour + min + week;
			break;
		case 2:
				return year + month + day + hour + week;
			break;
		case 3:
				return year + month + day + week;
			break;
		case 4:
				return month + day + week;
			break;
		default:
				return year + month + day + hour + min + sec + week;
			break;

	}
	return returnStr;
}