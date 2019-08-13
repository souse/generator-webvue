/** 公共信息作相关store */

import mutations from './mutations';
import actions from './action';

const state = {
  provinceList: [],
  cityList: [],
  cityMap: {}, // key => provinceId; value => cityList
  countyList: [],
  countyMap: {}, // key => cityId; value => countyList
  townList: [],
  townMap: {}, // key => countyId; value => townList
  hospitalList: [] // 医院列表
};

export default {
  // name: true,
  state,
  mutations,
  actions
};
