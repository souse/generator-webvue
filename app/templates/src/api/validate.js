/**
 * 根据不同的小系统，添加必要字段
 * @param  {[type]} baseUrl [description]
 * @param  {[type]} config  [description]
 * @return {[type]}         [description]
 */
export default function validate(baseUrl, config) {
  if (baseUrl.indexOf('sc.') != -1) {
    config.headers.sysCode = 9;
  }

  return config;
}
