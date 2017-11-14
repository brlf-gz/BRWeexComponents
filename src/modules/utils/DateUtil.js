/**
 * Created by Aijun on 2017/11/10.
 */


/**
 * Created by Aijun on 2017/11/10.
 */


var DateUtil = {

    /**
     * 时间格式化
     * @param fmt   yyyy-MM-dd hh:mm:ss.S
     * @param date  Date()对象
     * @returns {*}
     */
    format: function(fmt, date) {

        var o = {
            "M+" : date.getMonth()+1,                 //月份
            "d+" : date.getDate(),                    //日
            "h+" : date.getHours(),                   //小时
            "m+" : date.getMinutes(),                 //分
            "s+" : date.getSeconds(),                 //秒
            "q+" : Math.floor((date.getMonth()+3)/3), //季度
            "S"  : date.getMilliseconds()             //毫秒
        };
        if(/(y+)/.test(fmt))
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("("+ k +")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
    },

    getMonth:function(tip){
        var data = new Date();
        var month = data.getMonth() + 1;
        var lastMonth = month + tip;
        if(lastMonth < 0){
            month = lastMonth + 12;
        }else if(lastMonth > 12){
            month = lastMonth - 12;
        }else{
            month = lastMonth;
        }

        return month;
    },
    /** 获得当前年月和向上、向下月份**/
    getYearMonth:function(tip){
        var data = new Date();
        var year = data.getFullYear();
        var month = data.getMonth() + 1;

        var lastMonth = month + tip;
        if(lastMonth < 0){
            year = year - 1;
            month = lastMonth + 12;
        }else if(lastMonth > 12){
            year = year + 1;
            month = lastMonth - 12;
        }else{
            month = lastMonth;
        }

        if(month < 10){
            month = "0" + month;
        }

        return year + "-" + month;
    },

    /**
     * 两个时间戳的时间差距， 返回格式为HH:mm:ss
     * @param time1
     * @param time2
     */
    timeGap:function(time1, time2) {

        var gap = Math.abs(time1 - time2);

        var second = gap % 60;
        var minute = ((gap - second) / 60) % 60;
        var hour = (gap - second - minute * 60) / (60 * 60);
        var secondStr = second > 9 ? second : "0" + second;
        var hourStr = hour > 9 ? hour : "0" + hour;
        var minuteStr = minute > 9 ? minute : "0" + minute;
        //1497511301  2017/6/15 15:21:41   1497522303  2017/6/15 18:25:3  11002

        return hourStr + ":" + minuteStr + ":" + secondStr;

    },

    dateFromString:function (str) {
        let timeList = str.split(" ");
        let date = new Date();
        date.setTime(631123200000);  //1990-1-1 00:00
        if (timeList.length > 0) {
            let ymd = timeList[0];
            let ymdList = ymd.split("-");

            if (ymdList.length > 0) {
                let y = parseInt(ymdList[0]);
                if (y > 0) {
                    date.setYear(y);
                }
            }

            if (ymdList.length > 1) {
                let m = parseInt(ymdList[1]);
                if (m > 0) {
                    date.setMonth(m - 1);
                }
            }

            if (ymdList.length > 2) {
                let d = parseInt(ymdList[2]);
                if (d > 0) {
                    date.setDate(d);
                }
            }

        }

        if (timeList.length > 1) {
            let hm = timeList[1].split(":");

            if (hm.length > 0) {
                let h = parseInt(hm[0]);
                if (h > 0) {
                    date.setHours(h);
                }
            }

            if (hm.length > 1) {
                let m = parseInt(hm[1]);
                if (m > 0) {
                    date.setMinutes(m);
                }
            }

            if (hm.length > 2) {
                let s = parseInt(hm[2]);
                if (s > 0) {
                    date.setSeconds(s);
                }
            }
        }

        return date;
    }

};

export default DateUtil;
