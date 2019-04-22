
import {formatPrice} from "../utils/index";
import moment from 'moment';
moment.locale('zh-cn');
/**
 * @desc:vue 工具插件，可全局使用
 */
export default {
    install(Vue, options) {
        Vue.prototype.formatPrice = (number) => formatPrice(number);
        Vue.prototype.getTime = () => {
            console.log(`time:${new Date().getTime()}`);
        };
        Vue.prototype.formatTime = (date) => moment(date).format('YYYY-MM-DD HH:mm:ss');
    }
}
