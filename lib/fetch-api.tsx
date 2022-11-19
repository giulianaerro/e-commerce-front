const BASE_URL = "https://e-commerce-api-ten.vercel.app/api";

let notAuthCounter = 0;

export const fetchApi = async (input: any, options: any = {}) => {
  const headers = options.headers || {};
  const savedToken = await getSavedToken();
  const url = BASE_URL + input;

  const completeOptions = {
    ...options,
    headers: {
      Accept: "application/json",
      Authorization: savedToken ? "Bearer " + savedToken : null,
      "Content-Type": "application/json",
      ...headers,
    },
  };

  const res = await fetch(url, completeOptions);
  let jsonResponse;

  try {
    jsonResponse = await res.json();
  } catch (e) {
    throw res;
  }

  if (res.status >= 200 && res.status < 300) {
    notAuthCounter = 0;
    return jsonResponse;
  } else if (res.status === 401) {
  } else {
    notAuthCounter++;
  }
  throw jsonResponse;
};

export const postApi = (input: any, options: any = {}) =>
  fetchApi(input, {
    ...options,
    method: "POST",
    body: JSON.stringify(options.body),
  });
export async function saveToken(token: string) {
  localStorage.setItem("auth_token", token);
}
export async function getSavedToken() {
  return localStorage.getItem("auth_token");
}
