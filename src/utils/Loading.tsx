import { FC, memo } from "react";
import "./Loading.css";


const Loading: FC = memo(() => (
  <div className="lds-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
))


export default Loading;
