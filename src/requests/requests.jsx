function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 500) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * 登录请求
 *
 * @param data 数据
 */
// export function loginReq(data) {
//     const options = {};
//     options.method = "post";
//     options.made = "cors";
//     options.body = JSON.stringify(data);
//     options.headers = {
//     "Content-Type": "application/json",
//     };
//     return fetch("/loginOk", options, { credentials: "include" })
//     .then(checkStatus)
//     .then(parseJSON)
//     .then((res) => {
//         if (res.retCode === "0001") {
//         localStorage.setItem("x-access-token", res.retBody.AccessToken);
//             return "success";
//         } else if (res.retCode === "0002") {
//             return "error";
//         } else if (res.retCode === "0003") {
//             return "error";
//         } else {
//             return;
//         }
//     })
//     .catch((err) => ({ err }));
// }

/**
 * 普通请求
 * @param {*url,*method,*data} options
 */
export default async function request(options = {}) {
    const Authorization = localStorage.getItem("x-access-token");
    const { data, url } = options;
    options = { ...options };
    options.mode = "cors";//跨域
    delete options.url;
    if (data) {
        delete options.data;
        options.body = JSON.stringify(data);
    }
    options.headers = {
    "x-access-token": Authorization,
    "Content-Type": "application/json;charset=UTF-8",
    };
    try {
        const response = await fetch(url, options, { credentials: "include" });
        const response_1 = await checkStatus(response);
        return parseJSON(response_1);
    }
    catch (err) {
        return ({ err });
    }
}
