import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import COLOR from "../../config/color";
import "./style.css";
import { FaKey, FaUserAlt } from "react-icons/fa";
import { Fakey } from "react-icons/fa";

function LoginPage() {
  const [email, setEmail] = useState("@gmail.com");

  return (
    <div className="loginPageBaseContainer">
      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentTitleContainer">
          <h1> SkillUp </h1>
          <h4>WELCOME</h4>
        </div>
        <div className="loginPageContentInputContainer">
          <CustomInput
            type={"email"}
            placeholder={"Enter Email"}
            Icon={FaUserAlt}
            inputValue={email}
            onChangeText={(e) => {
              setEmail(e.target.value);
            }}
          />
          <CustomInput
            type="password"
            placeholder={"Enter Password"}
            Icon={FaKey}
            isSecureEntry={true}
          />
        </div>
        <div className="loginPageContentButtonContainer"></div>
        <div className="loginPageContentRegisterContainer"></div>
      </div>
    </div>
  );
}
export default LoginPage;
