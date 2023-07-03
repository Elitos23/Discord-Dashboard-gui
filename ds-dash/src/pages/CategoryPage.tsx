import { useContext } from "react";
import { GuildContext } from '../utils/contexts/GuildContext'
import { Container, Flex, Grid, Page, TextButton, Title } from "../utils/styles";
import {IoSettingsSharp, IoNewspaperSharp} from 'react-icons/io5'
import { useNavigate } from "react-router-dom";

export const CategoryPage = () => {


const { guild } = useContext(GuildContext)
const navigate = useNavigate();
return (<Page>
<Container>
<div>
<div>
<Flex allignItems="center" justifyContent="space-between" >
<Title>Basic Configurations</Title>
<IoSettingsSharp size={35} />
</Flex>
<Grid >
<TextButton onClick={() => navigate('/dashboard/settings')}>
Server Settings
</TextButton>
<TextButton onClick={() => navigate('/dashboard/message')}>
Config new FCFS
</TextButton>
</Grid>
</div>
</div>
<div style={{ borderTop: '1px solid #4f4f4f', marginTop: '20px'}}>
<Flex  allignItems="center" justifyContent="space-between" >
<Title>Channel Logs</Title>
<IoNewspaperSharp size={35} />
</Flex>
<Grid>
<TextButton>
Moderation Logs
</TextButton>
<TextButton>
Bot Logs
</TextButton>
</Grid>
</div>
</Container>
</Page>
);
};
