import axios from 'axios';
// import qs from 'qs';
import Vue from 'vue';

import { getItem } from '@/utils';
import axiosConfig, { codeMessage } from './config';
import validate from './validate';

// const instance = axios.create({ ...config });

axios.interceptors.request.use(
  config => {
    // 0. Do something before request is sent
    // 1. can be add loading
    // 2. make sure if need token
    // 根据不同的系统 添加特殊 header 值
    config = validate(config.baseURL, config);
    if (config.withCredentials) {
      config.headers.token = getItem('token');
    }
    const method = config.method.toLocaleLowerCase();

    if (method === 'post' || method === 'put' || method === 'delete') {
      // config.data = qs.stringify(config.data);
    }

    return config;
  },
  error => {
    // when set loading close it
    if (
      error.code === 'ECONNABORTED' &&
      error.message.indexOf('timeout') !== -1
    ) {
      // do something when request timeout
    }
    console.error('interceptors.request error', error);
    // error message tips here
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    // for ie9 reponse.data undefined
    let data =
      response.data == undefined
        ? response.request.responseText
        : response.data;

    // for error code
    // throw error
    return data;
  },
  error => {
    const { status } = error.response;

    const cmsg = codeMessage[status];
    if (cmsg != undefined) {
      Vue.prototype.$message.error(codeMessage[status]);
      error.message = cmsg;
    } else {
      error.message = '连接到服务器失败';
    }

    return Promise.reject(error);
  }
);

/**
 * 特殊处理 headers  // 暂时不用
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
// eslint-disable-next-line
const opHeaders = options => {
  let { headers } = options;

  if (headers) {
    headers = Object.assign(axiosConfig.headers, headers);
  }
  // 浅copy options header值已经改变
  return Object.assign(axiosConfig, options);
};

export default function request(options) {
  if (typeof options !== 'object') {
    throw new Error('make sure the params options is an Object...');
  }

  const cf = JSON.parse(JSON.stringify(axiosConfig));
  options = Object.assign(cf, options); // 合并 config

  return new Promise((resolve, reject) => {
    axios(options)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
}
