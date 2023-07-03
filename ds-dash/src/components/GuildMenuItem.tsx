
import { getIconURL } from '../utils/helper';
import { GuildMenuItemStyle } from '../utils/styles';
import { PartialGuild } from '../utils/types';

type Props = {
    guild: PartialGuild;
};

export const GuildMenuItem = ({ guild }: Props) => (
    <GuildMenuItemStyle>
        <img src={getIconURL(guild)}
            alt={guild.name}
            width={50}
            style={{borderRadius: '25%'}}
            />
        <p>{guild.name}</p>
    </GuildMenuItemStyle>

)
