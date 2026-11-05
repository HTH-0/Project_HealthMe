import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// CSRF: XSRF-TOKEN 쿠키 값을 X-XSRF-TOKEN 헤더로 보낸다.
// 8090 주소로 직접 보내는 요청(다른 출처)에도 붙도록 withXSRFToken을 켠다.
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
// 로그인 전 첫 화면에서도 변경 요청이 거부되지 않도록 토큰 쿠키를 먼저 받아 둔다.
axios.get("/healthme/users/csrf").catch(() => {});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);
