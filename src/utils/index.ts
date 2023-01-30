const get = (
  obj: any,
  path: string[] | string,
  defaultValue: any = undefined
) => {
  let newPath = [];
  if (Array.isArray(path)) {
    newPath = path;
  } else {
    newPath = path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }

  return (
    newPath.reduce((reslut, current) => {
      return (reslut || {})[current];
    }, obj) || defaultValue
  );
};

const debounce = (fn: Function, delay = 200) => {
  let timer: number | null = null;

  return function () {
    if (timer) clearTimeout(timer);

    timer = window.setTimeout(function () {
      // @ts-ignore
      fn.apply(this, arguments);
    }, delay);
  };
};

const throttle = (fn: Function, delay: number) => {
  let timer: number | null = null;

  return function () {
    if (timer) return;

    timer = window.setTimeout(() => {
      // @ts-ignore
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };

  // let prevTime = 0;
  // return function () {
  //   const now = Date.now();
  //   if (now - prevTime > delay) {
  //     // @ts-ignore
  //     fn.apply(this, arguments);
  //     prevTime = now;
  //   }
  // };
};

const utils = {
  get,
  debounce,
  throttle,
};

export default utils;
