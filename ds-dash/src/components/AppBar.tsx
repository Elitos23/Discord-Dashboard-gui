
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GuildContext } from "../utils/contexts/GuildContext";
import { getIconURL } from "../utils/helper";
import { AppBarStyle } from "../utils/styles";
export const AppBar = () => {
const { guild } = useContext(GuildContext);
  return guild ? (
    <AppBarStyle>
      <p style={{
        fontSize: '20px'

      }}>Configuring {guild.name}</p>
      <img
       src={getIconURL(guild)}
      height={60} width={60}
      style={{

          borderRadius: '50%'

      }}
      alt='logo'/>
    </AppBarStyle>
  ) : ( <Navigate replace to="/menu"/>);
};
