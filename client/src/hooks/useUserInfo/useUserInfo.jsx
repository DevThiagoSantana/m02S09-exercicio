import { useGlobalState } from "../useGlobalState";

export function useUserInfo() {
  const globalState = useGlobalState();
  return globalState?.user;
}

export function useUserIsAdmin() {
  const user = useUserInfo();
  return user?.isAdmin;
}