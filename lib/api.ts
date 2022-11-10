const BASE_URL = "https://e-commerce-api-ten.vercel.app/api";

export async function fetchApi(input: RequestInfo, options) {
  const url = BASE_URL + input;
  const token = getSavedToken();
  const newOptions: any = options || {};
  if (token) {
    newOptions.headers ||= {};
    newOptions.headers.authorization = "Bearer " + token;
    newOptions.headers["content-type"] = "application/json";
  }
  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);
  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    throw { message: "Hubo un error", status: res.status };
  }
}

export async function sendCode(email: string) {
  return fetchApi("/auth", {
    method: "POST",
    body: { email },
  });
}
export async function getToken(email: string, code: string) {
  const data = await fetchApi("/auth/token", {
    method: "POST",
    body: { email, code: parseInt(code) },
  });
  saveToken(data.token);
  return true;
}
export async function saveToken(token: string) {
  localStorage.setItem("auth_token ", token);
}
export async function getSavedToken() {
  return localStorage.getItem("auth_token ");
}
