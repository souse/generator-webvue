/**
 * 根据 URL key 获取 value
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
export const getSearchByName = name => {
  const match = RegExp(`[?&]${name}=([^&]*)`).exec(window.location.href);

  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
};

export const getItem = name => {
  if (!name) return;
  const v = localStorage.getItem(name);
  let val = null;

  try {
    val = JSON.parse(v);
  } catch (e) {
    // JSON.parse 失败 后 直接赋v给val;
    val = v;
  }
  return val;
};

export const setItem = (name, value) => {
  if (!name) return;
  if (typeof value !== 'string') {
    value = JSON.stringify(value);
  }

  localStorage.setItem(name, value);
};

export const removeItem = name => {
  if (!name) return;
  localStorage.removeItem(name);
};
