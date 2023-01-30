import { FC } from "react";
import { observer } from "mobx-react-lite";
import useStore from "@/stores";
import api from "@/services";

const Home: FC = () => {
  const { homeStore } = useStore();

  const getUserInfo = () => {
    api.userInfoApi().then((res) => {
      console.log(res);
    });
  };

  const login = () => {
    api
      .loginApi({
        UserName: "xiaoming",
        Password: "12345678",
      })
      .then((res) => {
        localStorage.setItem("token", res);
      });
  };

  return (
    <div>
      <h2>store.count: {homeStore.count}</h2>
      <button
        onClick={() => {
          homeStore.increase();
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          homeStore.decrease();
        }}
      >
        decrease
      </button>

      <hr />

      <button onClick={login}>login</button>
      <button onClick={getUserInfo}>getUserInfo</button>
    </div>
  );
};

export default observer(Home);
