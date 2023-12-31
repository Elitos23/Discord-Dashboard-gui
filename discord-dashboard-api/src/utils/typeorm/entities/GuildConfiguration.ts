import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'guild_configurations'})
export class GuildConfiguration {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, name: 'guild_id'})
    guildId: string;

    @Column({ default: '!'})
    prefix: string;

    @Column({ name: 'welcome_channel_id', nullable: true })
    welcomeChannelId: string;

    @Column({ default: 'none'})
    wlrole: string;

    @Column({ default: 'none id'})
    channel: string;
}
