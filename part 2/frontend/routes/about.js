import moment from 'moment';
import 'moment/locale/ru';

const today = moment(new Date())
today.local('ru');
alert(today.local('ru').format('DD MMMM YYYY'))
