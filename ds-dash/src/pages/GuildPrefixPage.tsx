import { useContext } from "react";
import { MoonLoader } from "react-spinners";
import { updateChannel, updateGuildPrefix, updateWlrole } from "../utils/api";
import { GuildContext } from "../utils/contexts/GuildContext";
import { useFetchGuildConfig } from "../utils/hooks/useFetchGuildConfig";
import { Button, Container, InputField, Page, Title, Flex } from "../utils/styles";
//const { guild } = useContext(GuildContext);

export const GuildPrefixPage = () => {
  const { guild } = useContext(GuildContext);
  const guildId = (guild && guild.id) || '';
const {config, loading, error, prefix, setPrefix, wlrole, setWlrole, channel, setChannel}  = useFetchGuildConfig(guildId)

console.log(error)

const savePrefix =  async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault();
  console.log(prefix);
  try {
const res = await updateGuildPrefix(guildId, prefix)
console.log(res);
  }catch(err){
  console.log(err)
  }
};

const saveWlrole =  async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault();
  console.log(wlrole);
  try {
const res = await updateWlrole(guildId, wlrole)
console.log(res);
  }catch(err){
  console.log(err)
  }
};

const saveChannel =  async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  e.preventDefault();
  console.log(channel);
  try {
const res = await updateChannel(guildId, channel)
console.log(res);
  }catch(err){
  console.log(err)
  }
};

return( <Page>

<Container style={{}}>
{!loading && config ? (<>
  <Title>Update Server Settings</Title>
  <form>
  <div>
  <label style={{marginBottom: "100px" }}
  htmlFor="prefix">Current Prefix
  </label>
  </div>
  <InputField style={{marginBottom: "20px", marginTop:"25px"}} id="prefix" value={prefix}
  onChange={(e) => setPrefix(e.target.value)}></InputField>
  <div>
  <Button variant="primary" onClick={savePrefix}> Save</Button>
  <Button variant="secondary"> Reset</Button></div>
  </form>


  <form style={{marginTop: "80px"}}>
  <div>
  <label style={{marginBottom: "100px" }}
  htmlFor="wlrole">Current Whitelist Role Id
  </label>
  </div>
  <InputField style={{marginBottom: "20px", marginTop:"25px"}}  id="wlrole" value={wlrole}
    onChange={(e) => setWlrole(e.target.value)}
   ></InputField>
  <div>
  <Button variant="primary" onClick={saveWlrole}> Save</Button>
  <Button variant="secondary"> Reset</Button></div>
  </form>


  <form style={{marginTop: "80px"}}>
  <div>
  <label style={{marginBottom: "100px" }}
  htmlFor="wlrole">Current Admins Channel Id
  </label>
  </div>
  <InputField style={{marginBottom: "20px", marginTop:"25px"}}  id="channel" value={channel}
    onChange={(e) => setChannel(e.target.value)}
   ></InputField>
  <div>
  <Button variant="primary" onClick={saveChannel}> Save</Button>
  <Button variant="secondary"> Reset</Button></div>
  </form>

  </> ) : (
     <Flex>
     <MoonLoader size={30} color="white"/>
     </Flex> )}
</Container>
</Page>)}
