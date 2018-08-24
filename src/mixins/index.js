
var mixin = {
    data: () => {
        return {
            apiUrl: {
            }
        };
    },
    methods: {
        /*格式化时间*/
        formatDateTime(date, format) {
            if (!date) {
                return '';
            }
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            m = m < 10 ? ('0' + m) : m;
            var d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            var h = date.getHours();
            var minute = date.getMinutes();
            var second = date.getSeconds();
            minute = minute < 10 ? ('0' + minute) : minute;
            second = second < 10 ? ('0' + second) : second;
            if (format == 'y-m-d h-m-s') {
                return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
            } else if (format == 'h-m') {
                return ' ' + h + ':' + minute;
            } else if (format == 'y-m-d') {
                return y + '-' + m + '-' + d;
            } else if (format == 'y/m/d') {
                return y + '/' + m + '/' + d;
            } else if (format == 'ymd') {
                return y + '' + m + '' + d;
            }
        },
    }

};
export default mixin;

