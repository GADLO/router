import { Storage } from "@/libs/utils";
import { loginService, registerService } from "@/services/User";
import { reactive, Ref, toRefs } from "vue";

function checkUserInfo(field: Ref, num: number): boolean {
  return field.value.length >= num;
}

export function useRegister() {
  const state = reactive({
    username: "",
    password: "",
    rePassword: "",
  });

  const submitUserInfo = async () => {
    return await registerService({
      username: state.username,
      password: state.password,
    });
  };

  const comparePassword = (): boolean => {
    return state.password === state.rePassword;
  };

  return {
    ...toRefs(state),
    submitUserInfo,
    checkUserInfo,
    comparePassword,
  };
}

export function useLogin() {
  const state = reactive({
    username: "",
    password: "",
  });

  const submitUserInfo = async () => {
    return await loginService({
      username: state.username,
      password: state.password,
    });
  };

  return {
    ...toRefs(state),
    checkUserInfo,
    submitUserInfo,
  };
}

export function useStorage() {
  const setUserStorage = (accessToken: string, level: string) => {
    Storage.set("access_token", accessToken);
    Storage.set("user_level", level);
  };

  const removeUserStorage = () => {
    Storage.remove("access_token");
    Storage.remove("user_level");
  };

  return {
    setUserStorage,
    removeUserStorage,
  };
}
