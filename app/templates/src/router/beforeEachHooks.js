// import Vue from 'vue';
// import { getSearchByName, getItem, setItem } from '@/utils';

export default {
  checkToken(to, from, next) {
    // const tk = getSearchByName('tk'); // ?tk='abbb' 默认tk 暂时
    // const token = getItem('token');
    // const _tk = tk || token || '';

    // if (_tk !== '') {
    //   setItem('token', _tk);
    //   next();
    // } else {
    //   alert('?tk=token you forgot to add token...');
    // }
    next();
  },
  checkLoginAuth(to, from, next) {
    next();
  },
  checkPageAuth(to, from, next) {
    next();
  }
};
