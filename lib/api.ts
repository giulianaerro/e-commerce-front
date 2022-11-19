import { postApi, saveToken } from "./fetch-api";

export async function sendCode(email: string) {
  return postApi("/auth", {
    body: { email },
  });
}
export async function getToken(email: string, code: string) {
  const { token } = await postApi("/auth/token", {
    body: { email, code: parseInt(code) },
  });
  saveToken(token);
  return true;
}
